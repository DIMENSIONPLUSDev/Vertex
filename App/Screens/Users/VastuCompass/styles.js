import { StyleSheet, Dimensions } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('window');

const VastuCompassStyles = StyleSheet.create({
    Container:{
        flex:1,
        flexDirection: "column", 
    },
    CompassView:{
        flex:3,
        //backgroundColor:"black",
        alignItems:"center",
        paddingTop: 15
    },
    Background:{
        alignSelf:"center",
    },
    CompassPointer:{
        height: hp("15%"),
        //position:"absolute",
        width:wp("100%")
    },
    RotatingImage:{
        width: width,
        height: hp("47%"),
    },
    DetailsView:{
        flex:2,
        //backgroundColor:"purple",
        padding:30,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default VastuCompassStyles;