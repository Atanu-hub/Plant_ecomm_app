// @ts-nocheck
import {   View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView, SafeAreaView, StatusBar, Image} from "react-native";
import React from "react";
import { Bell, MapPin, Search, User } from "lucide-react-native";
import Header from "../components/Header";

export default function Index() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <SafeAreaView className="flex-1 bg-white">
      <View className="absolute top-0 left-0 right-0 z-10">
          <Header />
        </View>
        {/* Background Image for Top Section */}
        {/* <ImageBackground 
           source={require("../assets/images/theme.jpg")} // Replace with the correct path
           className="w-full h-[300px] overflow-hidden rounded-bl-[120px] rounded-br-[0px]"
           resizeMode="cover"
        > */}
          {/* <View className="pt-10 px-4"> */}
            {/* Top Bar */}
            {/* <View className="flex-row items-center justify-between"> */}
              {/* Location */}
              {/* <TouchableOpacity className="flex-row items-center">
                <View className="bg-white/30 rounded-full p-2">
                  <MapPin size={25} color="black" />
                </View>
                <Text className="ml-2 text-lg font-semibold text-black">
                  Your Location
                </Text>
              </TouchableOpacity> */}

              {/* Notifications & Profile */}
              {/* <View className="flex-row items-center space-x-4">
                <TouchableOpacity>
                  <Bell size={25} color="black" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-white/30 rounded-full p-3">
                  <User size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View> */}

            {/* Search Bar */}
            {/* <View className="mt-5 items-center">
              <View className="bg-white/70 rounded-full px-4 py-2 flex-row items-center border border-green-600 shadow-md w-[80%]">
                <Search size={25} color="black" />
                <TextInput 
                  placeholder="Search plants..."
                  placeholderTextColor="black"
                  className="ml-2 flex-1 text-base font-pregular text-black"
                />
              </View>
            </View> */}

            {/* Title & Description */}
            {/* <View className="mt-3">
              <Text className="text-black text-xl font-psemibold text-center">
                Find the best plants for your home 🌿
              </Text>
              <Text className="text-black text-sm font-psemibold text-center">
                We provide a variety of healthy & fresh plants.
              </Text>
            </View>
          </View>
        </ImageBackground> */}

        {/* Scrollable Content */}
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1, paddingTop: 300 }} 
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          nestedScrollEnabled={true}
          bounces={false}
        >
          <View className="mt-8 px-4">
            <Text className="text-lg font-psemibold text-black">Categories</Text>

            {/* Horizontal Scroll for Categories */}
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false} 
              className="mt-3" 
              pagingEnabled={true}
            >
              {[
                { name: "Indoor", img: require("../assets/images/indoor.jpg") },
                { name: "Outdoor", img: require("../assets/images/outdoor.jpg") },
                { name: "Succulent", img: require("../assets/images/succulent.jpg") },
                { name: "Bonsai", img: require("../assets/images/bonsai.jpg") },
                { name: "Herbs", img: require("../assets/images/herbs.jpg") },
                { name: "Flowers", img: require("../assets/images/flowers.jpg") },
                { name: "Roots", img: require("../assets/images/roots.jpg") },
              ].map((category, index) => (
                <TouchableOpacity key={index} className="bg-white rounded-[18] p-2 mr-4 shadow-md items-center">
                  <Image 
                    source={category.img} 
                    className="w-20 h-20 border border-black rounded-[20] mb-1" 
                    resizeMode="cover"
                  />
                  <Text className="text-black font-pmedium">{category.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Trending Plants */}
          <View className="mt-8 px-4">
  <Text className="text-lg font-psemibold text-black">Trending Plants</Text>
  <View className="flex-row flex-wrap justify-between mt-3">
    {[
      { name: "Aloe Vera 🌿", price: "$12", img: require("../assets/images/alovera.1.jpg") },
      { name: "Bonsai 🌿", price: "$18", img: require("../assets/images/bonsai.1.jpg") },
      { name: "Snake Plant 🌿", price: "$15", img: require("../assets/images/snakeplant.jpg") },
      { name: "Fern 🌿", price: "$10", img: require("../assets/images/fern.jpg") }
    ].map((plant, index) => (
      <View key={index} className="w-[47%] bg-white rounded-[30] p-4 shadow-md mb-5">
        <Image source={plant.img} className="w-full border border-black h-32 rounded-[25]" />
        <Text className="text-black text-lg font-psemibold mt-2">{plant.name}</Text>
        <Text className="text-black bg-primary/90 text-secondary-800 text-xl p-2 w-20 h-10 flex items-center justify-center rounded-full text-center">{plant.price}</Text>
      </View>
    ))}
  </View>
</View>

          {/* Special Offer */}
          <View className="mt-10 mx-4 bg-white  border border-black rounded-[15] p-4 shadow-md">
            <Text className="text-lg font-pmedium text-black">🌿 Special Offer!</Text>
            <Text className="text-yellow-700 font-pregular mt-1">Flat 20% off on all indoor plants. Grab yours now!</Text>
            <TouchableOpacity className="bg-secondary p-2 rounded-full mt-2">
              <Text className="text-white text-center font-psemibold">Shop Now</Text>
            </TouchableOpacity>
          </View>

          {/* Customer Reviews */}
          <View className="mt-10 px-4">
            <Text className="text-lg font-psemibold text-black">Customer Reviews</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2">
              {["Amazing plants!", "Fast delivery!", "Great quality!"].map((review, index) => (
                <View key={index} className="bg-white p-3 rounded-[15] mr-3 w-64 shadow-md">
                  <Text className="text-black">⭐⭐⭐⭐⭐</Text>
                  <Text className="text-black font-pregular">{review}</Text>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Footer */}
          <View className="mt-5 px-4 py-4 bg-secondary-700">
            <Text className="text-white text-center mr-5 font-pextrabold">🌱 SA Plant Shop</Text>
            <Text className="text-gray-400 font-psemibold text-center">Follow us on Instagram @sa_plant_shop</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}