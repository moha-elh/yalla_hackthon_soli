
"use client"

import { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

interface Skill {
  id: string
  name: string
}

export default function AddExperienceScreen() {
  const router = useRouter()
  const [selectedSkill, setSelectedSkill] = useState<string>("")
  const [description, setDescription] = useState(
    "I worked as a security agent at G4S Morocco, handling access control and incidents during events. I'm trained to manage sensitive situations calmly and professionally.",
  )
  const [skillType, setSkillType] = useState<"normal" | "sensitive">("normal")

  const securitySkills = [
    { id: "1", name: "1.Security" },
    { id: "2", name: "2.Equipment Monitoring" },
    { id: "3", name: "3. Translator" },
    { id: "4", name: "4. Field Access Team" },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Add experience</Text>
      </View>

      <ScrollView style={styles.content}>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Choose your skill</Text>
          <Ionicons name="chevron-down" size={20} color="#666" />
        </TouchableOpacity>

        {securitySkills.map((skill) => (
          <View key={skill.id} style={styles.skillItem}>
            <Text style={styles.skillText}>{skill.name}</Text>
          </View>
        ))}

        <View style={styles.uploadSection}>
          <Text style={styles.sectionTitle}>Upload Experience Files</Text>
          <TouchableOpacity style={styles.uploadBox}>
            <Text style={styles.uploadText}>upload a file</Text>
            <Ionicons name="cloud-download-outline" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={styles.descriptionSection}>
          <Text style={styles.sectionTitle}>Detailed Description</Text>
          <TextInput
            style={styles.descriptionInput}
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={6}
          />
        </View>

        <View style={styles.skillTypeContainer}>
          <TouchableOpacity
            style={[styles.skillTypeButton, skillType === "normal" && styles.activeSkillTypeButton]}
            onPress={() => setSkillType("normal")}
          >
            <Text style={[styles.skillTypeText, skillType === "normal" && styles.activeSkillTypeText]}>
              Normal skills
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.skillTypeButton, skillType === "sensitive" && styles.activeSkillTypeButton]}
            onPress={() => setSkillType("sensitive")}
          >
            <Text style={[styles.skillTypeText, skillType === "sensitive" && styles.activeSkillTypeText]}>
              Sensitive Skills
            </Text>
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
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 20,
  },
  dropdownText: {
    fontSize: 16,
    color: "#999",
  },
  skillItem: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 10,
  },
  skillText: {
    fontSize: 16,
  },
  uploadSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },
  uploadText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  descriptionSection: {
    marginBottom: 30,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    height: 120,
    textAlignVertical: "top",
  },
  skillTypeContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  skillTypeButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  activeSkillTypeButton: {
    backgroundColor: "#FF5722",
    borderColor: "#FF5722",
  },
  skillTypeText: {
    fontSize: 16,
    color: "#666",
  },
  activeSkillTypeText: {
    color: "white",
    fontWeight: "bold",
  },
})
