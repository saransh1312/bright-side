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
            <View>
                <Text>Lorem ipsum dolor sit amet. Ut provident libero et temporibus distinctio est asperiores corporis et natus quasi qui internos consequatur eos architecto voluptas et quisquam odio. Ea quasi impedit sed asperiores impedit ut nobis ipsa eum quibusdam praesentium eos perferendis laboriosam non corrupti tenetur sit labore quibusdam. At provident alias est expedita voluptate qui voluptatibus placeat ad voluptatem internos qui molestias fugiat. Id voluptas illum et voluptates omnis eum esse soluta ea ipsum tempore</Text>
            </View>
            <View style={{
                flexDirection: "column",
                justifyContent: "space-evenly"
            }}>
                <Button title="Yes" onPress={() => props.nextElement(4)} style={{marginLeft:10, marginRight:10}}/>
                <Button title="No"  onPress={() => props.nextElement(4)} style={{marginLeft:10, marginRight:10}}/>
            </View>
        </View>
    );
}