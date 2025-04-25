
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
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#333" />
                    <Text style={styles.headerTitle}>History</Text>
                </TouchableOpacity>
            </View>



            <View style={styles.transactionsContainer}>
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
        flexDirection: "row", // Ensures back arrow and title are in a row
        alignItems: "center", // Aligns the back arrow and title vertically
    },
    backButton: {
        marginRight: 10, // Adds space between the back arrow and title
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
