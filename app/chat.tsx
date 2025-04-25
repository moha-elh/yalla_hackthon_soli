"use client"

import { useState, useRef } from "react"
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

interface Message {
  id: string
  text: string
  sender: "user" | "support"
  timestamp: Date
}

export default function ChatScreen() {
  const router = useRouter()
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "You will get an answer for your request really soon.",
      sender: "support",
      timestamp: new Date(),
    },
    {
      id: "2",
      text: "Thank you",
      sender: "user",
      timestamp: new Date(),
    },
    {
      id: "3",
      text: "Your request have been rejected to be a security guard.",
      sender: "support",
      timestamp: new Date(),
    },
    {
      id: "4",
      text: "Reason\nYour experience is not enough to handle this job.\nYour uploads have bad quality, etc...",
      sender: "support",
      timestamp: new Date(),
    },
    {
      id: "5",
      text: "You still got only one chance so you can be verified for this job.",
      sender: "support",
      timestamp: new Date(),
    },
    {
      id: "6",
      text: "You will get an answer for your request really soon.",
      sender: "support",
      timestamp: new Date(),
    },
    {
      id: "7",
      text: "Your request have been approved to be a security guard. Go back to your tasks lists to open your the new skill section",
      sender: "support",
      timestamp: new Date(),
    },
  ])
  const flatListRef = useRef<FlatList>(null)
  const trackingNumber = "LGS-92927839374763731"

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: message,
        sender: "user",
        timestamp: new Date(),
      }
      setMessages([...messages, newMessage])
      setMessage("")

      // Simulate response
      setTimeout(() => {
        const responseMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "We've received your message. Our team will get back to you shortly.",
          sender: "support",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, responseMessage])
      }, 1000)
    }
  }

  const renderMessage = ({ item }: { item: Message }) => {
    const isUser = item.sender === "user"

    return (
      <View style={[styles.messageContainer, isUser ? styles.userMessageContainer : styles.supportMessageContainer]}>
        <View style={[styles.messageBubble, isUser ? styles.userMessageBubble : styles.supportMessageBubble]}>
          <Text style={[styles.messageText, isUser ? styles.userMessageText : styles.supportMessageText]}>
            {item.text}
          </Text>
        </View>
        {isUser ? (
          <View style={styles.userAvatar}>
            <Text style={styles.avatarText}>A</Text>
          </View>
        ) : (
          <View style={styles.supportAvatar}>
            <Text style={styles.avatarText}>C</Text>
          </View>
        )}
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.headerInfo}>
          <View style={styles.serviceAvatar}>
            <Text style={styles.serviceAvatarText}>C</Text>
          </View>
          <View>
            <Text style={styles.serviceName}>Technical Service</Text>
            <Text style={styles.serviceStatus}>Yalla Service</Text>
          </View>
        </View>

        <Text style={styles.typingStatus}>Typing...</Text>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
      </View>

      <View style={styles.trackingContainer}>
        <Text style={styles.trackingLabel}>Tracking Number</Text>
        <View style={styles.trackingNumberContainer}>
          <Text style={styles.trackingNumber}>{trackingNumber}</Text>
          <TouchableOpacity style={styles.copyButton}>
            <Ionicons name="copy-outline" size={20} color="#FF5722" />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
      />

      {messages.some((m) => m.text.includes("rejected")) && (
        <View style={styles.resubmitContainer}>
          <TouchableOpacity style={styles.resubmitButton} onPress={() => router.push("/add-experience")}>
            <Text style={styles.resubmitButtonText}>Resubmit</Text>
          </TouchableOpacity>
        </View>
      )}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={100}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Message!"
          placeholderTextColor="#999"
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    padding: 5,
  },
  headerInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  serviceAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFC107",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  serviceAvatarText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  serviceName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  serviceStatus: {
    fontSize: 12,
    color: "#666",
  },
  typingStatus: {
    fontSize: 12,
    color: "#FF5722",
  },
  progressContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#F0F0F0",
    borderRadius: 2,
  },
  progressFill: {
    height: "100%",
    width: "50%",
    backgroundColor: "#FF5722",
    borderRadius: 2,
  },
  trackingContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  trackingLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 5,
  },
  trackingNumberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  trackingNumber: {
    fontSize: 14,
  },
  copyButton: {
    padding: 5,
  },
  messagesList: {
    padding: 15,
  },
  messageContainer: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "flex-end",
  },
  userMessageContainer: {
    justifyContent: "flex-end",
  },
  supportMessageContainer: {
    justifyContent: "flex-start",
  },
  messageBubble: {
    maxWidth: "70%",
    borderRadius: 16,
    padding: 12,
  },
  userMessageBubble: {
    backgroundColor: "#FF5722",
    marginRight: 10,
  },
  supportMessageBubble: {
    backgroundColor: "#F0F0F0",
    marginLeft: 10,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  userMessageText: {
    color: "white",
  },
  supportMessageText: {
    color: "#333",
  },
  userAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FF9800",
    justifyContent: "center",
    alignItems: "center",
  },
  supportAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FFC107",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  resubmitContainer: {
    padding: 15,
    alignItems: "center",
  },
  resubmitButton: {
    backgroundColor: "#FF5722",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  resubmitButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxHeight: 100,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: "#FF5722",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
})
