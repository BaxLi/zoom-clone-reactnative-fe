import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const MeetingRoom = () => {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.startMeetingContainer}>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={name}
            placeholder='Enter name:'
            placeholderTextColor='#767476'
            onChange={(text) => setName(text)}
          />
        </View>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={name}
            placeholder='Room Id:'
            placeholderTextColor='#767476'
            onChange={(text) => setRoomId(text)}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.startMeetingButton}
            onPress={() => {}}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              Start meeting
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MeetingRoom;
const styles = StyleSheet.create({
  container: { backgroundColor: "#1c1c1c", flex: 1 },
  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#484648",
    padding: 12,
    justifyContent: "center",
  },
  startMeetingContainer: {},
  textInput: { color: "white", fontSize: 18 },
  startMeetingButton: {
    width: 350,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0470DC",
    height: 50,
    borderRadius: 15,
  },
});
