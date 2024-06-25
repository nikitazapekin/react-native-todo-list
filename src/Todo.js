import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
const Todo = ({ todo }) => {
    return (
        <TouchableOpacity activeOpacity={0.5}
         onPress={()=>console.log("pressed", todo.id)}
     //    onLongPress={}
         >

            <View style={styles.todo}>
                <Text>
                    {todo.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default Todo;

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: "red",
        color: "black"
    }
})