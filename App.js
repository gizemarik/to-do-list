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

import ListItem from "./components/ListItem";
import ListInput from "./components/ListInput";

export default function App() {
  const [toDoList, setToDoList] = useState([]);

  const addItemToList = (itemTitle) => {
    setToDoList((currentList) => [
      ...currentList,
      { key: Math.random().toString(), value: itemTitle },
    ]);
  };

  const deleteItemFromList = itemKey => {
    setToDoList((currentList) => {
      return currentList.filter((item) => item.key !== itemKey);
    })
  }

  return (
    <View style={styles.screen}>
      <ListInput onAddItem={addItemToList} />

      <FlatList
        data={toDoList}
        renderItem={(itemData) => <ListItem itemKey={itemData.item.key} onDelete={deleteItemFromList} title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
