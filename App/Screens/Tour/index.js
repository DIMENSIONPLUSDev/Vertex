import {Container, Content, H3} from 'native-base';
import React from 'react';
import {FlatList, View, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import TourHeader from '../../Components/Headers/TourHeader';
import TourStyles from './styles';
import YoutubePlayer from 'react-native-youtube-iframe';
import TourArticles from '../../Components/Read/TourArticles';
import { Subheading, Title } from "react-native-paper";

export default function Tour() {
  
  return ( 
    <ScrollView>
    <SafeAreaView style={{flex: 1}}> 
    <View style={TourStyles.Container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <View style={TourStyles.VideoView}>
        <YoutubePlayer height={230} play={false} videoId={'46VxiGCWCXo'} />
      </View>
      <View style={TourStyles.RequestView}>
        <Title>Requests</Title>
        <View style={TourStyles.RequestItemView}>
          {/* Add Items and its icons */}
          
        </View>
      </View>
      <View style={TourStyles.VariableView}>
        <Title>Variables</Title>
        <View style={TourStyles.VariableItemView}>
        </View>
      </View>
      <View style={TourStyles.ArticleView}>
      <Title>Articles</Title>
        <TourArticles />
      </View>

      <View style={TourStyles.LoginView}>

      </View>
    </View>
    </SafeAreaView>
    </ScrollView>
  );
}
