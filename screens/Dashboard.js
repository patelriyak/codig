import React, { useState } from "react";
import {View, StyleSheet, Text, FlatList} from "react-native";
import Lessons from '../screens/components/Lessons';

const Dashboard = () =>{
    const lsn = [
        { number:'Lesson 1', description:'Hello How are you? 1', key:'1' },
        { number:'Lesson 2', description:'Hello How are you? 2', key:'2' },
        { number:'Lesson 3', description:'Hello How are you? 3', key:'3' },
        { number:'Lesson 4', description:'Hello How are you? 4', key:'4' }
    ];
    return(
        <View>
            <Text style={styles.subtitle}>Dashboard</Text>
             <View style={styles.content}>
                <Lessons imageSource={require('../assets/images/forest.jpg')} Lessonsnumber="Lesson 1" Lesdescription="hello"/>
                <Lessons imageSource={require('../assets/images/mountain.jpg')} Lessonsnumber="Lesson 2" Lesdescription="How are you?"/>
                <Lessons imageSource={require('../assets/images/beach.jpg')} Lessonsnumber="Lesson 3" Lesdescription="Great day"/>
            </View>  
            <FlatList 
                keyExtractor={Lesson => Lesson.number}
                data={lsn}
                renderItem={({item}) => {
                    return (
                    <Text>{item.number}</Text>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    subtitle:{
        paddingTop:20,
        textAlign:"center",
    },
    content:{
        paddingLeft:20,
    }
});

export default Dashboard;