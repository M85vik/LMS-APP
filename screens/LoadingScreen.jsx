import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('ClassifyX'); // Navigate to SemesterScreen after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  animation: {
    width: 450,
    height: 450,
    
  },
  text: {
    marginTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});




//expo build:android -t apk



// expo build:android -t app-bundle