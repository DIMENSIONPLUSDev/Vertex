import {StyleSheet} from 'react-native';

const TourStyles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  VideoView: {
    paddingHorizontal: 15,
    marginTop: 10,
  },
  RequestView: {
    flex: 3,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  RequestItemView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  VariableView: {
    flex: 3,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  VariableItemView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  ArticleView: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});

export default TourStyles;
