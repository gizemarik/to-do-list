import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const ListInput = (props) => {
  const [enteredItem, setEnteredItem] = useState("");

  const itemInputHandler = (enteredText) => {
    setEnteredItem(enteredText);
  };

  return (
    <Modal visible={props.visibility} animationType="slide" >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter an item"
          style={styles.input}
          value={enteredItem}
          onChangeText={itemInputHandler}
        />
        <Button title="ADD" onPress={props.onAddItem.bind(this, enteredItem)} />
      </View>
    </Modal>
  );
};

export default ListInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex:1
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom:10
  },
});
