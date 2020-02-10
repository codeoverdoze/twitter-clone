import React from 'react';
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 20}}>
                <Text  style={{ fontSize: 24, fontWeight: "bold"}}>Settings</Text>
            </View>
            <View style={{ backgroundColor: "#ffffff", flexDirection: 'row' }}>
                <View style={{ height: 100, flex: 3, justifyContent: "center", alignItems: "center"}} >
                    <Image source={require("../assets/images/avatar.jpg")} style={{ width: 60, height: 60, borderRadius: 30}}/>
                </View>
                <View style={{ height: 100, flex: 9, justifyContent: "center", paddingHorizontal: 10}} >
                    <Text style={{ fontSize: 24}}>Michael Soli</Text>
                    <Text>Apple ID, iCloud, iTunes & App Store</Text>
                </View>
                <View style={{ height: 100, flex: 1, alignItems: "center", justifyContent: "center"}} >
                    <Ionicons
                        name="ios-arrow-forward"
                        size={26}
                    />
                </View>
            </View>
            <View style={styles.finishing}>
                <View style={{ flex: 12, alignItems: "center", justifyContent: "space-between", flexDirection: "row"}}>
                    <Text style={{ paddingHorizontal: 20}}>Finish setting up your iPhone</Text>
                    <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: "red", justifyContent: "center", alignItems: "center"}}>
                        <Text style={{color: "#ffffff", fontWeight: "bold"}}>1</Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}} >
                    <Ionicons
                        name="ios-arrow-forward"
                        size={26}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f3f3f3"},
    finishing: {
        backgroundColor: "#ffffff",
        height: 40,
        marginTop: 20,
        flexDirection: "row",
        borderWidth: 0.3,
        borderColor: "#dedede"
    }
});



export default HomeScreen;
