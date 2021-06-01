import React, {useEffect, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {
  Card,
  Paragraph,
  Subheading,
  Divider,
  Title,
  ActivityIndicator,
} from 'react-native-paper';
import axios from 'axios';
import HTML from 'react-native-render-html';

export default function GetAllPost(props) {
  const [featuredImage, setFeaturedImage] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoaded, setisLoaded] = useState(false);
  const contentWidth = useWindowDimensions().width;
  
  useEffect(() => {
    const {featured_media, author} = props.post;

    const getImageUrl = axios.get(
      `https://dimensionplus.in/wp-json/wp/v2/media/${featured_media}`,
    );
    const getAuthor = axios.get(
      `https://dimensionplus.in/wp-json/wp/v2/users/${author}`,
    );

    Promise.all([getImageUrl, getAuthor]).then(res => {
      setFeaturedImage(res[0].data.media_details.sizes.full.source_url),
        setAuthor(res[1].data.name),
        setisLoaded(true);
    });
  }, []);
  if (isLoaded) {
    return (
      <Card>
        <Card.Content>
          <Card.Cover source={{uri: featuredImage}} />
          <Title>
            <HTML
              source={{html: props.post.title.rendered}}
              contentWidth={contentWidth}
            />
          </Title>
          <Subheading> - {author}</Subheading>
          <Paragraph>
            <HTML
              source={{html: props.post.excerpt.rendered}}
              contentWidth={contentWidth}
            />
          </Paragraph>
        </Card.Content>
        <Divider />
      </Card>
    );
  }

  return (
    <><Text>hello</Text></>
  );
}
