import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import { Context } from "../context/authContext";

const SignIn = () => {
  const { state, teste } = useContext(Context);
  return (
    <View>
      <Text>SignIn</Text>
      <Button
        title="função"
        onPress={() => teste("Hello from signin")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignIn;
