import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView} from 'react-native';
import {
  ActivityIndicator,
} from 'react-native-paper';
import TrainingStyles from './styles';
import GetTrainings from '../../../Components/Training/GetTrainings';
import useTraining from "../../../Components/Hooks/Training/useTraining";

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
