// @ts-nocheck
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { Bell, MapPin, Search, User } from "lucide-react-native";
import NotificationPopup from "./Notificationpopup";

export default function Header() {
  const [notificationVisible, setNotificationVisible] = useState(false);

  return (
    <ImageBackground
      source={require("../assets/images/theme.jpg")}
      className="w-full h-[300px] overflow-hidden rounded-bl-[120px] rounded-br-[0px]"
      resizeMode="cover"
    >
      <View className="pt-10 px-4">
        {/* Top Bar */}
        <View className="flex-row items-center justify-between">
          {/* Location */}
          <TouchableOpacity className="flex-row items-center">
            <View className="bg-white/30 rounded-full p-2">
              <MapPin size={25} color="black" />
            </View>
            <Text className="ml-2 text-lg font-psemibold text-black">
              Your Location
            </Text>
          </TouchableOpacity>

          {/* Notifications & Profile */}
          <View className="flex-row items-center">
          {/* Bell Icon - Add Margin to Create Space */}
          <TouchableOpacity onPress={() => setNotificationVisible(true)} style={{ marginRight: 20 }}>
         <Bell size={25} color="black" />
         </TouchableOpacity>

        {/* User Icon - No Changes Here */}
       <TouchableOpacity className="bg-white/30 rounded-full p-3">
         <User size={20} color="black" />
        </TouchableOpacity>
        </View>
        </View>
        
        {/* Search Bar */}
        <View className="mt-5 items-center">
          <View className="bg-white/70 rounded-full px-4 py-2 flex-row items-center border border-green-600 shadow-md w-[80%]">
            <Search size={25} color="black" />
            <TextInput 
              placeholder="Search plants..."
              placeholderTextColor="black"
              className="ml-2 flex-1 text-base font-pregular text-black"
              style={{ lineHeight: 25 }}
            />
          </View>
        </View>

        {/* Title & Description */}
        <View className="mt-3">
          <Text className="text-black text-xl font-psemibold text-center">
            Find the best plants for your home 🌿
          </Text>
          <Text className="text-black text-sm font-psemibold text-center">
            We provide a variety of healthy & fresh plants.
          </Text>
        </View>

        {notificationVisible && (
          <NotificationPopup onClose={() => setNotificationVisible(false)} />
        )}
      </View>
    </ImageBackground>
  );
}
