"use client"

import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useRouter } from "expo-router"

interface Notification {
  id: string
  title: string
  description: string
  avatar: {
    type: "text" | "image"
    content: string
  }
  count: number
  color: string
}

export default function NotificationsScreen() {
  const router = useRouter()

  const notifications: Notification[] = [
    {
      id: "1",
      title: "Technical Service",
      description: "Description: Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do",
      avatar: {
        type: "text",
        content: "C",
      },
      count: 2,
      color: "#45AAF2",
    },
    {
      id: "2",
      title: "Amina Mogadore",
      description: "Description: Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do",
      avatar: {
        type: "image",
        content: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      count: 1,
      color: "#FF9F43",
    },
    {
      id: "3",
      title: "Responsable Ali hassane",
      description: "Description: Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do",
      avatar: {
        type: "text",
        content: "A",
      },
      count: 1,
      color: "#FF9F43",
    },
    {
      id: "4",
      title: "Security Group",
      description: "Description: Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do",
      avatar: {
        type: "text",
        content: "S",
      },
      count: 14,
      color: "#45AAF2",
    },
    {
      id: "5",
      title: "Steward Group",
      description: "Description: Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do",
      avatar: {
        type: "text",
        content: "ST",
      },
      count: 100,
      color: "#FF9F43",
    },
    {
      id: "6",
      title: "Responsable Hassan Yansi",
      description: "Description: Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do",
      avatar: {
        type: "text",
        content: "ST",
      },
      count: 3,
      color: "#FF5722",
    },
  ]

  const renderNotificationItem = ({ item }: { item: Notification }) => (
      <TouchableOpacity style={styles.notificationItem} onPress={() => router.push("/chat")}>
        {item.avatar.type === "text" ? (
            <View style={[styles.avatarContainer, { backgroundColor: `${item.color}30`}]}>
              <Text style={[styles.avatarText, { color: item.color }]}>{item.avatar.content}</Text>
            </View>
        ) : (
            <Image source={{ uri: item.avatar.content }} style={styles.avatarImage} />
        )}

        <View style={styles.notificationContent}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          <Text style={styles.notificationDescription} numberOfLines={2}>
            {item.description}
          </Text>
        </View>

        <View style={[styles.countBadge, { backgroundColor: item.color }]}>
          <Text style={styles.countText}>{item.count}</Text>
        </View>
      </TouchableOpacity>
  )

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Notification</Text>
        </View>

        <FlatList
            data={notifications}
            renderItem={renderNotificationItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.notificationsList}
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
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  notificationsList: {
    padding: 20,
    paddingTop: 0,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF8E1",
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  notificationDescription: {
    fontSize: 14,
    color: "#666",
  },
  countBadge: {
    minWidth: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  countText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
})
