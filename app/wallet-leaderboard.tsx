"use client"

import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

interface LeaderboardUser {
  id: string
  name: string
  points: number
  avatar: string
  rank: number
  isCurrentUser: boolean
}

export default function WalletLeaderboardScreen() {
  const router = useRouter()

  const currentMonth = "November 2023"
  const daysLeft = 13
  const prizeAmount = "500.00 dh"

  const leaderboardUsers: LeaderboardUser[] = [
    {
      id: "1",
      name: "Ahmed Khalid",
      points: 2450,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rank: 1,
      isCurrentUser: false,
    },
    {
      id: "2",
      name: "Tamazga Yassine",
      points: 1850,
      avatar: "https://randomuser.me/api/portraits/men/43.jpg",
      rank: 2,
      isCurrentUser: true,
    },
    {
      id: "3",
      name: "Fatima Zahra",
      points: 1720,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rank: 3,
      isCurrentUser: false,
    },
    {
      id: "4",
      name: "Mohammed Ali",
      points: 1680,
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      rank: 4,
      isCurrentUser: false,
    },
    {
      id: "5",
      name: "Layla Bensouda",
      points: 1540,
      avatar: "https://randomuser.me/api/portraits/women/67.jpg",
      rank: 5,
      isCurrentUser: false,
    },
    {
      id: "6",
      name: "Karim Idrissi",
      points: 1490,
      avatar: "https://randomuser.me/api/portraits/men/91.jpg",
      rank: 6,
      isCurrentUser: false,
    },
    {
      id: "7",
      name: "Nadia Tazi",
      points: 1350,
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      rank: 7,
      isCurrentUser: false,
    },
    {
      id: "8",
      name: "Omar Benjelloun",
      points: 1290,
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      rank: 8,
      isCurrentUser: false,
    },
    {
      id: "9",
      name: "Samira Alaoui",
      points: 1180,
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      rank: 9,
      isCurrentUser: false,
    },
    {
      id: "10",
      name: "Youssef Berrada",
      points: 1050,
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      rank: 10,
      isCurrentUser: false,
    },
  ]

  const renderLeaderboardItem = ({ item, index }: { item: LeaderboardUser; index: number }) => {
    const isTopRank = item.rank === 1

    if (isTopRank) {
      return (
        <View style={styles.topRankContainer}>
          <View style={styles.topRankContent}>
            <View style={styles.crownIconContainer}>
              <Ionicons name="trophy" size={24} color="#FFC107" />
            </View>
            <Image source={{ uri: item.avatar }} style={styles.topRankAvatar} />
            <Text style={styles.topRankName}>{item.name}</Text>
            <Text style={styles.topRankPoints}>{item.points} points</Text>
            <View style={styles.prizeContainer}>
              <Text style={styles.prizeLabel}>Prize</Text>
              <Text style={styles.prizeAmount}>{prizeAmount}</Text>
            </View>
          </View>
        </View>
      )
    }

    return (
      <View style={[styles.rankItem, item.isCurrentUser && styles.currentUserRankItem]}>
        <Text style={[styles.rankNumber, item.isCurrentUser && styles.currentUserText]}>{item.rank}</Text>
        <Image source={{ uri: item.avatar }} style={styles.rankAvatar} />
        <View style={styles.rankInfo}>
          <Text style={[styles.rankName, item.isCurrentUser && styles.currentUserText]}>{item.name}</Text>
          {item.isCurrentUser && <Text style={styles.currentUserLabel}>You</Text>}
        </View>
        <Text style={[styles.rankPoints, item.isCurrentUser && styles.currentUserText]}>{item.points}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Leaderboard</Text>
      </View>

      <View style={styles.monthContainer}>
        <Text style={styles.monthText}>{currentMonth}</Text>
        <Text style={styles.resetText}>{daysLeft} days until reset</Text>
      </View>

      <FlatList
        data={leaderboardUsers}
        renderItem={renderLeaderboardItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.leaderboardList}
        ListFooterComponent={
          <View style={styles.rulesContainer}>
            <Text style={styles.rulesTitle}>Leaderboard Rules</Text>
            <Text style={styles.rulesText}>• The leaderboard resets on the 1st of each month</Text>
            <Text style={styles.rulesText}>• The top performer wins a {prizeAmount} bonus</Text>
            <Text style={styles.rulesText}>
              • Points are earned by completing tasks, working hours, and receiving bonuses
            </Text>
            <Text style={styles.rulesText}>• All participants must have completed at least 5 tasks to qualify</Text>
          </View>
        }
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
  monthContainer: {
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  monthText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  resetText: {
    fontSize: 14,
    color: "#FF5722",
    marginTop: 5,
  },
  leaderboardList: {
    padding: 20,
  },
  topRankContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  topRankContent: {
    alignItems: "center",
    backgroundColor: "#FFF8E1",
    borderRadius: 12,
    padding: 20,
    width: "100%",
  },
  crownIconContainer: {
    position: "absolute",
    top: -15,
    backgroundColor: "#FFF",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  topRankAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#FFC107",
    marginBottom: 10,
  },
  topRankName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  topRankPoints: {
    fontSize: 16,
    color: "#FF5722",
    fontWeight: "bold",
    marginBottom: 15,
  },
  prizeContainer: {
    backgroundColor: "#FFC10720",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: "center",
  },
  prizeLabel: {
    fontSize: 12,
    color: "#FFC107",
    fontWeight: "bold",
  },
  prizeAmount: {
    fontSize: 16,
    color: "#FFC107",
    fontWeight: "bold",
  },
  rankItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  currentUserRankItem: {
    backgroundColor: "#FF572210",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  rankNumber: {
    width: 30,
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
  },
  rankAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  rankInfo: {
    flex: 1,
  },
  rankName: {
    fontSize: 16,
    fontWeight: "500",
  },
  currentUserLabel: {
    fontSize: 12,
    color: "#FF5722",
    fontWeight: "bold",
  },
  rankPoints: {
    fontSize: 16,
    fontWeight: "bold",
  },
  currentUserText: {
    color: "#FF5722",
  },
  rulesContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
  },
  rulesTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  rulesText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
})
