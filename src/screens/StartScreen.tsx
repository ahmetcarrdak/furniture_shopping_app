import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import Colors from '../components/Colors'; // Renk bileşenini doğru şekilde içe aktar
import Feather from '@expo/vector-icons/Feather';

//@ts-ignore
function StartScreen({navigation}) {

    return (
        <View style={styles.container}>
            <Image source={require("../assets/animation_logo.gif")}/>
            <TouchableOpacity
                style={styles.container_item}
                onPress={() => navigation.navigate('Home')}  // Home sayfasına git
            >
                <Text style={{color: Colors.text, fontSize: 20}}>Start</Text>
                <Feather name="arrow-right" size={24} style={{color: Colors.text, fontSize: 20}}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F6FA',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container_item: {
        display: "flex",
        padding: 20,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        backgroundColor: Colors.buttons,
        width: "70%",
        borderRadius: 20,
        borderBottomEndRadius: 5,
    },
});

export default StartScreen;
