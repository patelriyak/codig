import React from "react";
import { View,StyleSheet, Text, Button } from "react-native";

const ColorCounter = ({ color, onincrease, ondecrease }) =>{
    return (
    <View>
        <Text>{color}</Text>
        <Button onPress={() => onincrease()} title={`Increase ${color}`}/>
        <Button onPress={() => ondecrease()} title={`Decrease ${color}`}/>
    </View>
    );
};

const styles = StyleSheet.create({});

export default ColorCounter;