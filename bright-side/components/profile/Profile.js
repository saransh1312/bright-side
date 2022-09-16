import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faChartSimple } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles";

const Profile = (props) => {

    return(
        <View style={[styles.container ]} >
            <View style={[styles.headingDiv, styles.blueBackGround]} >
                <Text style={styles.headingText} >Profile</Text>
                <View style={{flexDirection:"row"}}>
                    {/* <FontAwesomeIcon size={90} icon={ faChartSimple } />
                    <FontAwesomeIcon size={90} icon={ faChartSimple } /> */}
                </View>
                
            </View>
            <View style={[styles.statsDiv, styles.blueBackGround]} >
            <ScrollView style={styles.statsDiv} >
                <View style={ [styles.itemCard, styles.roundBorder, styles.whiteBackground] } >
                    <Text style={{ fontSize: 35, color:'black' }}>You are doing Great!!</Text>
                </View>
                <View style={ [styles.itemCard, styles.whiteBackground, styles.roundBorder, styles.rowFlex, styles.spaceBetween] } >
                    <Text style={{ fontSize: 20 }} >Sessions Completed</Text>
                    <Text style={{ fontSize: 20 }} >14</Text>
                </View>
                <View style={ [styles.itemCard, styles.whiteBackground, styles.roundBorder, styles.rowFlex, styles.spaceBetween] } >
                    <Text style={{ fontSize: 20 }} >Trials Done</Text>
                    <Text style={{ fontSize: 20 }} >35</Text>
                </View>
                <View style={ [styles.itemCard, styles.whiteBackground, styles.roundBorder, styles.rowFlex, styles.spaceBetween] } >
                    <Text style={{ fontSize: 20 }} >Current Level</Text>
                    <Text style={{ fontSize: 20 }} >3</Text>
                </View>
            </ScrollView>
            </View>
        </View>
    );
}
export default Profile