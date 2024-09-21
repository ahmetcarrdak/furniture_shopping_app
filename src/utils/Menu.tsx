import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Animated, Easing, Dimensions, Image} from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from "../components/Colors";
import {useNavigation} from "@react-navigation/native";
import colors from "../components/Colors";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from "@expo/vector-icons/Feather";

const {width} = Dimensions.get('window');

//@ts-ignore
function Menu() {
    const [menuAnimation] = useState(new Animated.Value(-width)); // Menü animasyonu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigation = useNavigation();

    const toggleMenu = () => {
        const toValue = isMenuOpen ? -width : 0;
        Animated.timing(menuAnimation, {
            toValue,
            duration: 300,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start(() => {
            setIsMenuOpen(!isMenuOpen);
        });
    };

    return (
        <>
            <View style={styles.menu}>
                <TouchableOpacity onPress={toggleMenu}>
                    <FontAwesome6 name="bars-staggered" size={24} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.profile}
                    //@ts-ignore
                    onPress={() => navigation.navigate('Profile')}>
                    <FontAwesome name="user" size={16} style={styles.profileIcon}/>
                </TouchableOpacity>
            </View>

            <Animated.View
                style={[styles.sideMenu, {transform: [{translateX: menuAnimation}]}]}
            >
                <TouchableOpacity style={styles.overlay} onPress={toggleMenu}></TouchableOpacity>
                <View style={styles.menuContent}>
                    <Text style={styles.menuTitle}>Menu</Text>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={[{color: Colors.background}]}>Menu Item</Text>
                        <AntDesign name="right" size={14} color={Colors.background}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={[{color: Colors.background}]}>Menu Item</Text>
                        <AntDesign name="right" size={14} color={Colors.background}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={[{color: Colors.background}]}>Menu Item</Text>
                        <AntDesign name="right" size={14} color={Colors.background}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={[{color: Colors.background}]}>Menu Item</Text>
                        <AntDesign name="right" size={14} color={Colors.background}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={[{color: Colors.background}]}>Menu Item</Text>
                        <AntDesign name="right" size={14} color={Colors.background}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={[{color: Colors.background}]}>Menu Item</Text>
                        <AntDesign name="right" size={14} color={Colors.background}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={[{color: Colors.background}]}>Menu Item</Text>
                        <AntDesign name="right" size={14} color={Colors.background}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={[{color: Colors.background}]}>Menu Item</Text>
                        <AntDesign name="right" size={14} color={Colors.background}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={[{color: Colors.background}]}>Menu Item</Text>
                        <AntDesign name="right" size={14} color={Colors.background}/>
                    </TouchableOpacity>
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
            </Animated.View>

        </>
    );
};

const styles = StyleSheet.create({
    menu: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 30,
        left: 0,
        right: 0,
        height: 100,
        paddingHorizontal: 50,
        zIndex: 1,
    },
    profile: {
        backgroundColor: Colors.buttons,
        padding: 7,
        borderRadius: 7,
    },
    profileIcon: {
        color: Colors.cards,
        paddingHorizontal: 4,
        paddingVertical: 3
    },
    sideMenu: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: width,
        zIndex: 2,
        backgroundColor: "rgba(135,135,135,0.66)",
    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    menuContent: {
        width: "70%",
        height: "100%",
        backgroundColor: '#fff',
        borderColor: Colors.buttons,
        padding: 20,
        paddingVertical: 80,
        position: "absolute",
        left: 0,
        zIndex: 5,
        // Android gölgesi için
        elevation: 5,

        // iOS gölgesi için
        shadowColor: 'rgb(46,46,46)',
        shadowOffset: {width: 20, height: 0},
        shadowOpacity: 1.9,
        shadowRadius: 5.84,
    },
    menuText: {
        fontSize: 18,
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: Colors.buttons,
        padding: 10,
        borderRadius: 5,
    },
    closeText: {
        color: colors.text,
        fontSize: 16,
    },
    menuTitle: {
        fontSize: 25,
        fontWeight: "bold",
        color: Colors.buttons,
        marginBottom: 30,
        borderBottomColor: "rgba(129,129,129,0.3)",
        borderBottomWidth: 1,
        paddingBottom: 3
    },
    menuItem: {
        backgroundColor: Colors.alert,
        padding: 10,
        borderBottomColor: "rgba(66,66,66,0.47)",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    best: {
        position: "absolute",
        left: 25,
        bottom: 20,
        width: "95%",
        backgroundColor: Colors.cards,
        borderRadius: 30,
        padding: 5,
        flexDirection: "row",
        alignItems: "center",
        elevation: 5,

        // iOS gölgesi için
        shadowColor: 'rgba(73,73,73,0.8)',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.20,
        shadowRadius: 3.84,
    },
    bestImage: {
        width: 50,
        height: 50,
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
        padding: 5,
        bottom: 10,
        right: 10,
        borderRadius: 10
    }
});

export default Menu;
