import React from "react";
import {
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MenuButtons from "../components/MenuButtons";
import Contacts from "../components/Contacts";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <Header />
        <SearchBar />
        <MenuButtons navigation={navigation} />
        <Contacts />
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: "100%",
  },
  container: {
    backgroundColor: "#1c1c1c",
    padding: 15,
  },
});
export default Home;
