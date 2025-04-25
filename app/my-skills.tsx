"use client"

import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

export default function MySkillsScreen() {
  const router = useRouter()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={styles.settingsButton} onPress={() => router.push("/settings")}>
          <Ionicons name="settings-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <Image source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }} style={styles.profileImage} />
        <Text style={styles.profileName}>Tamazga Yassine</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.skillsContainer}>
          <View style={styles.warningContainer}>
            <Ionicons name="alert-circle" size={24} color="#FF5722" />
          </View>

          <View style={styles.skillSection}>
            <Text style={styles.skillSectionTitle}>Normal Skills</Text>
            <Text style={styles.skillDescription}>Tasks anyone can apply for, no special certification required.</Text>
            <Text style={styles.skillDescription}>
              Great for general roles like <Text style={styles.highlightedText}>welcoming guests</Text>,{" "}
              <Text style={styles.highlightedText}>guiding fans</Text>, or{" "}
              <Text style={styles.highlightedText}>helping with logistics</Text>.
            </Text>
          </View>

          <View style={styles.skillSection}>
            <Text style={styles.skillSectionTitle}>Sensitive Skills</Text>
            <Text style={styles.skillDescription}>Tasks that need verified expertise or training,</Text>
            <Text style={styles.skillDescription}>
              like <Text style={styles.highlightedText}>security</Text>,{" "}
              <Text style={styles.highlightedText}>medical aid</Text>, or{" "}
              <Text style={styles.highlightedText}>technical operations</Text>.
            </Text>
            <Text style={styles.skillDescription}>You'll need to upload a certificate to verify your skills.</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.skipButton} onPress={() => router.back()}>
              <Text style={styles.skipButtonText}>skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sensitiveButton} onPress={() => router.push("/add-experience")}>
              <Text style={styles.sensitiveButtonText}>Sensitive Skills</Text>
            </TouchableOpacity>
          </View>
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
  header: {
    backgroundColor: "#FF5722",
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  settingsButton: {
    padding: 5,
  },
  profileSection: {
    backgroundColor: "#FF5722",
    paddingBottom: 30,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "white",
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3F51B5",
    marginTop: 10,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  skillsContainer: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  warningContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  skillSection: {
    marginBottom: 20,
  },
  skillSectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  skillDescription: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  highlightedText: {
    color: "#FF5722",
    fontWeight: "500",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  skipButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  skipButtonText: {
    fontSize: 16,
    color: "#666",
  },
  sensitiveButton: {
    backgroundColor: "#FF5722",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  sensitiveButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
})
