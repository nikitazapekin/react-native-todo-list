import React from "react";
import { View, StyleSheet, TextInput, Button, Alert, ScrollView } from "react-native";
import { useState } from "react";
const AddTodo = ({ onSubmit }) => {

    const [value, setValue] = useState("")
    const pressHandler = () => {
        // onSubmit("еуые")
        if (value.trim()) {
            onSubmit(value)
            setValue("")

        } else {
            Alert.alert("введите текст")
        }
    }
    return (
        <View styles={styles.block}>
            <TextInput style={styles.input}
                onChangeText={text => setValue(text)}
                value={value}
                placeholder="Введите название дела..."
            />
            <Button title="Add" onPress={pressHandler} />

        </View>
    );
}
export default AddTodo;
const styles = StyleSheet.create({

    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
    input: {
        width: "100%",
        borderStyle: "solid",
        borderWidth: 2,
        borderBottomColor: "gray",
        padding: "10px"
    }
})