import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
} from "react-native";

import ListItem from "./components/ListItem";
import ListInput from "./components/ListInput";

export default function App() {
  const [toDoList, setToDoList] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const addItemToList = (itemTitle) => {
    setToDoList((currentList) => [
      ...currentList,
      { key: Math.random().toString(), value: itemTitle },
    ]);
    setIsVisible(false);
  };

  const deleteItemFromList = itemKey => {
    setToDoList((currentList) => {
      return currentList.filter((item) => item.key !== itemKey);
    })
  }

  const cancelItemAdditionHandler = () => {
    setIsVisible(false);
  }

  return (
    <View style={styles.screen}>

      <Button title="Add Item" onPress={() => {
        setIsVisible(true)
      }} />

      <ListInput visibility={isVisible} onAddItem={addItemToList} onCancel={cancelItemAdditionHandler} />

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
