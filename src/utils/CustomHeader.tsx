import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import Colors from '../components/Colors';

interface CustomHeaderProps {
    title: string;
    showBackButton?: boolean;
    showProfileButton?: boolean;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({title, showBackButton = false, showProfileButton = false}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {showBackButton && (
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
                    <Feather name="arrow-left" size={20} color={Colors.buttons}/>
                </TouchableOpacity>
            )}
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.cartBlog}>
                <Ionicons name="cart-outline" size={24} color={Colors.buttons}/>
                <View style={styles.cartDot}></View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 60,
        marginTop: 60,
        backgroundColor: "rgba(255,255,255,0)"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.buttons,
    },
    iconButton: {
        padding: 10,
    },
    cartBlog: {
        marginLeft: 26,
        flexDirection: "row",
    },
    cartDot: {
        width: 10,
        height: 10,
        borderRadius: 100,
        backgroundColor: Colors.alert,
        position: "absolute",
        left: 17
    },
});

export default CustomHeader;
