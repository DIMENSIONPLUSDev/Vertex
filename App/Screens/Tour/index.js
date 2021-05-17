import {Container, Content, H3} from 'native-base';
import React, { Component } from 'react';
import {
  FlatList,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import TourHeader from '../../Components/Headers/TourHeader';
import TourStyles from './styles';
import YoutubePlayer from 'react-native-youtube-iframe';
import TourArticles from '../../Components/Read/Tour/TourArticles';
import {Badge, Subheading, Title} from 'react-native-paper';
import DPIcon from '../../Components/Icons/DPIcons';
import { useNavigation } from '@react-navigation/core';

export default function Tour(){
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={TourStyles.Container}>
          <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
          <View style={TourStyles.VideoView}>
            <YoutubePlayer height={240} play={false} videoId={'46VxiGCWCXo'} />
          </View>
          <View style={TourStyles.RequestView}>
            <Title style={TourStyles.Title}>Requests</Title>
            <View style={TourStyles.RequestItemsView}>
              {/* Add Items and its icons */}
              <TouchableOpacity onPress={() =>{
                navigation.navigate(
                  'Browser',
                  { url: 'https://forms.zohopublic.com/dimensionplus/form/ArchicadDemoRequest/formperma/mqOaVNaM0cypdD8CrUxUcfo_aT8SbMJYlfeZIpw0DJM', name: "Demo Form" }
                )
              }}>
              <View style={TourStyles.RequestItemView}>
                <DPIcon
                  name="demo"
                  color="#4d4d4d"
                  size={45}
                  style={TourStyles.RequestIcons}
                />
                <Subheading>Demo</Subheading>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>{
                navigation.navigate(
                  'Browser',
                  { url: 'https://forms.zohopublic.com/dimensionplus/form/ArchicadDemoRequest/formperma/mqOaVNaM0cypdD8CrUxUcfo_aT8SbMJYlfeZIpw0DJM', name: "Demo Form" }
                )
              }}>
              <View style={TourStyles.RequestItemView}>
                <DPIcon
                  name="training"
                  color="#4d4d4d"
                  size={45}
                  style={TourStyles.RequestIcons}
                />
                <Subheading>Training</Subheading>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>{
                navigation.navigate(
                  'Browser',
                  { url: 'https://forms.zohopublic.com/dimensionplus/form/ArchicadDemoRequest/formperma/mqOaVNaM0cypdD8CrUxUcfo_aT8SbMJYlfeZIpw0DJM', name: "Demo Form" }
                )
              }}>
              <View style={TourStyles.RequestItemView}>
                <DPIcon
                  name="template"
                  color="#4d4d4d"
                  size={45}
                  style={TourStyles.RequestIcons}
                />
                <Subheading>Template</Subheading>
              </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={TourStyles.VariableView}>
            <Title style={TourStyles.Title}>Variables</Title>
            <View style={TourStyles.VariableItemsView}>
              <View style={TourStyles.VariableItemView}>
                <DPIcon
                  name="regular-compass"
                  color="#4d4d4d"
                  size={45}
                  style={TourStyles.VariableIcons}
                />
                <Subheading>Compass</Subheading>
              </View>
              <View style={TourStyles.VariableItemView}>
                <DPIcon
                  name="vastu-compass"
                  color="#4d4d4d"
                  size={45}
                  style={TourStyles.VariableIcons}
                />
                <Subheading>Vastu Compass</Subheading>
              </View>
              <View style={TourStyles.VariableItemView}>
                <DPIcon
                  name="unit-converter"
                  color="#4d4d4d"
                  size={45}
                  style={TourStyles.VariableIcons}
                />
                <Subheading>Unit Converter</Subheading>
              </View>
            </View>
          </View>
          <View style={TourStyles.ArticleView}>
            <Title style={TourStyles.Title}>Articles</Title>
            <View style={TourStyles.ArticleItemsView}>
              <TourArticles />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

