import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredItem, setEnteredItem] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const itemInputHandler = (enteredText) => {
    setEnteredItem(enteredText);
  };

  const addItemToList = () => {
    setToDoList((currentList) => [...currentList, {key: Math.random().toString(), value: enteredItem}]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter an item"
          style={styles.input}
          onChangeText={itemInputHandler}
        />
        <Button title="ADD" onPress={addItemToList} />
      </View>

        <FlatList
          data={toDoList}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              <Text>{itemData.item.value}</Text>
            </View>
          )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
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
  },
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
  },
});
