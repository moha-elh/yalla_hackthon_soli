import { Tabs } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { View, TouchableOpacity } from "react-native"

function CustomTabButton({ children, onPress }: any) {
  return (
    <TouchableOpacity
      style={{
        top: -20,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: "#FF5722",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  )
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 60,
          position: "absolute",
          borderTopWidth: 1,
          borderTopColor: "#E0E0E0",
        },
        tabBarActiveTintColor: "#FF5722",
        tabBarInactiveTintColor: "#666",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tasks",
          tabBarIcon: ({ color, size }) => <Ionicons name="document-text-outline" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, size }) => <Ionicons name="notifications-outline" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => <Ionicons name="add" color="white" size={30} />,
          tabBarButton: (props) => <CustomTabButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color, size }) => <Ionicons name="folder-outline" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} />,
        }}
      />
    </Tabs>
  )
}
