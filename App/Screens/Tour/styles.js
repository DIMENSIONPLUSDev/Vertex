import {StyleSheet} from 'react-native';

const TourStyles = StyleSheet.create({
  Container: {
    flex: 1,
    //justifyContent: 'flex-end',
  },
  Title: {
    paddingBottom: 10
  },
  VideoView: {
    paddingHorizontal: 15,
    marginTop: 10,
    paddingBottom: 10,
    flex: 2
  },
  RequestView: {
    flex: 3,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  RequestItemsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  RequestItemView: {
    alignItems: "center"
  },
  RequestIcons: {
    paddingBottom: 5
  },
  VariableView: {
    flex: 3,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  VariableItemsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  VariableItemView: {
    alignItems: "center"
  },
  VariableIcons: {
    paddingBottom: 5
  },
  ArticleView: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  ArticleItemsView : {

  }
});

export default TourStyles;
