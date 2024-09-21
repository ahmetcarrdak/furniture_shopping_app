import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from "./src/screens/StartScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/Profile";
import CustomHeader from "./src/utils/CustomHeader";
import DetailScreen from "./src/screens/DetailScreen";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#F5F6FA"/>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Start">
                    <Stack.Screen
                        name="Start"
                        component={StartScreen}
                        options={{headerShown: false}}/>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{headerShown: false}}/>
                    <Stack.Screen
                        name={"Profile"}
                        component={ProfileScreen}
                        options={{
                            header: () => <CustomHeader title="Profil" showBackButton/>, // Profil ekranında geri butonuyla
                        }}/>
                    <Stack.Screen
                        name={"Detail"}
                        component={DetailScreen}
                        options={{
                            header: () => <CustomHeader title="Detail" showBackButton/>, // Profil ekranında geri butonuyla
                        }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6FA',
    },
});
