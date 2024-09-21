import React from 'react';
import {StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, Image} from "react-native";
import Colors from "../components/Colors";
import Menu from "../utils/Menu";
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import Cards from "../utils/Cards";
import colors from "../components/Colors";

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Menu/>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.searchBlog}>
                    <View style={styles.searchInput}>
                        <Ionicons name="search-outline" size={24} color={Colors.text}/>
                        <TextInput placeholder={"Search"} style={styles.searchInputInput}></TextInput>
                    </View>
                    <View style={styles.cartBlog}>
                        <Ionicons name="cart-outline" size={24} color={Colors.buttons}/>
                        <View style={styles.cartDot}></View>
                    </View>
                </View>
                <View style={styles.cardView}>
                    <Cards/>
                </View>
                <View>
                    <Text
                        style={[{color: Colors.buttons, fontSize: 20, fontWeight: "bold", marginLeft: 10}]}
                    >Best Selling</Text>
                    <View style={styles.best}>
                        <Image style={styles.bestImage}
                            //@ts-ignore
                               source={require("../assets/product1.jpg")}
                        />
                        <View style={styles.bestText}>
                            <Text
                                style={[{fontWeight: "bold", color: Colors.buttons, fontSize: 17}]}>
                                Minimal Chair
                            </Text>
                            <Text style={[{fontSize: 12, color: Colors.text}]}>Lorem Ipsum</Text>
                            <Text style={[{fontSize: 14}]}>$125.90</Text>
                        </View>
                        <TouchableOpacity style={styles.bestIcon}>
                            <Feather name="arrow-right" size={15} color={Colors.background}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1,
    },
    scrollContainer: {
        paddingTop: 150,
        paddingHorizontal: 20
    },
    searchBlog: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20
    },
    searchInput: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
        backgroundColor: Colors.cards,
        borderRadius: 10,
        width: "90%",
        // Android gölgesi için
        elevation: 5,

        // iOS gölgesi için
        shadowColor: 'rgba(73,73,73,0.8)',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.20,
        shadowRadius: 3.84,
    },
    searchInputInput: {
        paddingHorizontal: 10,
        color: Colors.text
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
    cardView: {
        marginTop: 40
    },
    best: {
        marginLeft: 10,
        marginTop: 20,
        width: "95%",
        backgroundColor: Colors.cards,
        borderRadius: 30,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        elevation: 5,

        // iOS gölgesi için
        shadowColor: 'rgba(73,73,73,0.8)',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.20,
        shadowRadius: 3.84,
        marginBottom: 20
    },
    bestImage: {
        width: 100,
        height: 100,
        elevation: 5,

        // iOS gölgesi için
        shadowColor: 'rgba(73,73,73,0.8)',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.20,
        shadowRadius: 3.84,
    },
    bestText: {
        marginLeft: 20
    },
    bestIcon: {
        backgroundColor: Colors.buttons,
        position: "absolute",
        padding: 7,
        bottom: 20,
        right: 20,
        borderRadius: 10
    }
});

export default HomeScreen;
