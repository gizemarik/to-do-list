import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const ListInput = (props) => {
  const [enteredItem, setEnteredItem] = useState("");

  const itemInputHandler = (enteredText) => {
    setEnteredItem(enteredText);
  };

  const addItemInputHandler = () => {
    props.onAddItem(enteredItem);
    setEnteredItem("");
  };

  return (
    <Modal visible={props.visibility} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter an item"
          style={styles.input}
          value={enteredItem}
          onChangeText={itemInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.buttons}>
            <Button title="ADD" onPress={addItemInputHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ListInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  buttons: {
      width: '40%'
  }
});
