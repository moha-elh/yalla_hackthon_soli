"use client"

import { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView, Alert  } from "react-native"
import { useRouter } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { login, handleGoogleLogin } from "@/firebase/authFunctions";

export default function SignInScreen() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async () => {
    try {
      await login(email, password);
      router.push("/(tabs)");
    } catch (err) {
      if (err instanceof Error) {
        console.log("Login Failed", err.message);
        Alert.alert("Login Failed", err.message);
      } else {
        Alert.alert("Login Failed", "An unknown error occurred.");
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <View style={styles.logoBackground}>
            <Image
                source={require('../assets/images/yalla v2.png')}
                style={styles.logoImage}
            />
          </View>
        </View>

        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>Back in action? Yallah, let's go!</Text>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png",
              }}
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton} onPress={async () => {
            try {
              const user = await handleGoogleLogin();
              router.push("/(tabs)");
            } catch (err) {
              if (err instanceof Error) {
                console.log("Google Sign-In Failed", err.message);
                Alert.alert("Google Sign-In Failed", err.message);
              } else {
                Alert.alert("Google Sign-In Failed", "An unknown error occurred.");
              }
            }
          }}>
            <Image
                source={require('../assets/images/7123025_logo_google_g_icon.png')}
                style={styles.socialIcon}
            />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>

        </View>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or</Text>
          <View style={styles.dividerLine} />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#999"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={!showPassword ? "eye-off-outline" : "eye-outline"} size={24} color="#FF5722" />
          </TouchableOpacity>
        </View>

        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity onPress={() => router.push("/forgot-password")}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have account? </Text>
          <TouchableOpacity onPress={() => router.push("/sign-up")}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
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
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF8E1",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: "48%",
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 14,
    color: "#333",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#666",
  },
  input: {
    backgroundColor: "#FFF8E1",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFF8E1",
    borderRadius: 8,
    marginBottom: 5,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "green",
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#FF5722",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  signUpContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  signUpText: {
    color: "#666",
  },
  signUpLink: {
    color: "green",
    fontWeight: "bold",
  },
  logoImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  }
})
