import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import Colors from "../components/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

function ProfileScreen() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.photoView}>
                    <TouchableOpacity>
                        <Image
                            style={styles.profilePhoto}
                            source={require("../assets/profilePhoto.webp")}
                        />
                        <Ionicons name="add-sharp" style={styles.profleAddIcon}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileSettings}>
                    <TouchableOpacity style={styles.profileSettingsItem}>
                        <Text style={[{color: Colors.background}]}>Account Settings Item</Text>
                        <AntDesign name="right" style={styles.itemIcon} color={Colors.background}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileSettingsItem}>
                        <Text style={[{color: Colors.background}]}>Account Settings Item</Text>
                        <AntDesign name="right" style={styles.itemIcon} color={Colors.background}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileSettingsItem}>
                        <Text style={[{color: Colors.background}]}>Account Settings Item</Text>
                        <AntDesign name="right" style={styles.itemIcon} color={Colors.background}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileSettingsItem}>
                        <Text style={[{color: Colors.background}]}>Account Settings Item</Text>
                        <AntDesign name="right" style={styles.itemIcon} color={Colors.background}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileSettingsItem}>
                        <Text style={[{color: Colors.background}]}>Account Settings Item</Text>
                        <AntDesign name="right" style={styles.itemIcon} color={Colors.background}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileSettingsItem}>
                        <Text style={[{color: Colors.background}]}>Account Settings Item</Text>
                        <AntDesign name="right" style={styles.itemIcon} color={Colors.background}/>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1
    },
    photoView: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        // Android gölgesi için
        elevation: 5,

        // iOS gölgesi için
        shadowColor: 'rgba(73,73,73,0.8)',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.20,
        shadowRadius: 3.84,
    },
    profilePhoto: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    profleAddIcon: {
        position: "absolute",
        bottom: 3,
        right: 5,
        borderRadius: 100,
        padding: 5,
        color: Colors.text,
        backgroundColor: Colors.buttons
    },
    profileSettings: {
        marginTop: 60,
        marginHorizontal: "auto",
        backgroundColor: Colors.text,
        width: "90%",
        padding: 10,
        borderRadius: 20
    },
    profileSettingsItem: {
        backgroundColor: Colors.buttons,
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottomColor: "rgba(90,90,90,0.52)",
        borderBottomWidth: 1
    },
    itemIcon: {}
})

export default ProfileScreen;
