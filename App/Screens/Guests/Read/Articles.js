import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Pressable,
} from 'react-native';
import {useQuery} from 'react-query';
import {
  Card,
  Subheading,
  Divider,
  Title,
  Text
} from 'react-native-paper';
import axios from 'axios';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useNavigation } from '@react-navigation/core';

const {width, height} = Dimensions.get('window');

export default function Articles() {
  const navigation = useNavigation();
  const getPosts = async () =>
    await axios.get(
      `https://www.dimensionplus.in/wp-json/wp/v2/posts?categories=117&per_page=3`);

  const {isLoading, isError, error, data, isFetching} = useQuery(
    'caseStudies',
    () => getPosts()
  );

  if (isLoading) {
    return (
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
          <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} />
          <SkeletonPlaceholder.Item marginLeft={20}>
            <SkeletonPlaceholder.Item
              width={120}
              height={20}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item
              marginTop={6}
              width={80}
              height={20}
              borderRadius={4}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    );
  }

  return (
    <SafeAreaView style={ArticlesStyles.Container}>
      <ScrollView>
      { Array.isArray(data.data) && !data.data.length ? (
          <Text>We Will Add Soon!</Text>
        ) : (
          data.data.map(post => (
            <Pressable key={post.id} onPress={
              () => {
                navigation.navigate("SinglePosts", { post_id: post.id })
              }
            }>
              <Card style={ArticlesStyles.MainCard}>
                <Card.Content>
                  <Card.Cover source={{uri: post.x_featured_media_original}} />
                  <Title>{post.title.rendered}</Title>
                  <Subheading>
                    - {post.x_author}, {post.x_date}
                  </Subheading>
                  {/* <Paragraph style={ ArticlesStyles.CardContent } numberOfLines={ 3 }>
                  <HTML source={{html: post.excerpt.rendered}}  contentWidth={width} tagsStyles={ {p: { textAlign: 'justify', color: '#4d4d4d' } }} />
                </Paragraph> */}
                </Card.Content>
              </Card>
              <Divider />
            </Pressable>
          ))
        ) }
      </ScrollView>
    </SafeAreaView>
  );
}

const ArticlesStyles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: width
  },
  CardContent: {
    width: width,
  },
});
