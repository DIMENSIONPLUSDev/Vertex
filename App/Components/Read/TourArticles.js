import React from 'react';
import { FlatList, View, Text, SafeAreaView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Subheading } from 'react-native-paper';
import {
  useQuery,
  useQueryClient,
  QueryClientProvider,
  QueryClient,
} from 'react-query';
import Loader from "../Loaders/Loader";
export default function TourArticles()
{
  const {isLoading, error, data, isFetching} = useQuery('tourArticleData', () =>
    fetch("https://dimensionplus.in/wp-json/wp/v2/posts?per_page=5").then(res =>
      res.json(),
    ),
  );

  if (isLoading){
    return (
        <Loader />
    );
  }

  if (error) return 'An error has occurred: ' + error.message;

  const Items = () => {
    for (let index = 0; index < data.length - 1; index++) {
      return(
        <Card elevation={0}>
        <Card.Content>
          <Subheading>{data[index].title.rendered}</Subheading>
          <Paragraph>{data[index].excerpt.rendered}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card>
        );        
    }
  }

  return (
    <Items />
  );
}
