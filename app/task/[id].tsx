"use client"

import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { useRouter, useLocalSearchParams } from "expo-router"
import MapView, { Marker } from "react-native-maps"

export default function TaskDetailScreen() {
  const router = useRouter()
  const { id } = useLocalSearchParams()

  // In a real app, you would fetch the task details based on the ID
  const taskTitle = "Parking Security"

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
          <Text style={styles.headerTitle}>{taskTitle}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 33.5731,
              longitude: -7.6298,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker coordinate={{ latitude: 33.5731, longitude: -7.6298 }} pinColor="#FF5722" />
          </MapView>

          <View style={styles.locationPin}>
            <Ionicons name="location" size={24} color="#FF5722" />
          </View>

          <Text style={styles.locationName}>Stade de Casablanca</Text>

          <View style={styles.userLocationPin}>
            <Ionicons name="navigate" size={24} color="#FF5722" />
          </View>
        </View>

        <View style={styles.missionCard}>
          <Text style={styles.missionTitle}>YOUR MISSION,</Text>

          <Text style={styles.missionDescription}>
            As part of the Parking Security team, your role is to ensure that all vehicles are directed safely and
            efficiently into their designated spots.
          </Text>

          <Text style={styles.responsibilitiesTitle}>You are responsible for:</Text>

          <View style={styles.responsibilityItem}>
            <Ionicons name="chevron-forward" size={16} color="#FF5722" />
            <Text style={styles.responsibilityText}>Verifying vehicle access (badges or digital passes)</Text>
          </View>

          <View style={styles.responsibilityItem}>
            <Ionicons name="chevron-forward" size={16} color="#FF5722" />
            <Text style={styles.responsibilityText}>Assisting with traffic flow and pedestrian safety</Text>
          </View>

          <View style={styles.responsibilityItem}>
            <Ionicons name="chevron-forward" size={16} color="#FF5722" />
            <Text style={styles.responsibilityText}>
              Guiding VIP or staff vehicles to reserved areas (if applicable)
            </Text>
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
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  content: {
    flex: 1,
  },
  mapContainer: {
    height: 300,
    position: "relative",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  locationPin: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -12,
    marginTop: -24,
  },
  locationName: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
  },
  userLocationPin: {
    position: "absolute",
    bottom: "20%",
    left: "50%",
    marginLeft: -12,
  },
  missionCard: {
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    margin: 20,
    padding: 20,
  },
  missionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF5722",
    marginBottom: 15,
  },
  missionDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: "#333",
    marginBottom: 20,
  },
  responsibilitiesTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  responsibilityItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  responsibilityText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#333",
    flex: 1,
    marginLeft: 5,
  },
})
