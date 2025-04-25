"use client"

import { useState } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

interface Task {
  id: string
  type: string
  title: string
  time?: string
  price?: string
  distance?: string
  status?: string
  match?: string
  amount?: string
  date?: string
  image?: string
}

export default function TaskListScreen() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const tasks: Task[] = [
    {
      id: "1",
      type: "security",
      title: "Parking Security",
      time: "12:00-15:00",
      price: "$50/hr",
      distance: "850 meter away",
      date: "20/10/2020",
      image: "https://cdn-icons-png.flaticon.com/512/2554/2554966.png",
    },
    {
      id: "2",
      type: "security",
      title: "Stadium Security",
      time: "16:00-19:00",
      price: "180/hr",
      distance: "450 meter away",
      date: "20/10/2020",
      image: "https://cdn-icons-png.flaticon.com/512/2554/2554966.png",
    },
    {
      id: "3",
      type: "translator",
      title: "Translator",
      time: "11:00-13:00",
      price: "$90/hr",
      distance: "1000 meter away",
      date: "20/10/2020",
      image: "https://cdn-icons-png.flaticon.com/512/3898/3898082.png",
    },
    {
      id: "4",
      type: "security",
      title: "Stadium Security",
      time: "10:00-18:00",
      price: "150/hr",
      distance: "650 meter away",
      date: "20/10/2020",
      image: "https://cdn-icons-png.flaticon.com/512/2554/2554966.png",
    },
    {
      id: "5",
      type: "security",
      title: "Stadium Security",
      time: "10:00-18:00",
      price: "150/hr",
      distance: "680 meter away",
      date: "20/10/2020",
      image: "https://cdn-icons-png.flaticon.com/512/2554/2554966.png",
    },
    {
      id: "6",
      type: "guide",
      title: "Travel guide",
      time: "10:00-16:00",
      price: "$200/hr",
      distance: "300 meter away",
      date: "20/10/2020",
      image: "https://cdn-icons-png.flaticon.com/512/2554/2554966.png",
    },
  ]

  const categories = [
    { id: "all", name: "All" },
    { id: "guide", name: "guide" },
    { id: "translator", name: "Translator" },
    { id: "security", name: "Security" },
    { id: "other", name: "Other" },
  ]

  const filteredTasks = tasks.filter((task) => {
    if (selectedCategory !== "all" && task.type !== selectedCategory) {
      return false
    }

    if (searchQuery) {
      return task.title.toLowerCase().includes(searchQuery.toLowerCase())
    }

    return true
  })

  const renderTaskItem = ({ item }: { item: Task }) => (
      <TouchableOpacity style={styles.taskItem} onPress={() => router.push(`./task/${item.id}`)}>
        <View style={styles.taskContent}>
          <View style={styles.taskInfo}>
            <Text style={styles.taskTitle}>{item.title}</Text>

            <View style={styles.taskDetail}>
              <Text style={styles.taskLabel}>time</Text>
              <Text style={styles.taskValue}>{item.time}</Text>
            </View>

            <View style={styles.taskDetail}>
              <Text style={styles.taskLabel}>price</Text>
              <Text style={styles.taskValue}>{item.price}</Text>
            </View>

            <View style={styles.taskDetail}>
              <Text style={styles.taskLabel}>distance</Text>
              <Text style={styles.taskValue}>{item.distance}</Text>
            </View>
          </View>

          <View style={styles.taskImageContainer}>
            <Image source={{ uri: item.image }} style={styles.taskImage} resizeMode="contain" />
          </View>
        </View>

        <View style={styles.taskDate}>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
      </TouchableOpacity>
  )

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Tasks Lists</Text>
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
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </View>

        <View style={styles.categoriesContainer}>
          <FlatList
              data={categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                  <TouchableOpacity
                      style={[styles.categoryButton, selectedCategory === item.id && styles.categoryButtonActive]}
                      onPress={() => setSelectedCategory(item.id)}
                  >
                    <Text
                        style={[styles.categoryButtonText, selectedCategory === item.id && styles.categoryButtonTextActive]}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
              )}
              contentContainerStyle={styles.categoriesList}
          />
        </View>

        <FlatList
            data={filteredTasks}
            renderItem={renderTaskItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.taskList}
        />
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
  categoriesContainer: {
    marginBottom: 10,
  },
  categoriesList: {
    paddingHorizontal: 20,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: "#F0F0F0",
  },
  categoryButtonActive: {
    backgroundColor: "#FF5722",
  },
  categoryButtonText: {
    color: "#666",
  },
  categoryButtonTextActive: {
    color: "white",
    fontWeight: "bold",
  },
  taskList: {
    padding: 20,
    paddingTop: 0,
  },
  taskItem: {
    backgroundColor: "#FFF8E1",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  taskContent: {
    flexDirection: "row",
  },
  taskInfo: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  taskDetail: {
    flexDirection: "row",
    marginBottom: 4,
  },
  taskLabel: {
    width: 60,
    fontSize: 12,
    color: "#666",
  },
  taskValue: {
    fontSize: 12,
    fontWeight: "500",
  },
  taskImageContainer: {
    marginTop:20,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  taskImage: {
    width: 60,
    height: 60,
  },
  taskDate: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  dateText: {
    fontSize: 10,
    color: "#999",
  },
})
