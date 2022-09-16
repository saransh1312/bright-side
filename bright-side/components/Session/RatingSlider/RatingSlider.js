import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';
import Slider from "react-native-sliders";

export default function RatingSLider (props) {
    let [sliderValue, setSliderValue] = useState(0);
    return (
        <View>
            <View>
                <Text>Quiz QUestion</Text>
                <Slider value={sliderValue} onValueChange={setSliderValue}/>
            </View>
            <View>
                <Button title='Next' onPress={() => props.nextElement(5)}/>
            </View>
        </View>
    );
}