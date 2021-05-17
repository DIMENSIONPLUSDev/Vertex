import React, { useState } from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import HTML  from "react-native-render-html";
import axios from "axios";
import { useEffect } from 'react';
import TourArticle from './TourArticle';
import {ActivityIndicator} from 'react-native-paper';

export default function TourArticles ()
{
  const [articles, setArticles] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    axios.get("https://dimensionplus.in/wp-json/wp/v2/posts?per_page=5")
    .then(res => 
      {setArticles(res.data), setisLoaded(true)}
      )
    .catch( err => console.log(err));
  },[]);

      if (isLoaded) {
      return (
        articles.map( article => (
            <TourArticle key={ article.id } article={ article } />
          ))
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
// export default class TourArticles extends Component{

//   state = {
//     articles: [],
//     isLoaded: false
//   }

//   componentDidMount() {
//     axios.get("https://dimensionplus.in/wp-json/wp/v2/posts?per_page=5")
//     .then(res => this.setState({
//       articles: res.data,
//       isLoaded: true
//     }))
//     .catch( err => console.log(err));
//   }

//   render() {
//     const { articles , isLoaded } = this.state;
//     const { width } = Dimensions.get('window');
//     if (isLoaded) {
//       return (
//         <View>
//           { articles.map( article => (
//             <Title><HTML source={{ html: article.title.rendered }} contentWidth={width - 40 } /></Title>
//           )) }
//         </View>
//       );
//     }

//     return <Title>Loading...</Title>
//   }
// }