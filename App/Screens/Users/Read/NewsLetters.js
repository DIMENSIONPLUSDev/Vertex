// import React, { useState, useEffect } from 'react';
// import {
//   ScrollView,
//   SafeAreaView,
//   Dimensions,
//   StyleSheet,
//   Pressable,
// } from 'react-native';
// import {useQuery, useInfiniteQuery} from 'react-query';
// import {
//   Card,
//   Subheading,
//   Divider,
//   Title,
//   Text
// } from 'react-native-paper';
// import axios from 'axios';
// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
// import { useNavigation } from '@react-navigation/core';
// //import useIntersectionObserver from "../../../Components/Hooks/useIntersectionObserver";

// const {width, height} = Dimensions.get('window');

// export default function NewsLetters() {

// const getPosts = async ({ key, pageParams = 1}) => {
//   return await axios.get(`https://www.dimensionplus.in/wp-json/wp/v2/posts?categories=120&page=${pageParams}`);
// };
//   const navigation = useNavigation();
//   const {
//     status,
//     data,
//     isLoading,
//     error,
//     isFetching,
//     isFetchingNextPage,
//     isFetchingPreviousPage,
//     fetchNextPage,
//     fetchPreviousPage,
//     hasNextPage,
//     hasPreviousPage
//     } = useInfiniteQuery(
//     'caseStudies', getPosts,
//     {
//       getPreviousPageParam: firstPage => firstPage.previous ?? false,
//       getNextPageParam: lastPage => lastPage.next ?? false,
//     }
//   );

//   if (isLoading) {
//     return (
//       <SkeletonPlaceholder>
//         <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
//           <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} />
//           <SkeletonPlaceholder.Item marginLeft={20}>
//             <SkeletonPlaceholder.Item
//               width={120}
//               height={20}
//               borderRadius={4}
//             />
//             <SkeletonPlaceholder.Item
//               marginTop={6}
//               width={80}
//               height={20}
//               borderRadius={4}
//             />
//           </SkeletonPlaceholder.Item>
//         </SkeletonPlaceholder.Item>
//       </SkeletonPlaceholder>
//     );
//   }

//   // console.log(data.pages);
//   // //fetchNextPage();
//   //console.log(hasPreviousPage)
//   // console.log(data);
//   // console.log(data.pages.flatMap(post => console.log("this are all my posts:",post)));

//   return (
//     <SafeAreaView style={NewsLettersStyles.Container}>
//       <ScrollView onMomentumScrollEnd={ () => 
//       {
//         if(hasNextPage){
//           fetchNextPage();
//         }
//       }
//         }>
//       { Array.isArray(data.pages) && !data.pages.length ? (
//           <Text>We Will Add Soon!</Text>
//         ) : (
//           data.pages.flatMap( data => (
//             data.data.map(post => <Pressable key={post.id} onPress={
//               () => {
//                 navigation.navigate("SinglePosts", { post_id: post.id })
//               }
//             }>
//               <Card style={NewsLettersStyles.MainCard}>
//                 <Card.Content>
//                   <Card.Cover source={{uri: post.x_featured_media_original}} />
//                   <Title>{post.title.rendered}</Title>
//                   <Subheading>
//                     - {post.x_author}, {post.x_date}
//                   </Subheading>
//                 </Card.Content>
//               </Card>
//               <Divider />
//             </Pressable>
//           ))
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//     );
// }

// const NewsLettersStyles = StyleSheet.create({
//   Container: {
//     flex: 1,
//     paddingHorizontal: 15,
//     paddingVertical: 15,
//     width: width
//   },
//   CardContent: {
//     width: width,
//   },
// });

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

export default function CaseStudies() {
  const [page, setPage] = useState(1);
  const navigation = useNavigation();

  const getPosts = (page = 1) => {
    return axios.get(
      `https://www.dimensionplus.in/wp-json/wp/v2/posts?categories=120&page=${page}`,
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
    <SafeAreaView style={NewsLettersStyles.Container}>
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
              <Card style={NewsLettersStyles.MainCard}>
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
      <View style={NewsLettersStyles.Navigation}>
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

const NewsLettersStyles = StyleSheet.create({
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
