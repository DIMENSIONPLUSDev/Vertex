import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, useWindowDimensions, Pressable} from 'react-native';
import HomeStyles from './styles';
import YoutubePlayer from 'react-native-youtube-iframe';
import {
  Subheading,
  Title,
  Surface,
  Text,
  ActivityIndicator,
  Portal,
  Dialog,
  Button,
  Paragraph,
  BottomNavigation
} from 'react-native-paper';
import DPIcon from '../../../Components/Icons/DPIcons';
import {useNavigation} from '@react-navigation/core';
import {
  ZohoDeskPortalSDK,
  ZDPortalHome,
  ZDPortalCommunity
} from 'react-native-zohodesk-portal-sdk';
import NetInfo from '@react-native-community/netinfo';

export default function Home() {
  const navigation = useNavigation();
  const fontscale = useWindowDimensions().fontScale;
  const width = useWindowDimensions().width;
  const [isConnect, setIsConnect] = useState(false);
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  ZohoDeskPortalSDK.initialise(
    '706703202',
    'edbsn5c9b05e64d1be25aa28c73ecf8a5b7db75194640112aace1570a69af5d92fac8',
    'US',
  );


  useEffect(() => {
    NetInfo.addEventListener(state => {
      //console.log(state.isConnected);
      setIsConnect(state.isConnected);
    });
  }, [isConnect]);

  function renderLoading() {
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

  function onHttpError() {
    return (
      <Text style={HomeStyles.VideoErrorText}>Check your connection...</Text>
    );
  }

  return (
    <SafeAreaView style={HomeStyles.Container}>
      <View style={HomeStyles.VideoView}>
        <YoutubePlayer
          height={190}
          width={width - 80}
          play={false}
          videoId={'46VxiGCWCXo'}
          webViewProps={{
            renderLoading: renderLoading,
            startInLoadingState: true,
            onHttpError: onHttpError,
            cacheEnabled: true,
            cacheMode: 'LOAD_CACHE_ELSE_NETWORK',
          }}
        />
      </View>
      <View style={HomeStyles.RequestView}>
        <Title style={HomeStyles.Title}>Ask For</Title>
        <View style={HomeStyles.RequestItemsView}>
          {/* Add Items and its icons */}
          <Pressable
            onPress={() => {
              ZDPortalHome.show();
            }}>
            <View style={HomeStyles.RequestItemView}>
              <DPIcon
                name="support"
                color="#4d4d4d"
                size={31 * fontscale}
                style={HomeStyles.RequestIcons}
              />
              <Subheading
                allowFontScaling
                adjustsFontSizeToFit
                style={HomeStyles.Subheading}>
                Support
              </Subheading>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('Browser', {
                url: 'https://forms.zohopublic.com/dimensionplus/form/ArchicadDemoRequest/formperma/mqOaVNaM0cypdD8CrUxUcfo_aT8SbMJYlfeZIpw0DJM',
                name: 'Demo Form',
              });
            }}>
            <View style={HomeStyles.RequestItemView}>
              <DPIcon
                name="demo"
                color="#4d4d4d"
                size={32 * fontscale}
                style={HomeStyles.RequestIcons}
              />
              <Subheading
                allowFontScaling
                adjustsFontSizeToFit
                style={HomeStyles.Subheading}>
                Demo
              </Subheading>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('Training');
            }}>
            <View style={HomeStyles.RequestItemView}>
              <DPIcon
                name="training"
                color="#4d4d4d"
                size={32 * fontscale}
                style={HomeStyles.RequestIcons}
              />
              <Subheading
                allowFontScaling
                adjustsFontSizeToFit
                style={HomeStyles.Subheading}>
                Training
              </Subheading>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              
              navigation.navigate('Browser', {
                url: 'https://forms.zohopublic.com/dimensionplus/form/RequestTemplate/formperma/Dxtabqv7D2ZQBxKhCRHY-dDBtZ76gJng6E2Kka57-Ss',
                name: 'Template',
              });
              setVisible(false)
            }}>
            <View style={HomeStyles.RequestItemView}>
              <DPIcon
                name="template"
                color="#4d4d4d"
                size={32 * fontscale}
                style={HomeStyles.RequestIcons}
              />
              <Subheading
                allowFontScaling
                adjustsFontSizeToFit
                style={HomeStyles.Subheading}>
                Template
              </Subheading>
            </View>
          </Pressable>
        </View>
      </View>
      <Surface style={HomeStyles.VariableView}>
        <Title style={HomeStyles.Title}>Ask</Title>
        <View style={HomeStyles.VariableItemsView}>
          <Pressable
            onPress={() => {
              navigation.navigate('Compass');
            }}>
            <View style={HomeStyles.VariableItemView}>
              <DPIcon
                name="regular-compass"
                color="#4d4d4d"
                size={32 * fontscale}
                style={HomeStyles.VariableIcons}
              />
              <Subheading
                allowFontScaling
                adjustsFontSizeToFit
                style={HomeStyles.Subheading}>
                Compass
              </Subheading>
            </View>
          </Pressable>
          <Pressable onPress={() => {
            navigation.navigate('VastuCompass')
          }}>
          <View style={HomeStyles.VariableItemView}>
            <DPIcon
              name="vastu-compass"
              color="#4d4d4d"
              size={32 * fontscale}
              style={HomeStyles.VariableIcons}
            />
            <Subheading
              allowFontScaling
              adjustsFontSizeToFit
              style={HomeStyles.Subheading}>
              Vastu Compass
            </Subheading>
          </View>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('UnitConvertor');
            }}>
            <View style={HomeStyles.VariableItemView}>
              <DPIcon
                name="unit-converter"
                color="#4d4d4d"
                size={32 * fontscale}
                style={HomeStyles.VariableIcons}
              />
              <Subheading
                allowFontScaling
                adjustsFontSizeToFit
                style={HomeStyles.Subheading}>
                Converter
              </Subheading>
            </View>
          </Pressable>
          <Pressable onPress={showDialog}>
            <Portal>
              <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Instructions!</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>This is simple dialog</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={
                    () => {
                      navigation.navigate("Browser", {
                        url: 'https://forms.zohopublic.com/dimensionplus/form/SubmitYourStudentID/formperma/s6Cz7ybwAVVVmt_V0njMr-VEveYCsvEf7TYThNFGi3w',
                        name:'Student ID'
                      },
                      setVisible(false));
                  }}>Okay</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
            <View style={HomeStyles.VariableItemView}>
              <DPIcon
                name="student-id"
                color="#4d4d4d"
                size={32 * fontscale}
                style={HomeStyles.VariableIcons}
              />
              <Subheading
                allowFontScaling
                adjustsFontSizeToFit
                style={HomeStyles.Subheading}>
                Student ID
              </Subheading>
            </View>
          </Pressable>
        </View>
      </Surface>
      <View style={HomeStyles.ArticleView}>
        <Title style={HomeStyles.Title}>Know-How</Title>
        <View style={HomeStyles.ArticleItemsView}>
          {/* Add Items and its icons */}
          <Pressable
            onPress={() => {
              navigation.navigate('CaseStudies');
            }}>
            <View style={HomeStyles.ArticleItemView}>
              <DPIcon
                name="case-study"
                color="#4d4d4d"
                size={31 * fontscale}
                style={HomeStyles.ArticleIcons}
              />
              <Subheading
                allowFontScaling
                adjustsFontSizeToFit
                style={HomeStyles.Subheading}>
                Case Study
              </Subheading>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('TAT');
            }}>
            <View style={HomeStyles.ArticleItemView}>
              <DPIcon
                name="tips-tricks"
                color="#4d4d4d"
                size={32 * fontscale}
                style={HomeStyles.ArticleIcons}
              />
              <Subheading
                allowFontScaling
                adjustsFontSizeToFit
                style={HomeStyles.Subheading}>
                Tips and Tricks
              </Subheading>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('NewsLetters');
            }}>
            <View style={HomeStyles.ArticleItemView}>
              <DPIcon
                name="newsletter"
                color="#4d4d4d"
                size={32 * fontscale}
                style={HomeStyles.ArticleIcons}
              />
              <Subheading
                allowFontScaling
                adjustsFontSizeToFit
                style={HomeStyles.Subheading}>
                Newsletter
              </Subheading>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('Articles');
            }}>
            <View style={HomeStyles.ArticleItemView}>
              <DPIcon
                name="article"
                color="#4d4d4d"
                size={32 * fontscale}
                style={HomeStyles.ArticleIcons}
              />
              <Subheading
                allowFontScaling
                adjustsFontSizeToFit
                style={HomeStyles.Subheading}>
                Articles
              </Subheading>
            </View>
          </Pressable>
        </View>
      </View>
      {/* <Surface style={HomeStyles.BottomView}>
        <Pressable style={{ justifyContent:"center" }} onPress={ () =>{
          navigation.navigate("MyModal")
        }}>
        <DPIcon name="menu" color="#4d4d4d" size={30 * fontscale} />
        </Pressable>
        <View style={{ justifyContent:"center" }}>
        <DPIcon name="profile" color="#4d4d4d" size={32 * fontscale} />
        </View>
      </Surface> */}
    </SafeAreaView>
  );
}
