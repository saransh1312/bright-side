import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import Player from '../player/Player';
import Session from '../Session/Session';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    mainCardView: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
    },
    subCardView: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: 'grey',
        borderColor: 'grey',
        borderWidth: 1,
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


const cards = [
    {
        id: "0",
        title: "Starry Night",
        picture: require('../../assets/starry_night.jpeg'),
        content: "Trial 1"
    },
    {
        id: "1",
        title: "Wheat Field",
        picture: require('../../assets/wheat_field.jpeg'),
        content: "Trial 2"
    },
    {
        id: "2",
        title: "Bedroom in Arles",
        picture: require('../../assets/bed.jpeg'),
        content: "Trial 3"
    },
    {
        id: "0",
        title: "Starry Night",
        picture: require('../../assets/starry_night.jpeg'),
        content: "Trial 4"
    },
    {
        id: "1",
        title: "Wheat Field",
        picture: require('../../assets/wheat_field.jpeg'),
        content: "Trial 5"
    },
    {
        id: "2",
        title: "Bedroom in Arles",
        picture: require('../../assets/bed.jpeg'),
        content: "Trial 6"
    },
    {
        id: "0",
        title: "Starry Night",
        picture: require('../../assets/starry_night.jpeg'),
        content: "Trial 7"
    },
    {
        id: "1",
        title: "Wheat Field",
        picture: require('../../assets/wheat_field.jpeg'),
        content: "Trial 8"
    },
    {
        id: "2",
        title: "Bedroom in Arles",
        picture: require('../../assets/bed.jpeg'),
        content: "Trial 9"
    }
]

function onPressButton() {
    alert("button pressed")
}

function ExploreList({navigation}){
    return(
        <SafeAreaView>
            <ScrollView>
                {cards.map(card => {
                    return (
                        <TouchableOpacity key={card.content} onPress={() => navigation.navigate('Session')}>
                            <View style={styles.mainCardView}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={styles.subCardView}>
                                        <Image
                                            source={card.picture}
                                            resizeMode="contain"
                                            style={{
                                                borderRadius: 25,
                                                height: 50,
                                                width: 50,
                                            }}
                                        />
                                    </View>
                                    <View style={{ marginLeft: 12 }}>
                                        <Text>{card.content}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })
                }
            </ScrollView>
        </SafeAreaView >
    )
}

const Stack = createNativeStackNavigator();

function Explore(props) {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
            <Stack.Screen
                name="ExploreList"
                component={ExploreList}
            />
            <Stack.Screen
                name="Session"
                component={Session}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Explore;