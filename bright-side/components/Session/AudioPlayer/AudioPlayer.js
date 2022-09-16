import React, {useState} from 'react';
import { TouchableOpacity, Text, View, Image, Button } from 'react-native';
import styles from '../../../styles';
import AudioSlider from './src/AudioSlider';
import AudioFile from '../../../assets/sample.mp3';


export default function AudioPlayer(props) {
    let [playbackFinishSignal,setPlaybackFinishSignal] = useState(false);

    return (
        <View style={[styles.container, styles.fullWidth, styles.whiteBackground]}>
            <View style={[ styles.fullWidth, styles.center]}>
                <View style={{ alignSelf:'center'}}>
                    <Text style={{fontSize:20}}>
                        Audio name
                    </Text>
                </View>
                <View style={{ width:'100%'}}>
                    <Image 
                        resizeMode='contain'
                        style={[styles.fullWidth]}
                        source={require('../../../assets/giphy.gif')}
                    />
                </View>
                <View style={[styles.container, styles.fullWidth, { flex:0, width:'100%'}]}>
                    <AudioSlider audio={AudioFile} setPlaybackFinishSignal={setPlaybackFinishSignal}/>
                </View>
            </View>
            {playbackFinishSignal ?
                <View style={[styles.center]}>
                        <Button title='Next' onPress={() => props.nextElement(2)} style={[styles.blueBackGround, {color:'#66CEFF'}]} />
                </View>
                :
                null
            }
        </View>
  );
}