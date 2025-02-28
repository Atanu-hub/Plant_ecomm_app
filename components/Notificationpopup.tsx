import React, { useRef, useEffect } from "react";
import { 
  View, 
  Text, 
  Modal, 
  TouchableOpacity, 
  FlatList, 
  Animated, 
  Easing, 
  TouchableWithoutFeedback, 
  Platform 
} from "react-native";
import { MessageCircle, Star, CalendarCheck } from "lucide-react-native";

interface NotificationPopupProps {
  onClose: () => void;
}

const notifications = [
  {
    id: "1",
    type: "booking",
    icon: <CalendarCheck size={20} color="green" />,
    title: "New booking request",
    message: "Sarah Johnson requested a wedding photoshoot on June 15th.",
    actions: ["Accept", "View Details"],
  },
  {
    id: "2",
    type: "message",
    icon: <MessageCircle size={20} color="blue" />,
    title: "New message from client",
    message: `Michael Brown: "Can we discuss the venue options for our event?"`,
    actions: ["Reply"],
  },
  {
    id: "3",
    type: "review",
    icon: <Star size={20} color="gold" />,
    title: "New review received",
    message: "You received a 5-star review from Emily Davis for the corporate event photography.",
    actions: ["View Review"],
  },
  // Additional notifications for testing scrolling
  ...Array.from({ length: 10 }, (_, i) => ({
    id: String(i + 4),
    type: "message",
    icon: <MessageCircle size={20} color="blue" />,
    title: `New message ${i + 4}`,
    message: `Test message ${i + 4} from client`,
    actions: ["Reply"]
  }))
];

const NotificationPopup: React.FC<NotificationPopupProps> = ({ onClose }) => {
  const translateY = useRef(new Animated.Value(-50)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const closePopup = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: -50,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => onClose());
  };

  return (
    <Modal visible={true} transparent animationType="none">
      <TouchableOpacity 
        activeOpacity={1} 
        style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        onPress={closePopup}
      >
        <Animated.View
          style={{
            position: "absolute",
            top: 40,
            right: 20,
            width: 350,
            maxHeight: "80%",
            backgroundColor: "white",
            padding: 16,
            borderRadius: 12,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            opacity: opacity,
            transform: [{ translateY }],
          }}
          onStartShouldSetResponder={() => true}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "black" }}>🔔 Notifications</Text>
            <TouchableOpacity onPress={closePopup}>
              <Text style={{ fontSize: 16, color: "#666" }}>×</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={notifications}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={true}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ paddingBottom: 16 }}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback>
                <View style={{ 
                  flexDirection: "row", 
                  alignItems: "flex-start", 
                  backgroundColor: "#f5f5f5", 
                  padding: 12, 
                  borderRadius: 8, 
                  marginBottom: 8 
                }}>
                  <View style={{ marginRight: 12 }}>{item.icon}</View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 14, fontWeight: "600", color: "black", marginBottom: 4 }}>
                      {item.title}
                    </Text>
                    <Text style={{ fontSize: 12, color: "#555", marginBottom: 8 }}>
                      {item.message}
                    </Text>
                    <View style={{ flexDirection: "row", gap: 8 }}>
                      {item.actions.map((action, index) => (
                        <TouchableOpacity 
                          key={index} 
                          style={{
                            paddingVertical: 6,
                            paddingHorizontal: 12,
                            borderRadius: 20,
                            backgroundColor: index === 0 ? "#3b82f6" : "#e5e5e5",
                          }}
                        >
                          <Text style={{ 
                            fontSize: 12, 
                            fontWeight: "600", 
                            color: index === 0 ? "white" : "black" 
                          }}>
                            {action}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            )}
          />

          <TouchableOpacity 
            style={{ 
              paddingVertical: 12,
              backgroundColor: "#f0f0f0",
              borderRadius: 8,
              marginTop: 12
            }}
            onPress={closePopup}
          >
            <Text style={{ 
              fontSize: 14, 
              fontWeight: "600", 
              textAlign: "center", 
              color: "#3b82f6" 
            }}>
              View all notifications
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

export default NotificationPopup;