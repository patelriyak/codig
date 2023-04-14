import React from "react";
import {SafeAreaView,View, Text, StyleSheet,TextInput, Button,TouchableOpacity} from 'react-native';

const Registerpage = ({ navigation }) => {
    const [text, onChangeText] = React.useState('First Name');
    const [number, onChangeNumber] = React.useState('');
    return (
    <View>
        <Text style={styles.subtitle}>Register</Text>
        <SafeAreaView>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={Text}
                onChangeText={onChangeText}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={Text}
            />
            <TextInput
                style={styles.input}
                value={Text}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                value={Text}
                placeholder="Password"
            />
            </SafeAreaView>
            <Button 
            style={styles.buttonstyle}
            onPress={() => navigation.navigate('Squarescreen')}
            title="Register"/>
            <View style={styles.inline}>
                <Text style={styles.title}>Already User</Text>
                <Button 
                style={styles.buttonstyle}
                onPress={() => navigation.navigate('Login')}
                title="Login"/>
            </View>
    </View>
    );
};
const styles = StyleSheet.create({
    textStyle:{
        fontSize:45,
        textAlign:"center",
    },
    title:{
        textAlign:"center",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    subtitle:{
        paddingTop:20,
        fontSize:30,
        textAlign:"center",
    },
    buttonstyle:{
        borderWidth:3,
        borderColor:'red',
        fontSize:20,
        textAlign:"center",
        backgroundColor:'#fff',
        flex:1,
        marginTop: -66
    }
});

export default Registerpage;