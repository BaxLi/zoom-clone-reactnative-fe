import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const contactsMenuButtons = [
  { type: "starred", name: "starred" },
  { type: "contact", name: "Nma Fam", photo: require("../assets/img1.jpg") },
  { type: "contact", name: "YTRy iuiu", photo: require("../assets/img2.jpg") },
  { type: "contact", name: "dfg hg", photo: require("../assets/img3.jpg") },
  { type: "contact", name: "Ajhfgsajdh", photo: require("../assets/img4.jpg") },
];
function Contacts() {
  return (
    <View style={styles.container}>
      {contactsMenuButtons.map((contact, index) => (
        <View key={index} style={styles.row}>
          {/*Image of contact */}
          {contact.type === "starred" ? (
            <View style={styles.starredImage}>
              <AntDesign name='star' size={30} color='#efefef' />
            </View>
          ) : (
            <Image source={contact.photo} style={styles.image} />
          )}
          <Text style={styles.text}>{contact.name}</Text>
        </View>
      ))}
    </View>
  );
}
export default Contacts;

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  starredImage: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
  image: {
    height: 55,
    width: 55,
    borderRadius: 20,
  },
});
