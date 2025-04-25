"use client"

import { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

interface Skill {
  id: string
  name: string
}

export default function AddSkillsScreen() {
  const router = useRouter()
  const [selectedSkill, setSelectedSkill] = useState<string>("security")

  const skills: Skill[] = [
    { id: "security", name: "Security" },
    { id: "guide", name: "Guide" },
    { id: "translator", name: "Translator" },
    { id: "driver", name: "Driver" },
    { id: "host", name: "Host" },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Skills</Text>
        <TouchableOpacity>
          <Ionicons name="trash-outline" size={24} color="#FF5722" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Task</Text>

        <ScrollView style={styles.skillsList}>
          {skills.map((skill) => (
            <TouchableOpacity
              key={skill.id}
              style={[styles.skillItem, selectedSkill === skill.id && styles.selectedSkill]}
              onPress={() => setSelectedSkill(skill.id)}
            >
              <Text style={[styles.skillText, selectedSkill === skill.id && styles.selectedSkillText]}>
                {skill.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.uploadSection}>
          <Text style={styles.uploadTitle}>upload experience files</Text>

          <TouchableOpacity style={styles.uploadButton}>
            <Ionicons name="cloud-download-outline" size={24} color="#666" />
            <Text style={styles.uploadButtonText}>upload a file</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Skills</Text>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
  },
  skillsList: {
    maxHeight: 200,
  },
  skillItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedSkill: {
    backgroundColor: "#F0F0FF",
  },
  skillText: {
    fontSize: 16,
  },
  selectedSkillText: {
    fontWeight: "bold",
    color: "#0000FF",
  },
  uploadSection: {
    marginTop: 30,
    marginBottom: 30,
  },
  uploadTitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 15,
  },
  uploadButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    borderStyle: "dashed",
  },
  uploadButtonText: {
    fontSize: 16,
    color: "#666",
    marginLeft: 10,
  },
  saveButton: {
    backgroundColor: "#FF5722",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
})
