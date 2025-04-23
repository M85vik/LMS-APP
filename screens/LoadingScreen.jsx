import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';


const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Subjects'); // Navigate to SubjectScreen after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* App Title */}
      <Text style={styles.title}>ClassifyX</Text>

      {/* Lottie Animation */}
      <LottieView
        source={require('../assets/animations/loading.json')} // Path to your Lottie file
        autoPlay
        loop={false} // Play the animation only once
        style={styles.animation}
      />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default LoadingScreen;

import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: 'white',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#D20062',
    marginBottom: 20, // Add spacing between the title and animation
  },
  animation: {
    width: 350, // Adjusted width for better scaling
    height: 350, // Adjusted height for better scaling
  },
  text: {
    marginTop: 20, // Add spacing between the animation and text 
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
