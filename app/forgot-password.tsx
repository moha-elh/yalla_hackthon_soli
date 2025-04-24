"use client"

import { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native"
import { useRouter } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"

export default function ForgotPasswordScreen() {
  const router = useRouter()
  const [mobileNumber, setMobileNumber] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>

      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logoBackground}>
            <Text style={styles.logoText}>yalla</Text>
          </View>
        </View>

        <Text style={styles.title}>Forget Password</Text>
        <Text style={styles.subtitle}>
          Enter the email address or phone number linked to your account. We'll send you a link to reset your password
          and help you regain access in just a few steps.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.continueButton} onPress={() => router.push("/enter-otp")}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backButton: {
    padding: 15,
  },
  progressBar: {
    height: 3,
    backgroundColor: "#E0E0E0",
    width: "100%",
  },
  progressFill: {
    height: "100%",
    width: "33%",
    backgroundColor: "#FF5722",
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  logoContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  logoBackground: {
    backgroundColor: "#FFF8E1",
    width: 80,
    height: 80,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: "#FF5722",
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF5722",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#FFF8E1",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    marginBottom: 30,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: "#FF5722",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
})
