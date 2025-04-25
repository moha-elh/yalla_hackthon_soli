"use client"

import { useState } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"

interface Task {
  id: string
  title: string
  tags: string[]
}

export default function TaskListScreen() {
  const [searchQuery, setSearchQuery] = useState("")
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Security",
      tags: ["route-16", "Ryuk_SQL"],
    },
  ])
  const [selectedTag, setSelectedTag] = useState<string | null>("security")

  const filteredTasks = tasks.filter((task) => {
    if (selectedTag && selectedTag.toLowerCase() !== "security") {
      return task.tags.some((tag) => tag.toLowerCase().includes(selectedTag.toLowerCase()))
    }
    return true
  })

  const renderTaskItem = ({ item }: { item: Task }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskTitle}>{item.title}</Text>
      <View style={styles.tagsContainer}>
        {item.tags.map((tag, index) => (
          <View key={index} style={[styles.tagChip, { backgroundColor: index === 0 ? "#FF69B4" : "#FF1493" }]}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Task List</Text>
        <TouchableOpacity style={styles.tagFilter}>
          <Text style={styles.tagFilterText}>security</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="search"
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Post</Text>

        <FlatList
          data={filteredTasks}
          renderItem={renderTaskItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.taskList}
        />
      </View>

      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="document-text-outline" size={24} color="#666" />
          <Text style={styles.navText}>Tasks</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="notifications-outline" size={24} color="#666" />
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.fabButton}>
          <Ionicons name="add" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="folder-outline" size={24} color="#666" />
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#666" />
          <Text style={styles.navText}>Profile</Text>
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
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tagFilter: {
    backgroundColor: "#FF5722",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  tagFilterText: {
    color: "white",
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    marginHorizontal: 20,
    marginVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: "#999",
    marginBottom: 10,
  },
  taskList: {
    paddingBottom: 20,
  },
  taskItem: {
    backgroundColor: "#FFF8E1",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tagChip: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 5,
  },
  tagText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    paddingVertical: 8,
    backgroundColor: "white",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
  },
  navText: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  fabButton: {
    backgroundColor: "#FF5722",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
})
