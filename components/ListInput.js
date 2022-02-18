import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

const ListInput = (props) => {
    const [enteredItem, setEnteredItem] = useState("");

    const itemInputHandler = (enteredText) => {
        setEnteredItem(enteredText);
      };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter an item"
        style={styles.input}
        value={enteredItem}
        onChangeText={itemInputHandler}
      />
      <Button title="ADD" onPress={props.onAddItem.bind(this, enteredItem)} />
    </View>
  );
};

export default ListInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      input: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        width: "80%",
      }
});
