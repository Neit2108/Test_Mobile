import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
    const insights = [
        { id: "1", title: "Scan new", count: 483, icon: "scan-outline", color: "#D1C4E9" },
        { id: "2", title: "Counterfeits", count: 32, icon: "alert-circle-outline", color: "#FFCCBC" },
        { id: "3", title: "Success", count: 8, icon: "checkmark-circle-outline", color: "#B2DFDB" },
        { id: "4", title: "Directory", count: 26, icon: "calendar-outline", color: "#BBDEFB" },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.content}>
                    <Text style={styles.greeting}>Hello 👋</Text>
                    <Text style={styles.name}>Lê Dũng Tiến </Text>
                </View>
                <Image
                    source={require("./assets/icons/imgIcon.png")}
                    style={styles.avatar}
                />
            </View>

            <Text style={styles.sectionTitle}>Your Insights</Text>
            <View style={styles.gridContainer}>
                {insights.map((item) => (
                    <TouchableOpacity key={item.id} style={[styles.card, { backgroundColor: "#F8F8FB" }]}>
                        <View style={[styles.iconBox, { backgroundColor: item.color }]}>
                            <Ionicons name={item.icon} size={30} color="#333" />
                        </View>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardCount}>{item.count}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.exploreMoreContainer}>
                <Text style={styles.exploreMoreText}>Explore More</Text>
                <TouchableOpacity>
                    <Ionicons name="arrow-forward" size={24} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20 },
    header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 20 },
    content: { marginTop: 63, left: 23 },
    greeting: { fontSize: 18, fontWeight: "bold" },
    name: { fontSize: 16, color: "gray" },
    avatar: { width: 47.05, height: 46, borderRadius: 12, marginTop: 69 },
    sectionTitle: { fontSize: 18, fontWeight: 400, marginTop: 10 },
    gridContainer: { marginVertical: 20, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" },
    iconBox: { width: 55, height: 55, borderRadius: 12, justifyContent: "center", alignItems: "center" },
    card: { width: 158, height: 176.82, borderRadius: 15, padding: 10, justifyContent: "center", alignItems: "center", marginVertical: 10 },
    cardTitle: { fontSize: 14, fontWeight: "bold", marginTop: 5 },
    cardCount: { fontSize: 12, color: "gray", marginTop: 3 },
    exploreMoreContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 30 },
    exploreMoreText: { fontSize: 16, fontWeight: "500" },
});

export default Home;