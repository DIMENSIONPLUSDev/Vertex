import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  Image,
  SafeAreaView,
  View,
  Linking,
  Alert,
  Platform,
  PermissionsAndroid,
  ToastAndroid,
} from 'react-native';
import CompassHeading from 'react-native-compass-heading';
import {Subheading, Title, Text, Card, Paragraph} from 'react-native-paper';
import VastuCompassStyles from './styles';

export default function VastuCompass() {
  const [compassHeading, setCompassHeading] = useState(0);

  useEffect(() => {
    const degree_update_rate = 0.03;

    // accuracy on android will be hardcoded to 1
    // since the value is not available.
    // For iOS, it is in degrees
    CompassHeading.start(degree_update_rate, ({heading, accuracy}) => {
      setCompassHeading(heading);
    });

    return () => {
      CompassHeading.stop();
    };
  }, []);

  function directions(degree) {
    if (degree >= 22.5 && degree < 67.5) {
      return 'NE';
    } else if (degree >= 67.5 && degree < 112.5) {
      return 'E';
    } else if (degree >= 112.5 && degree < 157.5) {
      return 'SE';
    } else if (degree >= 157.5 && degree < 202.5) {
      return 'S';
    } else if (degree >= 202.5 && degree < 247.5) {
      return 'SW';
    } else if (degree >= 247.5 && degree < 292.5) {
      return 'W';
    } else if (degree >= 292.5 && degree < 337.5) {
      return 'NW';
    } else {
      return 'N';
    }
  }

  function details(degree) {
    if (degree >= 22.5 && degree < 67.5) {
      return 'NE';
    } else if (degree >= 67.5 && degree < 112.5) {
      return 'E';
    } else if (degree >= 112.5 && degree < 157.5) {
      return 'SE';
    } else if (degree >= 157.5 && degree < 202.5) {
      return 'S';
    } else if (degree >= 202.5 && degree < 247.5) {
      return 'SW';
    } else if (degree >= 247.5 && degree < 292.5) {
      return 'W';
    } else if (degree >= 292.5 && degree < 337.5) {
      return 'NW';
    } else {
      return 'N';
    }
  }

  return (
    <SafeAreaView style={VastuCompassStyles.Container}>
      <View style={VastuCompassStyles.CompassView}>
        <Image
          style={[
            VastuCompassStyles.RotatingImage,
            {transform: [{rotate: `${360 - compassHeading}deg`}]},
          ]}
          resizeMode="contain"
          source={require('../../../Assets/Images/VastuCompass/VastuCompass.png')}
        />
      </View>
      <Card>
          <Card.Content>
            <Title>{compassHeading}° {directions(compassHeading)}</Title>
            <Paragraph>{ details(compassHeading) }</Paragraph>
          </Card.Content>
        </Card>
    </SafeAreaView>
  );
}
