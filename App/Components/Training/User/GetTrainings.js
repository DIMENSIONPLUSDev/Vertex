import React, {useEffect, useState} from 'react';
import {Card, Paragraph, Divider, Button} from 'react-native-paper';
import moment from 'moment';
import {useNavigation} from '@react-navigation/core';

export default function GetTrainings(props) {
  const navigation = useNavigation();
  const [date, setDate] = useState(null);
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useEffect(() => {
    const {scheduledTime} = props.trainings;
    var formatedDate = moment(Number(scheduledTime)).format(
      'MMMM Do YYYY, h:mm:ss a',
    );
    setDate(formatedDate);
  }, []);

  return (
    <Card>
      <Card.Title
        title={props.trainings.name}
        subtitle={date}
        titleNumberOfLines={2}
      />
      <Card.Content>
        <Paragraph numberOfLines={6} allowFontScaling>
          {props.trainings.description}
        </Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() => {
            navigation.navigate('Browser', {url: props.trainings.joinURL});
          }}>
          Join Now
        </Button>
      </Card.Actions>
      <Divider />
    </Card>
  );
}
