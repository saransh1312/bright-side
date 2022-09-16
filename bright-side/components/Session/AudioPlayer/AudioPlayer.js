import React, {useState} from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import styles from '../../../styles';
import AudioSlider from './src/AudioSlider';
import AudioFile from '../../../assets/sample.mp3';


export default function AudioPlayer(props) {
    let [playbackFinishSignal,setPlaybackFinishSignal] = useState(false);

    return (
        <View style={{height: "100%"
        }}>
            <View style={[styles.StandardContainer, {
                flex: 0,
                flexDirection: "column",
                justifyContent: "space-between",
                marginTop: 10,
                height: "80%",
                marginBottom: 5,
            }]}>
                <View style={{
                    flex: 0,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    }}>
                    <Text style={[styles.StandardText, {flex: 5}]}>
                        Audio name
                    </Text>
                </View>
                <View style={{width: "100%"}}>
                    <Image
                        style={{width: "100%"}}
                        source={require('../../../assets/giphy.gif')}
                    />
                </View>
                <View style={{marginBottom:10}}>
                    <AudioSlider audio={AudioFile} setPlaybackFinishSignal={setPlaybackFinishSignal}/>
                </View>
            </View>
            {playbackFinishSignal ?
                <View style={{
                    marginTop: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    flexDirection: "row",
                    justifyContent: "flex-end"
                }}>
                        <TouchableOpacity onPress={() => props.nextElement(2)} style={{
                            backgroundColor: "blue",
                            width: 100,
                            height: 50
                        }}>
                            <Text style={styles.StandardText}>Next</Text>
                        </TouchableOpacity>
                </View>
                :
                null
            }
        </View>
  );
}