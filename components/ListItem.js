import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
    FlatList,
  } from "react-native";

const ListItem = props => {
    return (
        <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    );
};

export default ListItem;


const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      backgroundColor: "#ccc",
      borderColor: "black",
      borderWidth: 1,
      marginVertical: 10,
    },
  });
  