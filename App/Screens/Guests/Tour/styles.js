import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const TourStyles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent:"space-evenly",
    paddingBottom: "15%",
    ...StyleSheet.absoluteFillObject
  },
  Title: {
    paddingBottom: 10
  },
  VideoView: {
    paddingHorizontal: 15,
    marginTop: 10,
    paddingBottom: 5,
    alignItems:"center",
  },
  RequestView: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    flex: 2,
    justifyContent:"center",
  },
  RequestItemsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  RequestItemView: {
    alignItems: "center"
  },
  RequestIcons: {
    paddingBottom: 5
  },
  VariableView: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 2,
    justifyContent:"center"
  },
  VariableItemsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  VariableItemView: {
    alignItems: "center"
  },
  VariableIcons: {
    paddingBottom: 5
  },
  ArticleView: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flex: 2,
    justifyContent:"center"
  },
  ArticleItemsView : {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ArticleItemView: {
    alignItems: "center"
  },
  ArticleIcons: {
    paddingBottom: 5
  },
  ButtomAppBar:{
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent:"center",
    alignItems:"center",
    height:hp("8%")
  },
  Subheading: {
    fontSize: hp('1.9%')
  },
  VideoErrorText:{
    fontSize: hp('1.9%'),
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default TourStyles;
