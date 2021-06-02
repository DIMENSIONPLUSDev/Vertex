import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import TourStyles from './styles';
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
  Paragraph
} from 'react-native-paper';
import DPIcon from '../../../Components/Icons/DPIcons';
import {useNavigation} from '@react-navigation/core';
import {ZohoDeskPortalSDK, ZDPortalKB} from 'react-native-zohodesk-portal-sdk';
import NetInfo from '@react-native-community/netinfo';

export default function Tour() {
  const navigation = useNavigation();
  const fontscale = useWindowDimensions().fontScale;
  const width = useWindowDimensions().width;
  const [isConnect, setIsConnect] = useState(false);
  const [vastuVisible, setVastuVisible] = useState(false);
  const showVastuDialog = () => setVastuVisible(true);
  const hideVastuDialog = () => setVastuVisible(false);

  const [studentVisible, setStudentVisible] = useState(false);
  const showStudentDialog = () => setStudentVisible(true);
  const hideStudentDialog = () => setStudentVisible(false);

  ZohoDeskPortalSDK.initialise(
    '706703202',
    'edbsn5c9b05e64d1be25aa28c73ecf8a5b7db75194640112aace1570a69af5d92fac8',
    'US',
  );

  useEffect(() => {
    NetInfo.addEventListener(state => {
      console.log(state.isConnected);
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
      <Text style={TourStyles.VideoErrorText}>Check your connection...</Text>
    );
  }

  return (
    <SafeAreaView style={TourStyles.Container}>
      <View style={TourStyles.VideoView}>
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
      <View style={TourStyles.RequestView}>
        <Title style={TourStyles.Title}>Ask For</Title>
        <View style={TourStyles.RequestItemsView}>
          {/* Add Items and its icons */}
          <Pressable
            onPress={() => {
              ZDPortalKB.show();
            }}>
            <View style={TourStyles.RequestItemView}>
              <DPIcon
                name="support"
                color="#4d4d4d"
                size={31 * fontscale}
                style={TourStyles.RequestIcons}
              />
              <Subheading
                allowFontScaling
                adjustsFontSizeToFit
                style={TourStyles.Subheading}>
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
            <View style={TourStyles.RequestItemView}>
              <DPIcon
                name="demo"
                color="#4d4d4d"
                size={32 * fontscale}
                style={TourStyles.RequestIcons}
              />
              <Subheading
                allowFontScaling
                adjustsFontSizeToFit
                style={TourStyles.Subheading}>
                Demo
              </Subheading>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('Training');
            }}>
            <View style={TourStyles.RequestItemView}>
              <DPIcon
                name="training"
                color="#4d4d4d"
                size={32 * fontscale}
                style={TourStyles.RequestIcons}
              />
              <Subheading
                allowFontScaling
                adjustsFontSizeToFit
                style={TourStyles.Subheading}>
                Training
              </Subheading>
            </View>
          </Pressable>
          <Pressable
            onPress={ () => {
              navigation.navigate("Browser", {
                url: "https://forms.zohopublic.com/dimensionplus/form/RequestTemplate/formperma/Dxtabqv7D2ZQBxKhCRHY-dDBtZ76gJng6E2Kka57-Ss",
                name:"Template"
              })
            }}>
            <View style={TourStyles.RequestItemView}>
              <DPIcon
                name="template"
                color="#4d4d4d"
                size={32 * fontscale}
                style={TourStyles.RequestIcons}
              />
              <Subheading
                allowFontScaling
                adjustsFontSizeToFit
                style={TourStyles.Subheading}>
                Template
              </Subheading>
            </View>
          </Pressable>
        </View>
      </View>
      <Surface style={TourStyles.VariableView}>
        <Title style={TourStyles.Title}>Ask</Title>
        <View style={TourStyles.VariableItemsView}>
          <Pressable onPress={
            () => {
              navigation.navigate("Compass");
            }
          }>
          <View style={TourStyles.VariableItemView}>
            <DPIcon
              name="regular-compass"
              color="#4d4d4d"
              size={32 * fontscale}
              style={TourStyles.VariableIcons}
            />
            <Subheading
              allowFontScaling
              adjustsFontSizeToFit
              style={TourStyles.Subheading}>
              Compass
            </Subheading>
          </View>
          </Pressable>
          <Pressable onPress={showVastuDialog}>
          <Portal>
        <Dialog visible={vastuVisible} onDismiss={hideVastuDialog}>
          <Dialog.Title>Authentication Required!</Dialog.Title>
          <Dialog.Content>
            <Paragraph>This is simple dialog</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => {
              navigation.navigate("SignIn"),
              hideVastuDialog()
            }}>Sign In</Button>
            <Button onPress={ () => {
              navigation.navigate("SignUp"),
              hideVastuDialog()
            }}>Sign Up</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
          <View style={TourStyles.VariableItemView}>
            <DPIcon
              name="vastu-compass"
              color="#4d4d4d"
              size={32 * fontscale}
              style={TourStyles.VariableIcons}
            />
            <Subheading
              allowFontScaling
              adjustsFontSizeToFit
              style={TourStyles.Subheading}>
              Vastu Compass
            </Subheading>
          </View>
          </Pressable>
          <Pressable onPress={
            () => {
              navigation.navigate("UnitConvertor");
            }
          }>
          <View style={TourStyles.VariableItemView}>
            <DPIcon
              name="unit-converter"
              color="#4d4d4d"
              size={32 * fontscale}
              style={TourStyles.VariableIcons}
            />
            <Subheading
              allowFontScaling
              adjustsFontSizeToFit
              style={TourStyles.Subheading}>
              Converter
            </Subheading>
          </View>
          </Pressable>
          <Pressable onPress={showStudentDialog}>
          <Portal>
        <Dialog visible={studentVisible} onDismiss={hideStudentDialog}>
          <Dialog.Title>Authentication Required!</Dialog.Title>
          <Dialog.Content>
            <Paragraph>This is simple dialog</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => {
              navigation.navigate("SignIn"),
              hideStudentDialog()
            }}>Sign In</Button>
            <Button onPress={ () => {
              navigation.navigate("SignUp"),
              hideStudentDialog()
            }}>Sign Up</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
          <View style={TourStyles.VariableItemView}>
            <DPIcon
              name="student-id"
              color="#4d4d4d"
              size={32 * fontscale}
              style={TourStyles.VariableIcons}
            />
            <Subheading
              allowFontScaling
              adjustsFontSizeToFit
              style={TourStyles.Subheading}>
              Student ID
            </Subheading>
          </View>
          </Pressable>
        </View>
      </Surface>
      <View style={TourStyles.ArticleView}>
        <Title style={TourStyles.Title}>Know-How</Title>
        <View style={TourStyles.ArticleItemsView}>
          {/* Add Items and its icons */}
          <Pressable
            onPress={() => {
              navigation.navigate("CaseStudies");
            }}>
            <View style={TourStyles.ArticleItemView}>
              <DPIcon
                name="case-study"
                color="#4d4d4d"
                size={31 * fontscale}
                style={TourStyles.ArticleIcons}
              />
              <Subheading
                allowFontScaling
                adjustsFontSizeToFit
                style={TourStyles.Subheading}>
                Case Study
              </Subheading>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('TAT');
            }}>
            <View style={TourStyles.ArticleItemView}>
              <DPIcon
                name="tips-tricks"
                color="#4d4d4d"
                size={32 * fontscale}
                style={TourStyles.ArticleIcons}
              />
              <Subheading
                allowFontScaling
                adjustsFontSizeToFit
                style={TourStyles.Subheading}>
                Tips and Tricks
              </Subheading>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('NewsLetters');
            }}>
            <View style={TourStyles.ArticleItemView}>
              <DPIcon
                name="newsletter"
                color="#4d4d4d"
                size={32 * fontscale}
                style={TourStyles.ArticleIcons}
              />
              <Subheading
                allowFontScaling
                adjustsFontSizeToFit
                style={TourStyles.Subheading}>
                Newsletter
              </Subheading>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('Articles');
            }}>
            <View style={TourStyles.ArticleItemView}>
              <DPIcon
                name="article"
                color="#4d4d4d"
                size={32 * fontscale}
                style={TourStyles.ArticleIcons}
              />
              <Subheading
                allowFontScaling
                adjustsFontSizeToFit
                style={TourStyles.Subheading}>
                Articles
              </Subheading>
            </View>
          </Pressable>
        </View>
      </View>
      <Surface style={TourStyles.ButtomAppBar}>
        <Text>Ad Space</Text>
      </Surface>
    </SafeAreaView>
  );
}
