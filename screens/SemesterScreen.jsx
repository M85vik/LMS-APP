import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons
import { LinearGradient } from "expo-linear-gradient"; // For gradient backgrounds

const SemesterScreen = ({ navigation }) => {
  const semesters = [
    { id: 1, name: "Semester 1", icon: "book" },
    { id: 2, name: "Semester 2", icon: "book" },
    { id: 3, name: "Semester 3", icon: "book" },
    { id: 4, name: "Semester 4", icon: "book" },
    { id: 5, name: "Semester 5", icon: "book" },
    { id: 6, name: "Semester 6", icon: "book" },
    { id: 7, name: "Semester 7", icon: "book" },
    { id: 8, name: "Semester 8", icon: "book" },
  ];

  return (
    <View style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageSection}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg?ga=GA1.1.1640587892.1744881734&semt=ais_hybrid&w=740",
          }}
          style={styles.heroImage}
        />
      </View>

      {/* Wrapper for Semester Boxes */}
      <LinearGradient
        colors={["#8F87F1", "#C68EFD"]}
        style={styles.semesterWrapper}
      >
        <View style={styles.semesterContainer}>
          {semesters.map((semester) => (
            <TouchableOpacity
              key={semester.id}
              style={styles.semesterBox}
              onPress={() =>
                navigation.navigate("Subjects", { semesterId: semester.id })
              }
            >
              {/* Icon */}
              <Icon
                name={semester.icon}
                size={28}
                color="#fff"
                style={styles.semesterIcon}
              />
              {/* Semester Name */}
              <Text style={styles.semesterText}>{semester.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </LinearGradient>
    </View>
  );
};

export default SemesterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageSection: {
    flex: 3, // 30% of the screen
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  heroImage: {
    width: "80%",
    height: "80%",
    resizeMode: "cover",
  },
  semesterWrapper: {
    flex: 7, // Remaining 70% of the screen
    borderRadius: 20,
    marginHorizontal: 10,
    marginBottom: 20,
    paddingVertical: 20,
    overflow: "hidden", // Ensures the gradient stays within the wrapper
  },
  semesterContainer: {
    flex: 1,
    justifyContent: "space-evenly", // Equispaced boxes
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    flexWrap: "wrap", // Allow wrapping to the next row
  },
  semesterBox: {
    width: "40%", // Adjust width to fit 2 boxes per row
    marginVertical: 8, // Add vertical spacing between rows
    paddingVertical: 15,
    backgroundColor: "#E9A5F1",
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
    transform: [{ scale: 1 }],
  },
  semesterIcon: {
    marginBottom: 10, // Add spacing between the icon and text
  },
  semesterText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
