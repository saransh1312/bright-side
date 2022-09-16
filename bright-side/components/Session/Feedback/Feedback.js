import React from 'react';
import {View, Button, Text} from 'react-native';

export default function Feedback (props) {
    return (
        <View>
            <Text>Feedback Text</Text>
            <Button title="Finish" onPress={() => props.nextElement.navigate("ExploreList")}/>
        </View>
    );
}