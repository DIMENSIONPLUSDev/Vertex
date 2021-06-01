import React, {} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import GetAllPost from './GetAllPost';
import usePosts from '../../Hooks/Posts/usePosts';

import {  } from "react-native";
export default function PostLists({endpoint}) {
  const {data: posts, isLoading, isFetching, error} = usePosts(endpoint);
  if (isLoading) {
    return (
      <ActivityIndicator
        animating={true}
        color="#4d4d4d"
        size="small"
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    );
  }
  
  return posts.data.map((post) =>
  {
    <GetAllPost key={post.id} post={post} />
  });
}
