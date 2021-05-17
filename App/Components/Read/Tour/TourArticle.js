import React from "react";
import { Title, Text, Card, Paragraph, Subheading, Divider } from "react-native-paper";
import { View, Image, useWindowDimensions  } from "react-native";
import HTML, {ignoredStyles}  from "react-native-render-html";
import axios from "axios";
import { useEffect, useState } from "react";
import {ActivityIndicator} from 'react-native-paper';
import { H1 } from "native-base";

export default function TourArticle(props)
{
    const [featuredImage, setFeaturedImage] = useState("");
    const [author, setAuthor] = useState("");
    const [isLoaded, setisLoaded] = useState(false);


    useEffect(() =>{
        const { featured_media , author } =  props.article;

        const getImageUrl = axios.get(`https://dimensionplus.in/wp-json/wp/v2/media/${featured_media}`);
        const getAuthor = axios.get(`https://dimensionplus.in/wp-json/wp/v2/users/${author}`);

        Promise.all([ getImageUrl, getAuthor]).then( res => {
            setFeaturedImage(res[0].data.media_details.sizes.full.source_url),
            setAuthor(res[1].data.name),
            setisLoaded(true) 
        });

    },[]);

    const contentWidth = useWindowDimensions().width;
    if (isLoaded) {
        return(
            <Card>
            <Card.Content>
            <Card.Cover source={{ uri: featuredImage }} />
              <Title><HTML source={{ html: props.article.title.rendered }} contentWidth={contentWidth} /></Title>
              <Subheading> - {author}</Subheading>
              <Paragraph><HTML source={{ html: props.article.excerpt.rendered }} contentWidth={contentWidth} /></Paragraph>
            </Card.Content>
            <Divider />
          </Card>
        
        );
    }

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