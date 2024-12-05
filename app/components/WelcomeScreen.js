import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.sect1}>
        <Image
          style={styles.logoimg}
          source={require("../../assets/logo.png")}
        />
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>Marshy App</Text>
        {/* <Text style={{ margin: 10, fontWeight: "bold" }}>
          Taking orders have never been so easy.
        </Text> */}
      </View>
      <Text style={{ marginBottom: 18 }}>
        Get started by choosing an option.
      </Text>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={{ color: "white", textAlign: "center", fontSize: 15 }}>
          LOGIN
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerBtn}>
        <Text style={{ color: "white", textAlign: "center", fontSize: 15 }}>
          REGISTER
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8E8",
    alignItems: "center",
    justifyContent: "center",
  },

  logoimg: {
    width: 100,
    height: 100,
  },

  sect1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loginBtn: {
    backgroundColor: "black",
    borderRadius: 20,
    width: "85%",
    textAlign: "center",
    padding: 18,
    marginBottom: 15,
    fontSize: 20,
  },

  registerBtn: {
    backgroundColor: "#841584",
    borderRadius: 20,
    width: "85%",
    textAlign: "center",
    padding: 18,
    marginBottom: 45,
    fontSize: 20,
  },
});

export default WelcomeScreen;
