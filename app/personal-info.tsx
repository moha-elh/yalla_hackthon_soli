"use client"

import { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

export default function PersonalInfoScreen() {
  const router = useRouter()
  const [name, setName] = useState("Tamazga Yassine")
  const [title, setTitle] = useState("El Haj")
  const [joined, setJoined] = useState("Joined")
  const [city, setCity] = useState("Tangier")
  const [postalCode, setPostalCode] = useState("22323")
  const [email, setEmail] = useState("SoliHackathon2023@gmail.com")
  const [phone, setPhone] = useState("0599765434")
  const [description, setDescription] = useState(
    "e.g. I worked as a security agent at G4S Morocco, handling access control and incidents during events. I'm trained to manage sensitive situations calmly and professionally.",
  )

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <View style={styles.profileImageContainer}>
              <Ionicons name="person" size={40} color="#FFF" />
            </View>
            <Text style={styles.profileName}>{name}</Text>
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.formRow}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              value={title}
              onChangeText={setTitle}
              placeholder="Title"
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              value={joined}
              onChangeText={setJoined}
              placeholder="Joined"
            />
          </View>

          <View style={styles.formRow}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              value={city}
              onChangeText={setCity}
              placeholder="City"
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              value={postalCode}
              onChangeText={setPostalCode}
              placeholder="Postal Code"
              keyboardType="numeric"
            />
          </View>

          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Phone Number"
            keyboardType="phone-pad"
          />

          <Text style={styles.uploadLabel}>Upload front side of your ID card</Text>
          <TouchableOpacity style={styles.uploadBox}>
            <Text style={styles.uploadText}>upload a file</Text>
            <Ionicons name="cloud-download-outline" size={24} color="#666" />
          </TouchableOpacity>

          <Text style={styles.uploadLabel}>Upload back side of your ID card</Text>
          <TouchableOpacity style={styles.uploadBox}>
            <Text style={styles.uploadText}>upload a file</Text>
            <Ionicons name="cloud-download-outline" size={24} color="#666" />
          </TouchableOpacity>

          <Text style={styles.descriptionLabel}>Description</Text>
          <TextInput
            style={styles.descriptionInput}
            value={description}
            onChangeText={setDescription}
            placeholder="Describe your experience..."
            multiline
            numberOfLines={6}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitButton} onPress={() => router.back()}>
              <Text style={styles.submitButtonText}>Submit</Text>
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
  content: {
    flex: 1,
  },
  header: {
    backgroundColor: "#FF5722",
    paddingVertical: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileSection: {
    alignItems: "center",
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  formContainer: {
    padding: 20,
  },
  formRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#FFF",
  },
  halfInput: {
    width: "48%",
  },
  uploadLabel: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    marginBottom: 20,
  },
  uploadText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  descriptionLabel: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    height: 120,
    textAlignVertical: "top",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
    marginRight: 10,
  },
  cancelButtonText: {
    fontSize: 16,
    color: "#666",
  },
  submitButton: {
    flex: 1,
    backgroundColor: "#FF5722",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 8,
  },
  submitButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
})
