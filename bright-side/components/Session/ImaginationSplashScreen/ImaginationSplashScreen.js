import React, {useEffect} from 'react';
import {View, Image, Text} from 'react-native';

export default function ImaginationSplashScreen (props) {
    useEffect(() => {
        setTimeout(function(){
            props.nextElement(3);
        },7000);
    })
    return (
        <View style={{
            height: "100%",
            flex: 0,
            flexDirection: 'column',
            justifyContent: "center",
            backgroundColor: 'white',
        }}>
            <Image
                style={{width: "100%"}}
                source={require('../../../assets/winnie-the-pooh-think.gif')}
            />
        </View>
    );
}