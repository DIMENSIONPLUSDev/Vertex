import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, useWindowDimensions } from 'react-native'
import axios from 'axios';
import {useQuery} from 'react-query';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Divider, Headline, Paragraph, Subheading, Title } from 'react-native-paper';
import HTML, { IGNORED_TAGS } from 'react-native-render-html';
import { WebView } from "react-native-webview";

export default function SinglePosts({ route, navigation }) {
    const width = useWindowDimensions().width;
    const computeEmbeddedMaxWidth = (availableWidth) => {
      return Math.min(availableWidth, 500);
    };
    const { post_id } = route.params;

    const getPosts = async (post_id) =>
    await axios.get(
      `https://www.dimensionplus.in/wp-json/wp/v2/posts/${post_id}`);

  const {isLoading, isError, error, data, isFetching} = useQuery(
    ['singlePosts', post_id],
    () => getPosts(post_id)
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
        
        <SafeAreaView style={SinglePostStyle.Container}>
            <ScrollView>
            <Image source={{
                uri:data.data.x_featured_media_original
            }}
            style={SinglePostStyle.MainFeaturedImage}
            />
            
            <View style={ SinglePostStyle.MainView }>
                <Headline>
                    { data.data.title.rendered }
                </Headline>
                <Subheading>
                - {data.data.x_author}, {data.data.x_date}
                </Subheading>
                <Divider />
                    <HTML
                    contentWidth={ width } 
                    source={{
                        html: `${data.data.content.rendered}`
                    }} 
                    ignoredTags={[ ...IGNORED_TAGS]}
                    containerStyle={ SinglePostStyle.MainContent }
                    baseFontStyle={{ color:"#4d4d4d" }}
                    />
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const SinglePostStyle = StyleSheet.create({

    Container: {
        flex: 1,
    },
    MainFeaturedImage:{
        height: hp("30%"),
    },
    MainView:{
        elevation: 3,
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    MainContent:{
      justifyContent:"center",

    }
});
