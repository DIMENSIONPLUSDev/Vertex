import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import { Card, Paragraph, Divider, Portal, Dialog, Button } from "react-native-paper";
import moment from "moment";
import { useNavigation } from '@react-navigation/core';

export default function GetTrainings(props) {
    const navigation = useNavigation()
    const [date, setDate] = useState(null);
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    useEffect(() =>{
        const { scheduledTime } = props.trainings;
        var formatedDate = moment(Number(scheduledTime)).format("MMMM Do YYYY, h:mm:ss a");
        setDate(formatedDate);
    },[]);

  return (
    <Card onPress={showDialog}>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog} dismissable>
          <Dialog.Title>Authentication Required!</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut dui sed nisl maximus ornare. 
              Nulla sed elit at massa rutrum mattis. Quisque vitae sem nec libero ultricies commodo eget.</Paragraph>
          </Dialog.Content>
          <Dialog.Actions style={{ justifyContent:"flex-start" }}>
            <Button onPress={ () => {
              navigation.navigate("SignIn", hideDialog())
            }}>Sign In</Button>
            <Button onPress={ () => {
              navigation.navigate("SignUp", hideDialog())
            }}>Sign Up</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Card.Title title={props.trainings.name} subtitle={date} titleNumberOfLines={2}/>
      <Card.Content>
        <Paragraph numberOfLines={ 6 }>{props.trainings.description}</Paragraph>
      </Card.Content>
      <Divider />
    </Card>
  );
}
