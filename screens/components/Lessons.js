import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";

const Lessons = (props) => {
    console.log(props);
    return (
    <View>
        <Text source={props.Lessonsnumber}
         style={styles.titlebold} >{props.Lessonsnumber}</Text>
         <Text source={props.Lesdescription}
         style={styles.title} >{props.Lesdescription}</Text>
        <Image
        style={{
            resizeMode: 'cover',
            height: 110,
            width: 180,
          }}
        source={props.imageSource}/>
        </View>
    );
};
const styles = StyleSheet.create({
    titlebold:{
        fontWeight:700,
        textsize:20,
    }
});
export default Lessons;