
"use client"

import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

interface Transaction {
  id: string
  title: string
  date: string
  amount: string
  match?: string
  location?: string
  icon: string
  iconColor: string
}

export default function WalletScreen() {
  const router = useRouter()

  const transactions: Transaction[] = [
    {
      id: "1",
      title: "Security gig",
      date: "Nov 17",
      amount: "250.00 dh",
      match: "Morocco vs Spain",
      icon: "shield-checkmark",
      iconColor: "#4B7BEC",
    },
    {
      id: "2",
      title: "Queue management gig",
      date: "Nov 16",
      amount: "110.00 dh",
      match: "Football Game",
      icon: "people",
      iconColor: "#FF9F43",
    },
    {
      id: "3",
      title: "Security gig",
      date: "Nov 14",
      amount: "150.00 dh",
      match: "Brazil vs Croatia",
      icon: "shield-checkmark",
      iconColor: "#4B7BEC",
    },
    {
      id: "4",
      title: "water team gig",
      date: "Nov 13",
      amount: "80.00dh",
      location: "Stationary",
      icon: "water",
      iconColor: "#45AAF2",
    },
    {
      id: "5",
      title: "water team gig",
      date: "Nov 12",
      amount: "80.00dh",
      location: "Stationary",
      icon: "water",
      iconColor: "#45AAF2",
    },
  ]

  const renderTransaction = ({ item }: { item: Transaction }) => (
    <View style={styles.transactionItem}>
      <View style={[styles.iconContainer, { backgroundColor: item.iconColor }]}>
        <Ionicons name={item.icon as any} size={20} color="white" />
      </View>
      <View style={styles.transactionInfo}>
        <Text style={styles.transactionTitle}>{item.title}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
        {item.match && <Text style={styles.transactionMatch}>{item.match}</Text>}
        {item.location && <Text style={styles.transactionLocation}>{item.location}</Text>}
      </View>
      <Text style={styles.transactionAmount}>{item.amount}</Text>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Wallet</Text>
      </View>

      <View style={styles.balanceSection}>
        <Text style={styles.balanceLabel}>Your Balance</Text>
        <Text style={styles.balanceAmount}>670.00 dh</Text>

        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={() => router.push("/wallet-points")}>
            <View style={[styles.actionIcon, { backgroundColor: "#2196F3" }]}>
              <Ionicons name="trophy" size={24} color="white" />
            </View>
            <Text style={styles.actionText}>Points</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={() => router.push("/wallet-leaderboard")}>
            <View style={[styles.actionIcon, { backgroundColor: "#FF5722" }]}>
              <Ionicons name="people" size={24} color="white" />
            </View>
            <Text style={styles.actionText}>leaderboard</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={() => router.push("/wallet-more")}>
            <View style={[styles.actionIcon, { backgroundColor: "#4CAF50" }]}>
              <Ionicons name="grid" size={24} color="white" />
            </View>
            <Text style={styles.actionText}>More</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.transactionsContainer}>
        <Text style={styles.sectionTitle}>History</Text>
        <FlatList
          data={transactions}
          renderItem={renderTransaction}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.transactionsList}
        />
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
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  balanceSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  balanceLabel: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 10,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  actionButton: {
    alignItems: "center",
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  actionText: {
    fontSize: 12,
    color: "#666",
  },
  transactionsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  transactionsList: {
    paddingBottom: 20,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  transactionDate: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  transactionMatch: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  transactionLocation: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
})
