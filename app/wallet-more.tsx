"use client"

import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

export default function WalletMoreScreen() {
  const router = useRouter()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rewards System</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.introSection}>
          <View style={styles.iconContainer}>
            <Ionicons name="trophy" size={40} color="#FFC107" />
          </View>
          <Text style={styles.introTitle}>How Our Rewards System Works</Text>
          <Text style={styles.introText}>
            Our rewards system is designed to recognize your hard work and dedication. The more you contribute, the more
            you earn!
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Points System</Text>
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <View style={[styles.infoIcon, { backgroundColor: "#4B7BEC20" }]}>
                <Ionicons name="checkmark-circle" size={24} color="#4B7BEC" />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.infoTitle}>Task Completion</Text>
                <Text style={styles.infoDescription}>
                  Earn 50-200 points for each task you complete, depending on complexity
                </Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <View style={[styles.infoIcon, { backgroundColor: "#45AAF220" }]}>
                <Ionicons name="time" size={24} color="#45AAF2" />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.infoTitle}>Time Worked</Text>
                <Text style={styles.infoDescription}>Earn 10 points for each hour you work on tasks</Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <View style={[styles.infoIcon, { backgroundColor: "#FFC10720" }]}>
                <Ionicons name="star" size={24} color="#FFC107" />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.infoTitle}>Performance Bonuses</Text>
                <Text style={styles.infoDescription}>
                  Earn bonus points for early arrival, good ratings, and exceptional performance
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Levels & Benefits</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.levelsContainer}>
            <View style={styles.levelCard}>
              <View style={[styles.levelIcon, { backgroundColor: "#FF572220" }]}>
                <Text style={[styles.levelIconText, { color: "#FF5722" }]}>1</Text>
              </View>
              <Text style={styles.levelTitle}>Beginner</Text>
              <Text style={styles.levelPoints}>0-500 points</Text>
              <View style={styles.benefitItem}>
                <Ionicons name="checkmark" size={16} color="#4CAF50" />
                <Text style={styles.benefitText}>Access to basic tasks</Text>
              </View>
            </View>

            <View style={styles.levelCard}>
              <View style={[styles.levelIcon, { backgroundColor: "#FF980020" }]}>
                <Text style={[styles.levelIconText, { color: "#FF9800" }]}>2</Text>
              </View>
              <Text style={styles.levelTitle}>Intermediate</Text>
              <Text style={styles.levelPoints}>501-1000 points</Text>
              <View style={styles.benefitItem}>
                <Ionicons name="checkmark" size={16} color="#4CAF50" />
                <Text style={styles.benefitText}>Priority task selection</Text>
              </View>
              <View style={styles.benefitItem}>
                <Ionicons name="checkmark" size={16} color="#4CAF50" />
                <Text style={styles.benefitText}>5% bonus on earnings</Text>
              </View>
            </View>

            <View style={styles.levelCard}>
              <View style={[styles.levelIcon, { backgroundColor: "#2196F320" }]}>
                <Text style={[styles.levelIconText, { color: "#2196F3" }]}>3</Text>
              </View>
              <Text style={styles.levelTitle}>Expert</Text>
              <Text style={styles.levelPoints}>1001-2000 points</Text>
              <View style={styles.benefitItem}>
                <Ionicons name="checkmark" size={16} color="#4CAF50" />
                <Text style={styles.benefitText}>Access to premium tasks</Text>
              </View>
              <View style={styles.benefitItem}>
                <Ionicons name="checkmark" size={16} color="#4CAF50" />
                <Text style={styles.benefitText}>10% bonus on earnings</Text>
              </View>
            </View>

            <View style={styles.levelCard}>
              <View style={[styles.levelIcon, { backgroundColor: "#9C27B020" }]}>
                <Text style={[styles.levelIconText, { color: "#9C27B0" }]}>4</Text>
              </View>
              <Text style={styles.levelTitle}>Master</Text>
              <Text style={styles.levelPoints}>2001+ points</Text>
              <View style={styles.benefitItem}>
                <Ionicons name="checkmark" size={16} color="#4CAF50" />
                <Text style={styles.benefitText}>VIP task access</Text>
              </View>
              <View style={styles.benefitItem}>
                <Ionicons name="checkmark" size={16} color="#4CAF50" />
                <Text style={styles.benefitText}>15% bonus on earnings</Text>
              </View>
              <View style={styles.benefitItem}>
                <Ionicons name="checkmark" size={16} color="#4CAF50" />
                <Text style={styles.benefitText}>Monthly rewards</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Monthly Leaderboard</Text>
          <View style={styles.infoCard}>
            <View style={styles.leaderboardInfo}>
              <View style={styles.leaderboardIconContainer}>
                <Ionicons name="podium" size={60} color="#FFC107" />
              </View>
              <View style={styles.leaderboardTextContainer}>
                <Text style={styles.leaderboardTitle}>Monthly Competition</Text>
                <Text style={styles.leaderboardDescription}>
                  Every month, the top performer on our leaderboard wins a special prize of 500.00 dh!
                </Text>
              </View>
            </View>
            <Text style={styles.leaderboardNote}>
              The leaderboard resets on the 1st of each month, giving everyone a fresh chance to win.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Redeeming Points</Text>
          <View style={styles.infoCard}>
            <Text style={styles.redemptionText}>
              Coming soon! In the future, you'll be able to redeem your points for various rewards including:
            </Text>
            <View style={styles.rewardsContainer}>
              <View style={styles.rewardItem}>
                <Ionicons name="cash-outline" size={24} color="#4CAF50" />
                <Text style={styles.rewardText}>Cash bonuses</Text>
              </View>
              <View style={styles.rewardItem}>
                <Ionicons name="gift-outline" size={24} color="#FF5722" />
                <Text style={styles.rewardText}>Gift cards</Text>
              </View>
              <View style={styles.rewardItem}>
                <Ionicons name="time-outline" size={24} color="#2196F3" />
                <Text style={styles.rewardText}>Paid time off</Text>
              </View>
              <View style={styles.rewardItem}>
                <Ionicons name="star-outline" size={24} color="#FFC107" />
                <Text style={styles.rewardText}>Premium benefits</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.notifyButton}>
              <Text style={styles.notifyButtonText}>Notify me when available</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tips to Maximize Points</Text>
          <View style={styles.tipCard}>
            <Ionicons name="bulb-outline" size={24} color="#FFC107" />
            <Text style={styles.tipText}>Complete tasks consistently to build up your points</Text>
          </View>
          <View style={styles.tipCard}>
            <Ionicons name="time-outline" size={24} color="#FFC107" />
            <Text style={styles.tipText}>Arrive early to tasks to earn bonus points</Text>
          </View>
          <View style={styles.tipCard}>
            <Ionicons name="star-outline" size={24} color="#FFC107" />
            <Text style={styles.tipText}>Provide excellent service to get high ratings and earn more points</Text>
          </View>
          <View style={styles.tipCard}>
            <Ionicons name="calendar-outline" size={24} color="#FFC107" />
            <Text style={styles.tipText}>Work more hours during peak periods when bonus points are offered</Text>
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
  introSection: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFF8E1",
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  introTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  introText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  infoCard: {
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    padding: 15,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 15,
  },
  infoIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  infoDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  levelsContainer: {
    marginBottom: 15,
  },
  levelCard: {
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    padding: 15,
    marginRight: 15,
    width: 180,
  },
  levelIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  levelIconText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  levelTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  levelPoints: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  benefitText: {
    fontSize: 14,
    color: "#333",
    marginLeft: 5,
  },
  leaderboardInfo: {
    flexDirection: "row",
    marginBottom: 15,
  },
  leaderboardIconContainer: {
    marginRight: 15,
  },
  leaderboardTextContainer: {
    flex: 1,
  },
  leaderboardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  leaderboardDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  leaderboardNote: {
    fontSize: 14,
    color: "#FF5722",
    fontStyle: "italic",
  },
  redemptionText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 15,
    lineHeight: 20,
  },
  rewardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
  },
  rewardItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    marginBottom: 10,
  },
  rewardText: {
    fontSize: 14,
    marginLeft: 10,
  },
  notifyButton: {
    backgroundColor: "#FF5722",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  notifyButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  tipCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF8E1",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  tipText: {
    fontSize: 14,
    color: "#333",
    marginLeft: 15,
    flex: 1,
  },
})
