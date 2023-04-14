import Reactx from "react";
import {View, Text, StyleSheet,SafeAreaView,Button,TextInput} from 'react-native';

const LoginScreen = ({navigation}) => {
    return (
        <View>
        <Text style={styles.subtitle}>Login</Text>
        <SafeAreaView>
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
            onPress={() => navigation.navigate('Dashboard')}
            title="Login"/>
            <View style={styles.inline}>
                <Text style={styles.textcenter}>New User |</Text>
                <Button 
                style={styles.buttonstyle}
                onPress={() => navigation.navigate('Registerpage')}
                title="Register"/>
            </View>
       </View>
    );
};
const styles = StyleSheet.create({
    textStyle:{
        fontSize:30,
    },
    subtitle:{
        paddingTop:20,
        fontSize:30,
        textAlign:"center",
    },
    textcenter:{
        textAlign:"center",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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

export default LoginScreen;