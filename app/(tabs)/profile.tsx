"use client"

import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

export default function ProfileScreen() {
  const router = useRouter()

  const menuItems = [
    {
      id: "personal-info",
      title: "Personal Info",
      icon: "person-outline",
      color: "#FF9F43",
      hasNotification: true,
      route: "/personal-info",
    },
    {
      id: "addresses",
      title: "Addresses",
      icon: "location-outline",
      color: "#4B7BEC",
      hasNotification: true,
      route: "/addresses",
    },
    {
      id: "my-skills",
      title: "My Skills",
      icon: "briefcase-outline",
      color: "#45AAF2",
      hasNotification: true,
      route: "../my-skills",
    },
    {
      id: "favourite",
      title: "Favourite",
      icon: "heart-outline",
      color: "#EC3B83",
      hasNotification: false,
      route: "/favourites",
    },
    {
      id: "history",
      title: "History",
      icon: "time-outline",
      color: "#FF6B6B",
      hasNotification: false,
      route: "../history-list",
    },
    {
      id: "wallet",
      title: "Wallet",
      icon: "wallet-outline",
      color: "#2BCBBA",
      hasNotification: false,
      route: "../wallet",
    },
    {
      id: "faqs",
      title: "FAQs",
      icon: "help-circle-outline",
      color: "#FF9F43",
      hasNotification: false,
      route: "/faqs",
    },
    {
      id: "user-reviews",
      title: "User Reviews",
      icon: "star-outline",
      color: "#45AAF2",
      hasNotification: false,
      route: "/reviews",
    },
    {
      id: "settings",
      title: "Settings",
      icon: "settings-outline",
      color: "#A55EEA",
      hasNotification: false,
      route: "/settings",
    },
    {
      id: "logout",
      title: "Log Out",
      icon: "log-out-outline",
      color: "#FF6B6B",
      hasNotification: false,
      route: "/sign-in",
    },
  ]

  const renderMenuItem = (item: any) => (
      <TouchableOpacity key={item.id} style={styles.menuItem} onPress={() => router.push(item.route)}>
        <View style={styles.menuItemLeft}>
          <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
            <Ionicons name={item.icon} size={20} color={item.color} />
          </View>
          <Text style={styles.menuItemText}>{item.title}</Text>
        </View>
        <View style={styles.menuItemRight}>
          {item.hasNotification && <View style={styles.notificationDot} />}
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </View>
      </TouchableOpacity>
  )

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <TouchableOpacity style={styles.settingsButton} onPress={() => router.push("../settings")}>
              <Ionicons name="settings-outline" size={24} color="#333" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={[styles.content, { paddingBottom: 180 }]}>
          <View style={styles.profileSection}>
            <View style={styles.profileImageContainer}>
              <Ionicons name="person" size={40} color="#333" />
            </View>
            <Text style={styles.profileName}>Tamazga Yassine</Text>
            <Text style={styles.profileRole}>Student</Text>
          </View>

          <View style={styles.menuContainer}>
            <View style={styles.menuGroup}>{menuItems.slice(0, 6).map(renderMenuItem)}</View>

            <View style={styles.menuGroup}>{menuItems.slice(6, 9).map(renderMenuItem)}</View>

            <View style={styles.menuGroup}>{menuItems.slice(9).map(renderMenuItem)}</View>
          </View>
        </ScrollView>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  settingsButton: {
    padding: 5,
  },
  content: {
    flex: 1,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  profileRole: {
    fontSize: 14,
    color: "#666",
  },
  menuContainer: {
    paddingHorizontal: 20,
  },
  menuGroup: {
    backgroundColor: "#FFF8E1",
    borderRadius: 12,
    marginBottom: 15,
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  menuItemText: {
    fontSize: 16,
  },
  menuItemRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF5722",
    marginRight: 10,
  },
})
