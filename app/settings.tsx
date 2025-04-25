"use client"

import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

interface SettingItem {
  id: string
  title: string
  value?: string
  hasChevron?: boolean
}

export default function SettingsDetailScreen() {
  const router = useRouter()

  const personalSettings: SettingItem[] = [
    { id: "profile", title: "Profile", hasChevron: true },
    { id: "shipping", title: "Shipping Address", hasChevron: true },
    { id: "payment", title: "Payment methods", hasChevron: true },
  ]

  const shopSettings: SettingItem[] = [
    { id: "country", title: "Country", value: "Vietnam", hasChevron: true },
    { id: "currency", title: "Currency", value: "$ USD", hasChevron: true },
    { id: "sizes", title: "Sizes", value: "UK", hasChevron: true },
    { id: "terms", title: "Terms and Conditions", hasChevron: true },
  ]

  const renderSettingItem = (item: SettingItem) => (
      <TouchableOpacity key={item.id} style={styles.settingItem}>
        <Text style={styles.settingTitle}>{item.title}</Text>
        <View style={styles.settingRight}>
          {item.value && <Text style={styles.settingValue}>{item.value}</Text>}
          {item.hasChevron && <Ionicons name="chevron-forward" size={20} color="#999" />}
        </View>
      </TouchableOpacity>
  )

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>

        <ScrollView style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal</Text>
            {personalSettings.map(renderSettingItem)}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Shop</Text>
            {shopSettings.map(renderSettingItem)}
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
    borderBottomColor: "#F0F0F0",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  settingTitle: {
    fontSize: 16,
  },
  settingRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingValue: {
    fontSize: 16,
    color: "#999",
    marginRight: 10,
  },
})
