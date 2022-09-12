import React from "react";
import { Button, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    navItem: {
        flex: 1,
    }
  });

const Navigator = () => {

    return (
        <View>
            <Button style={styles.navItem} title="Dashboard">Dashboard</Button>
            <Button style={styles.navItem} title="Profile">Profile</Button>
            <Button style={styles.navItem} title="Tasks">Tasks</Button>
        </View>
    );
}
export default Navigator;