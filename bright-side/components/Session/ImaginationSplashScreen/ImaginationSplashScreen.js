import React, {useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import styles from '../../../styles';

export default function ImaginationSplashScreen (props) {
    useEffect(() => {
        setTimeout(function(){
            props.nextElement(3);
        },7000);
    })
    return (
        <View style={[ styles.fullWidth, styles.container, styles.blueBackGround ]} >

        
        <View style={[ styles.fullWidth, styles.container, styles.whiteBackground, {borderRadius:10} ]}>
            <Text>THINK ABOUT WHAT YOU HEARD</Text>
            <Image
                resizeMode='contain'
                style={[styles.fullWidth]}
                source={require('../../../assets/winnie-the-pooh-think.gif')}
            />
        </View>
        </View>
    );
}