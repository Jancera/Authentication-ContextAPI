import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

import api from "../api";

const SignInToken = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const singInToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        try {
          const data = await api.get("/", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          navigation.navigate("Home");
        } catch (e) {
          navigation.navigate("SignIn");
          console.log(e);
        }
      } else {
        navigation.navigate("SignIn");
      }
    };

    singInToken();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator color="black" size={40} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignInToken;
