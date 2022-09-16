import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';
import Slider from "react-native-sliders";
import styles from '../../../styles';

export default function RatingSLider (props) {
    let [sliderValue, setSliderValue] = useState(0);
    return (
        <View style={[styles.itemCard,{justifyContent:'center'}]}>
            <View style={{ padding:10, justifyContent:'center' }}>
                <Text style={{fontSize:20}}>How vividly did you imagine the scenario described?</Text>
                <Slider value={sliderValue} onValueChange={setSliderValue}/>
            </View>
            <View style={{ padding:10 }}>
                <Button title='Next' onPress={() => props.nextElement(5)}/>
            </View>
        </View>
    );
}