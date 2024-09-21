import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {products} from '../data/data';
import {useNavigation} from "@react-navigation/native";
import Colors from "../components/Colors";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

function Cards() {
    const navigation = useNavigation();

    return (
        <>
            <Text style={styles.exploreText}>Explore</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.products}>
                    {products.map((product) => (
                        <TouchableOpacity
                            key={product.id}
                            style={styles.product}
                            //@ts-ignore
                            onPress={() => navigation.navigate('Detail', {id: product.id})} // Ürün id'sini gönder
                        >
                            <Image
                                //@ts-ignore
                                source={product.image}
                                style={styles.productImage}/>
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.productPrice}>${product.price}</Text>
                            <TouchableOpacity style={styles.favorite}>
                                <MaterialIcons name="favorite" size={15} color={Colors.cards}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.add}>
                                <FontAwesome6 name="add" size={15} color={Colors.cards}/>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    exploreText: {
        marginLeft: 10,
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 10
    },
    products: {
        flexDirection: "row", // Kartların yatay yerleşimi için flexDirection: 'row'
        paddingHorizontal: 10, // Sağ ve sol boşluklar için
    },
    product: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 25,
        marginHorizontal: 10,
        height: 300,
        width: 200,
        // Android gölgesi için
        elevation: 5,

        // iOS gölgesi için
        shadowColor: 'rgba(73,73,73,0.8)',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.20,
        shadowRadius: 3.84,
    },
    productImage: {
        width: "100%",
        height: 200,
        borderRadius: 20
    },
    productName: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 25,
        color: Colors.buttons
    },
    productPrice: {
        color: Colors.text,
    },
    favorite: {
        position: "absolute",
        top: 25,
        right: 25,
        padding: 5,
        borderRadius: 100,
        backgroundColor: Colors.alert
    },
    add: {
        position: "absolute",
        bottom: 27,
        right: 25,
        padding: 5,
        backgroundColor: Colors.buttons,
        borderRadius: 100
    }
});

export default Cards;
