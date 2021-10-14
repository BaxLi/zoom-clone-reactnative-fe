import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";

function SearchBar() {
  return (
    <View style={styles.container}>
      <Fontisto name='search' size={22} color={"#858585"} />
      <Text style={styles.textSearchBar}>SearchBar</Text>
    </View>
  );
}
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#333333",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 10,
  },
  textSearchBar: {
    color: "#858585",
    paddingLeft: 10,
    fontSize: 22,
  },
});
