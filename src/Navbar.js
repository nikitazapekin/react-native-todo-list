import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>
            {props.title}
            </Text>
        </View>
    );
}

export default Navbar;

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#3949ab",
        paddingBottom: 10
    },
    text: {
color: "white"
    }
})