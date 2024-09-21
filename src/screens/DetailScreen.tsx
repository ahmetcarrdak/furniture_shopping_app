import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {products} from '../data/data';
import Colors from "../components/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';

//@ts-ignore
function DetailScreen({route}) {
    const {id} = route.params; // Ürün id'sini al
    const product = products.find((item) => item.id === id); // Ürünü id'ye göre bul

    if (!product) {
        return <Text>Ürün bulunamadı.</Text>;
    }

    return (
        <View style={styles.container}>
            <Image
                //@ts-ignore
                source={product.image}
                style={styles.productImage}/>
            <View style={styles.productView}>
                <Text style={styles.productPrice}>${product.price}</Text>
                <Text style={styles.productName}>{product.name}</Text>
                <View style={styles.colorOptions}>
                    <Text>Color Options</Text>
                    <View style={[{flexDirection: "row", marginTop: 5}]}>
                        <View style={[styles.outerCircle_1]}>
                            <View style={[styles.innerCircle_1]}></View>
                        </View>
                        <View style={[styles.outerCircle_2]}>
                            <View style={[styles.innerCircle_2]}></View>
                        </View>
                        <View style={[styles.outerCircle_3]}>
                            <View style={[styles.innerCircle_3]}></View>
                        </View>
                    </View>
                </View>
                <Text style={[{marginTop: 20, fontWeight: "bold", color: Colors.buttons}]}>Description</Text>
                <Text style={styles.productDescription}>{product.description}</Text>
            </View>
            <TouchableOpacity style={styles.addToCart}>
                <Ionicons name="add-sharp" size={12} color={Colors.background}/>
                <Text style={[{marginLeft: 10, color: Colors.background, fontSize: 12}]}>Add To Cart</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: -70
    },
    productImage: {
        width: "100%",
        height: "50%",
        marginBottom: 20,
        borderBottomLeftRadius: 50
    },
    productView: {
        paddingLeft: 30
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 20,
        color: Colors.alert,
        fontWeight: "bold"
    },
    colorOptions: {
        marginTop: 20
    },
    productDescription: {
        marginTop: 10,
        fontSize: 11,
        color: Colors.text,
    },
    outerCircle_1: {
        borderColor: Colors.alert,
        borderWidth: 2,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 6
    },
    innerCircle_1: {
        backgroundColor: Colors.alert,
        borderRadius: 50,
        width: 12,
        height: 12,
    },
    outerCircle_2: {
        borderRadius: 100,
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    innerCircle_2: {
        backgroundColor: Colors.text,
        borderRadius: 50,
        width: 20,
        height: 20,
    },
    outerCircle_3: {
        borderRadius: 100,
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    innerCircle_3: {
        backgroundColor: Colors.buttons,
        borderRadius: 50,
        width: 20,
        height: 20,
    },
    addToCart: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: Colors.buttons,
        flexDirection: "row",
        padding: 20,
        borderRadius: 0,
        borderTopLeftRadius: 40,
        justifyContent: "space-around",
        alignItems: "center"
    }
});

export default DetailScreen;
