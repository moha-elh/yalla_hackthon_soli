"use client"

import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

interface PointsActivity {
  id: string
  title: string
  date: string
  points: number
  type: "task" | "bonus" | "time"
  icon: string
  iconColor: string
}

export default function WalletPointsScreen() {
  const router = useRouter()

  const totalPoints = 1250
  const pointsThisMonth = 450
  const pointsToNextLevel = 250

  const pointsActivities: PointsActivity[] = [
    {
      id: "1",
      title: "Security gig completed",
      date: "Nov 17",
      points: 150,
      type: "task",
      icon: "shield-checkmark",
      iconColor: "#4B7BEC",
    },
    {
      id: "2",
      title: "Early arrival bonus",
      date: "Nov 17",
      points: 50,
      type: "bonus",
      icon: "star",
      iconColor: "#FFC107",
    },
    {
      id: "3",
      title: "8 hours worked",
      date: "Nov 17",
      points: 80,
      type: "time",
      icon: "time",
      iconColor: "#45AAF2",
    },
    {
      id: "4",
      title: "Queue management completed",
      date: "Nov 15",
      points: 100,
      type: "task",
      icon: "people",
      iconColor: "#FF9F43",
    },
    {
      id: "5",
      title: "5-star rating received",
      date: "Nov 15",
      points: 70,
      type: "bonus",
      icon: "star",
      iconColor: "#FFC107",
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Points</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.pointsSummary}>
          <View style={styles.pointsCircle}>
            <Text style={styles.pointsValue}>{totalPoints}</Text>
            <Text style={styles.pointsLabel}>Total Points</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{pointsThisMonth}</Text>
            <Text style={styles.statLabel}>This Month</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{pointsToNextLevel}</Text>
            <Text style={styles.statLabel}>To Next Level</Text>
          </View>
        </View>

        <View style={styles.levelProgressContainer}>
          <Text style={styles.levelTitle}>Level 3: Expert</Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${(1 - pointsToNextLevel / 1000) * 100}%` }]} />
          </View>
          <View style={styles.levelLabelsContainer}>
            <Text style={styles.levelLabel}>Level 3</Text>
            <Text style={styles.levelLabel}>Level 4</Text>
          </View>
        </View>

        <View style={styles.howItWorksContainer}>
          <Text style={styles.sectionTitle}>How to Earn Points</Text>
          <View style={styles.pointsTypeContainer}>
            <View style={[styles.pointsTypeIcon, { backgroundColor: "#4B7BEC20" }]}>
              <Ionicons name="checkmark-circle" size={24} color="#4B7BEC" />
            </View>
            <View style={styles.pointsTypeContent}>
              <Text style={styles.pointsTypeTitle}>Complete Tasks</Text>
              <Text style={styles.pointsTypeDescription}>Earn 50-200 points for each completed task</Text>
            </View>
          </View>

          <View style={styles.pointsTypeContainer}>
            <View style={[styles.pointsTypeIcon, { backgroundColor: "#FFC10720" }]}>
              <Ionicons name="star" size={24} color="#FFC107" />
            </View>
            <View style={styles.pointsTypeContent}>
              <Text style={styles.pointsTypeTitle}>Get Bonuses</Text>
              <Text style={styles.pointsTypeDescription}>Early arrival, good ratings, and more</Text>
            </View>
          </View>

          <View style={styles.pointsTypeContainer}>
            <View style={[styles.pointsTypeIcon, { backgroundColor: "#45AAF220" }]}>
              <Ionicons name="time" size={24} color="#45AAF2" />
            </View>
            <View style={styles.pointsTypeContent}>
              <Text style={styles.pointsTypeTitle}>Time Worked</Text>
              <Text style={styles.pointsTypeDescription}>10 points per hour worked</Text>
            </View>
          </View>
        </View>

        <View style={styles.activityContainer}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          {pointsActivities.map((activity) => (
            <View key={activity.id} style={styles.activityItem}>
              <View style={[styles.activityIcon, { backgroundColor: `${activity.iconColor}20` }]}>
                <Ionicons name={activity.icon as any} size={20} color={activity.iconColor} />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityDate}>{activity.date}</Text>
              </View>
              <Text style={styles.activityPoints}>+{activity.points}</Text>
            </View>
          ))}
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
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
  },
  pointsSummary: {
    alignItems: "center",
    paddingVertical: 30,
  },
  pointsCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#2196F3",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  pointsValue: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
  },
  pointsLabel: {
    fontSize: 14,
    color: "white",
    opacity: 0.9,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    marginHorizontal: 20,
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    marginBottom: 20,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  statDivider: {
    width: 1,
    backgroundColor: "#E0E0E0",
  },
  levelProgressContainer: {
    marginHorizontal: 20,
    marginBottom: 30,
  },
  levelTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#2196F3",
    borderRadius: 4,
  },
  levelLabelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  levelLabel: {
    fontSize: 12,
    color: "#666",
  },
  howItWorksContainer: {
    marginHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  pointsTypeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  pointsTypeIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  pointsTypeContent: {
    flex: 1,
  },
  pointsTypeTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 2,
  },
  pointsTypeDescription: {
    fontSize: 14,
    color: "#666",
  },
  activityContainer: {
    marginHorizontal: 20,
    marginBottom: 30,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  activityDate: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  activityPoints: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4CAF50",
  },
})
