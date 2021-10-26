import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import { Context } from "../context/authContext";

const Home = () => {
  const { setIsLogged } = useContext(Context);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="LogOut"
        onPress={async () => {
          await AsyncStorage.removeItem("token");
          setIsLogged(false);
        }}
      />
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

export default Home;
