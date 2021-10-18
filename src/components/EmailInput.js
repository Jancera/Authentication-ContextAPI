import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import { Context } from "../context/authContext";

const EmailInput = ({ value, setValue }) => {
  const { state } = useContext(Context);
  return (
    <>
      <TextInput
        style={styles.textInput}
        label="Email"
        mode="flat"
        left={<TextInput.Icon name="at" size={25} color="black" />}
        value={value}
        onChangeText={(text) => setValue(text)}
        error={state.loginError}
      />
      {state.loginError ? (
        <HelperText type="error" visible={state.loginError}>
          Email must exist
        </HelperText>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 10,
  },
});

export default EmailInput;
