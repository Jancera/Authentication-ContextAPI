import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import { Context } from "../context/authContext";

const PasswordInput = ({
  value,
  setValue,
  showPassword,
  setShowPassword,
}) => {
  const { state } = useContext(Context);
  return (
    <>
      <TextInput
        label="Senha"
        value={value}
        onChangeText={(text) => setValue(text)}
        left={<TextInput.Icon name="lock" size={25} color="black" />}
        secureTextEntry={showPassword}
        error={state.loginError}
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
      {state.loginError ? (
        <HelperText type="error" visible={state.loginError}>
          Password must exist
        </HelperText>
      ) : null}
    </>
  );
};

export default PasswordInput;
