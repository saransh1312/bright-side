import React, {useState} from 'react';
import {View} from 'react-native';
import AudioPlayer from './AudioPlayer/AudioPlayer';
import ImaginationSplashScreen from './ImaginationSplashScreen/ImaginationSplashScreen';
import Quiz from './Quiz/Quiz';
import RatingSLider from './RatingSlider/RatingSlider';
import Feedback from './Feedback/Feedback';
import styles from '../../styles';

export default function Session({navigation}) {
  let [sessionElementID,setSessionElementID] = useState(1);
  switch (sessionElementID){
    case 1: 
      return (
        <View style={[styles.container]}>
          <AudioPlayer nextElement={setSessionElementID}/>
        </View>
      );
    case 2: 
      return (
        <View style={[styles.container]}>
          <ImaginationSplashScreen nextElement={setSessionElementID}/>
        </View>
      );
    case 3:  
      return (
        <View style={[styles.container]}>
          <Quiz nextElement={setSessionElementID}/>
        </View>
      );
    case 4:  
      return (
        <View style={[styles.container]}>
          <RatingSLider nextElement={setSessionElementID}/>
        </View>
      );
    case 5:  
      return (
        <View style={[styles.container]}>
          <Feedback nextElement={navigation}/>
        </View>
      );
  }
}