import React, {useRef, useEffect} from "react";
import {Animated,View, Text, StyleSheet,Button} from 'react-native';
import ImageDetail from "./components/imagedetails";

const FadeInView = props => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  
    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);
  
    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim, // Bind opacity to animated value
        }}>
        {props.children}
      </Animated.View>
    );
  };

const welcomescreen = ({navigation}) => {
    return (
        <FadeInView>
        <View style={styles.mainView}>
            <ImageDetail style={styles.welcomeImage} title="Forest" imageSource={require('../assets/welcome.jpg')}/>
            
            <View style={styles.overlay}>
            <Button 
                style={styles.buttonstyle}
                color='#f22a90'
                borderWidth='3'
                borderColor='red'
                height='50'
                width='50'
                onPress={() => navigation.navigate('Registerpage')}
                title="Continue"/>
            </View>
            
        </View>     
        </FadeInView>  
    );
};
const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        zIndex: 0,
    },
    overlay:{
        zIndex: 1,
        marginTop:-110,
        margin:20,
    },
    mb2:{
        marginTop:50,
    },
    buttonstyle:{
        borderWidth:3,
        borderColor:'red',
        fontSize:40,
        margin:20,
        width:50,
        height:60,
        textAlign:"center",
        color: '#f22a90',
        backgroundColor:'#ffffff',
        color:'#8b3dffi',
    },
    textStyle:{
        fontSize:30,
    }
});

export default welcomescreen;