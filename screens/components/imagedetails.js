import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";

const ImageDetail = (props) => {
    console.log(props);
    return <View>
        <Image
        style={{
            resizeMode: 'cover',
            height: 610,
            width: 380,
          }}
        source={props.imageSource}/>
        </View>
};
const styles = StyleSheet.create({});
export default ImageDetail;