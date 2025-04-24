import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import { View, TouchableOpacity } from "react-native"

import TaskListScreen from "../screens/TaskListScreen"

// Placeholder screens
const NotificationsScreen = () => <View style={{ flex: 1, backgroundColor: "white" }} />
const HistoryScreen = () => <View style={{ flex: 1, backgroundColor: "white" }} />
const ProfileScreen = () => <View style={{ flex: 1, backgroundColor: "white" }} />

const Tab = createBottomTabNavigator()

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

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
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
      <Tab.Screen
        name="Tasks"
        component={TaskListScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="document-text-outline" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="notifications-outline" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Add"
        component={TaskListScreen}
        options={{
          tabBarIcon: ({ focused }) => <Ionicons name="add" color="white" size={30} />,
          tabBarButton: (props) => <CustomTabButton {...props} />,
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="folder-outline" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  )
}
