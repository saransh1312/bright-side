import React from 'react';
import {View, Button, Text} from 'react-native';
import styles from '../../../styles';

export default function Quiz (props) {
    return (
        <View style={[styles.StandardContainer, {
            flex: 0,
            flexDirection: "column",
            justifyContent: "space-around",
            marginTop: 10,
            marginBottom: 5,
        }]}>
            <View style={{padding:10, margin:10}}>
                <Text style={{ fontSize: 20 }}>Did you complete your work before cinema?</Text>
            </View>
            <View style={{
                margin: 10,
                flexDirection: "column",
                justifyContent: "space-evenly"
            }}>
                <View style={{ margin:10 }} >
                    <Button title="Yes" onPress={() => props.nextElement(4)} style={{margin:10, marginRight:10}}/>
                </View>
                <View style={{ margin:10}}>
                    <Button title="No"  onPress={() => props.nextElement(4)} style={{margin:10, marginRight:10}}/>
                </View>
                
            </View>
        </View>
    );
}