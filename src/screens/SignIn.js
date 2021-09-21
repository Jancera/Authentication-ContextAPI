import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Button,
  Text,
  TextInput,
} from "react-native-paper";
import { Context } from "../context/authContext";

const SignIn = ({ navigation }) => {
  const { state, teste } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.login}>Login</Text>
      <TextInput
        style={styles.textInput}
        label="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
        left={
          <TextInput.Icon
            name="at"
            size={25}
            color="black"
          />
        }
      />
      <TextInput
        style={styles.textInput}
        label="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        left={
          <TextInput.Icon
            name="lock"
            size={25}
            color="black"
          />
        }
        secureTextEntry={showPassword}
        right={
          showPassword ? (
            <TextInput.Icon
              name="eye"
              size={25}
              color="black"
              onPress={() => setShowPassword(!showPassword)}
            />
          ) : (
            <TextInput.Icon
              name="eye-off"
              size={25}
              color="black"
              onPress={() => setShowPassword(!showPassword)}
            />
          )
        }
      />
      <Button mode="contained" style={styles.loginButton}>
        Login
      </Button>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text>
          Não tem uma conta?{" "}
          <Text style={styles.createAccountText}>
            Crie uma
          </Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "40%",
    alignSelf: "center",
    width: "80%",
  },
  login: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textInput: {
    marginBottom: 10,
  },
  loginButton: {
    padding: 5,
    margin: 20,
    width: "50%",
    alignSelf: "center",
  },
  createAccountText: {
    fontWeight: "bold",
    color: "#6200ee",
  },
});

export default SignIn;
