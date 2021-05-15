import { Body, Header, Left, Right } from "native-base";
import React from "react";
import { Text, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function TourHeader ()
{
    return(
        <Header androidStatusBarColor="#F8F8F8" transparent iosBarStyle="dark-content" style={TourHeaderStyles.Main}>
            <Left>
                <AntDesign name="left" color="#4d4d4d" size={30} /> 
            </Left>
            <Body>

            </Body>
            <Right>

            </Right>
        </Header>
    );
}

const TourHeaderStyles = StyleSheet.create({

    Main: {
        backgroundColor: "#F8F8F8",
        height:95
    }
});