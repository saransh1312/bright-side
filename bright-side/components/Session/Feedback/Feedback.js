import React from 'react';
import {View, Button, Text} from 'react-native';
import styles from '../../../styles';

export default function Feedback (props) {
    return (
        <View style={[styles.itemCard, {justifyContent:'center'}]} >
            <View style={{justifyContent:'center', paddingBottom:10}}>
                <Text style={{ fontSize: 20}} >Feedback Text</Text>
            </View>
            <View>
                <Button style={{padding:10}} title="Finish" onPress={() => props.nextElement.navigate("ExploreList")}/>
            </View>
        </View>
    );
}