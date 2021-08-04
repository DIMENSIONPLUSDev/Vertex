import React, {useState} from 'react';
import {
  ScrollView,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Pressable,
  View,
} from 'react-native';
import {useQuery} from 'react-query';
import {Card, Subheading, Divider, Title, Text, ActivityIndicator} from 'react-native-paper';
import axios from 'axios';
import {useNavigation} from '@react-navigation/core';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const {width, height} = Dimensions.get('window');

export default function Articles() {
  const [page, setPage] = useState(1);
  const navigation = useNavigation();

  const getPosts = (page = 1) => {
    return axios.get(
      `https://www.dimensionplus.in/wp-json/wp/v2/posts?categories=117&page=${page}`,
    );
  };

  const {status, data, error, isFetching, isPreviousData, isLoading, isError} =
    useQuery(['caseStudies', page], () => getPosts(page), {
      keepPreviousData: true,
      staleTime: 5000,
    });

  if (isLoading || isFetching) {
    return (
      <ActivityIndicator
      animating={true}
      color="#4d4d4d"
      size="large"
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
    );
  }

  // console.log(data.pages);
  // //fetchNextPage();
  // console.log(hasPreviousPage)
 
  
  // console.log(data.pages.flatMap(post => console.log("this are all my posts:",post)));

  return (
    <SafeAreaView style={ArticlesStyles.Container}>
      <ScrollView>
        {Array.isArray(data.data) && !data.data.length ? (
          <Text>We Will Add Soon!</Text>
        ) : (
          data.data.map(post => (
            <Pressable
              key={post.id}
              onPress={() => {
                navigation.navigate('SinglePosts', {post_id: post.id});
              }}>
              <Card style={ArticlesStyles.MainCard}>
                <Card.Content>
                  <Card.Cover source={{uri: post.x_featured_media_original}} />
                  <Title>{post.title.rendered}</Title>
                  <Subheading>
                    - {post.x_author}, {post.x_date}
                  </Subheading>
                </Card.Content>
              </Card>
              <Divider />
            </Pressable>
          ))
        )}
      </ScrollView>
      <View style={ArticlesStyles.Navigation}>
      <Pressable onPress={() => setPage(old => Math.max(old - 1, 0))} disabled={page === 1}>
        <MaterialIcons name="navigate-before" color="#4d4d4d" size={32}/>
      </Pressable>
      <Pressable onPress={() => {
        if (!isPreviousData) {
          setPage(old => old + 1)
          console.log("clicked",page)
        }
         }}
         disabled={ isFetching || page == data.headers["x-wp-totalpages"]}
         >
        <MaterialIcons name="navigate-next" color="#4d4d4d" size={32}/>
      </Pressable>
      </View>
    </SafeAreaView>
  );
}

const ArticlesStyles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: width,
  },
  CardContent: {
    width: width,
  },
  Navigation:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingVertical: 5
  }
});
