import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../navigation/types";
import styles from "./styles";

type Props = NativeStackScreenProps<AuthStackParamList, "OTP">;

const OTPScreen = ({ route, navigation }: Props) => {
  const { email } = route.params;
  const [otp, setOtp] = useState("");

  const handleVerifyOTP = () => {
    if (!otp) {
      Alert.alert("Error", "Enter OTP");
      return;
    }

    navigation.navigate("ResetPassword", { email });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Enter OTP</Text>
        <Text style={{ marginBottom: 15 }}>{email}</Text>

        <TextInput
          placeholder="Enter OTP"
          keyboardType="numeric"
          style={styles.input}
          value={otp}
          onChangeText={setOtp}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleVerifyOTP}>
          <Text style={styles.loginText}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTPScreen;