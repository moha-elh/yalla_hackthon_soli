"use client"

import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native"
import { useRouter } from "expo-router"
import { LinearGradient } from "expo-linear-gradient"

export default function WelcomeScreen() {
  const router = useRouter()

  return (
    <ImageBackground
      source={{
        uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xjpziLywWzA0Tvjf0uZfajiituXSl4.png",
      }}
      style={styles.backgroundImage}
    >
      <LinearGradient colors={["transparent", "rgba(0,0,0,0.7)"]} style={styles.gradient}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              Fall in Love with{"\n"}Coffee in Blissful{"\n"}Delight!
            </Text>
            <Text style={styles.subtitle}>
              Welcome to our cozy coffee corner,{"\n"}where every cup is delightful for you.
            </Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => router.push("/sign-in")}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  gradient: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 50,
  },
  textContainer: {
    marginBottom: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FF5722",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: "90%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
})
