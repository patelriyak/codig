import React from "react";
import {View, StyleSheet, Text} from "react-native";
import ImageDetail from "./components/imagedetails";

const ImageScreen = () => {
    return <View>
        <ImageDetail title="Forest" imageSource={require('../assets/images/forest.jpg')} imagescore="8"/>
        <ImageDetail title="Mountain" imageSource={require('../assets/images/mountain.jpg')} imagescore="9"/>
        <ImageDetail title="Beach" imageSource={require('../assets/images/beach.jpg')} imagescore="10"/>
        </View>
};

const styles = StyleSheet.create({});

export default ImageScreen;