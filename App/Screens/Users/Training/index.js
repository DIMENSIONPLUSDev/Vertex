import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  Image
} from 'react-native';
import axios from 'axios';
import {
  Card,
  Title,
  Paragraph,
  ActivityIndicator,
  Banner,
  Divider,
} from 'react-native-paper';
import TrainingStyles from './styles';
import GetTrainings from '../../../Components/Training/User/GetTrainings';
import moment from 'moment';
import useTraining from "../../../Components/Hooks/Training/useTraining";
import { useQuery } from 'react-query';

export default function Training() {
  const [refreshing, setRefreshing] = useState(false);
  const [listData, setListData] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);

  const { data, isFetching, isLoading, error } = useTraining();

  if(isLoading){
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
  
    return (
      <SafeAreaView style={TrainingStyles.Container}>
        <ScrollView>
          <View style={TrainingStyles.TrainingView}>
            {data.data.upcomingSession.map(data => (
              <GetTrainings key={data.id} trainings={data} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}
