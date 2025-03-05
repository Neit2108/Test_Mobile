import { View, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Scan from "./Scan";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Nav = () => {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    let badge = null;

                    if (route.name === "Home") {
                        iconName = "home-outline";
                        return (
                            <View style={[styles.iconContainer, focused && styles.activeIcon]}>
                                <Ionicons name={iconName} size={28} color={focused ? "#5A78F0" : "#C4C4C4"} />
                            </View>
                        );
                    } else if (route.name === "Notifications") {
                        iconName = "notifications-outline";
                        badge = <View style={styles.badge} />;
                    } else if (route.name === "Scan") iconName = "scan-outline";
                    else if (route.name === "History") iconName = "time-outline";
                    else if (route.name === "Cart") iconName = "cart-outline";

                    return (
                        <View style={styles.iconWrapper}>
                            <Ionicons name={iconName} size={28} color={"#C4C4C4"} />
                            {badge}
                        </View>
                    );
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Notifications" component={Home} />
            <Tab.Screen name="Scan" component={Scan} options={{ tabBarStyle: { display: "none" }, }} />
            <Tab.Screen name="History" component={Home} />
            <Tab.Screen name="Cart" component={Home} />
        </Tab.Navigator>

    );
};

const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        bottom: 0,
        left: 20,
        right: 20,
        height: 118,
        backgroundColor: "#fff",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        borderTopWidth: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    iconWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        transform: [{ translateY: -30 }]
    },

    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        transform: [{ translateY: -30 }]
    },
    activeIcon: { backgroundColor: "#E3F2FD" },
    badge: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "red",

    },
});

export default Nav;