import React, { useState, useContext } from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import EmailInput from "../components/EmailInput";
import NomeInput from "../components/NomeInput";
import PasswordInput from "../components/PasswordInput";

import { Context } from "../context/authContext";

const SignUp = ({ navigation }) => {
  const { createUser } = useContext(Context);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(true);

  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.createAccount}>Criar conta</Text>

        <NomeInput value={name} setValue={setName} />
        <EmailInput value={email} setValue={setEmail} />
        <PasswordInput
          value={password}
          setValue={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />

        <Button
          style={styles.createButton}
          mode="contained"
          onPress={() => {
            createUser(name, email, password);
            navigation.navigate("SignIn");
          }}
        >
          Criar
        </Button>

        <TouchableOpacity
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text>
            Já tem uma conta?{" "}
            <Text style={styles.loginText}>Faça o login</Text>
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "40%",
    alignSelf: "center",
    width: "80%",
  },
  createAccount: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },
  createButton: {
    padding: 5,
    margin: 20,
    width: "50%",
    alignSelf: "center",
  },
  loginText: {
    fontWeight: "bold",
    color: "#6200ee",
  },
});

export default SignUp;
