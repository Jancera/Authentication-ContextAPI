import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Button,
  HelperText,
  Text,
  TextInput,
} from "react-native-paper";
import { Context } from "../context/authContext";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";

const SignIn = ({ navigation }) => {
  const { state, loginUser, setLoginError } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(true);

  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.login}>Login</Text>

        <EmailInput value={email} setValue={setEmail} />
        <PasswordInput
          value={password}
          setValue={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />

        <Button
          mode="contained"
          style={styles.loginButton}
          onPress={() => {
            if ((email || password) === "") {
              setLoginError(true);
              return;
            }
            loginUser(email, password);
            navigation.navigate("Home");
          }}
        >
          Login
        </Button>
        {state.loginError ? (
          <HelperText
            style={{ alignSelf: "center" }}
            type="error"
            visible={state.loginError}
          >
            Login Error
          </HelperText>
        ) : null}
        <TouchableOpacity
          onPress={() => {
            setLoginError(false);
            navigation.navigate("SignUp");
          }}
        >
          <Text>
            Não tem uma conta?{" "}
            <Text style={styles.createAccountText}>Crie uma</Text>
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
  login: {
    fontSize: 40,
    fontWeight: "bold",
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
