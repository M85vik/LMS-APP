import React, { useEffect, useState, useRef } from 'react';
import { 
  Dimensions,
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Image,
  TextInput,
 } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const { width: screenWidth } = Dimensions.get('window');

const MaterialTypeScreen = ({ route, navigation }) => {
    const { subjectId } = route.params;

  const materialTypes = [
    { id: 'notes', title: 'Notes', icon: 'notebook-outline' },
    { id: 'tutorials', title: 'Tutorials', icon: 'file-document' },
    { id: 'labs', title: 'Labs', icon: 'flask' },
  ];




  const renderMaterialType = (type) => (
    <TouchableOpacity
      key={type.id}
      style={styles.card}
      onPress={() => navigation.navigate('CourseMaterials', { subjectId, materialType: type.id })}
    >
      <Icon name={type.icon} size={40} color="#4CAF50" style={styles.icon} />
      <Text style={styles.text}>{type.title}</Text>
    </TouchableOpacity>
  );


  const carouselItems = [
      { id: '1', title: 'Welcome to LMS', image: 'https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg' },
      { id: '2', title: 'Explore Subjects', image: 'https://img.freepik.com/free-vector/students-using-e-learning-platform-video-laptop-graduation-cap_335657-3285.jpg' },
      { id: '3', title: 'Track Your Progress', image: 'https://img.freepik.com/free-vector/online-certification-with-books-glasses_23-2148571394.jpg' },
    ];
  
    const scrollViewRef = useRef(null);
    const currentIndex = useRef(0);
  
    // Automatically scroll the carousel
    useEffect(() => {
      const interval = setInterval(() => {
        if (scrollViewRef.current) {
          currentIndex.current = (currentIndex.current + 1) % carouselItems.length;
          scrollViewRef.current.scrollTo({
            x: currentIndex.current * screenWidth,
            animated: true,
          });
        }
      }, 3000);
  
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

  return (
    <View style={styles.container}>

       {/* Carousel */}
            <View style={styles.carouselWrapper}>
              <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                style={styles.carouselContainer}
                scrollEnabled={false} // Allow manual scrolling
              >
                {carouselItems.map((item) => (
                  <View key={item.id} style={styles.carouselItem}>
                    <Image source={{ uri: item.image }} style={styles.carouselImage} resizeMode="cover" />
                    <Text style={styles.carouselText}>{item.title}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>


      <Text style={styles.title}>Choose Material Type</Text>
      {materialTypes.map(renderMaterialType)}
    </View>
  );
};

export default MaterialTypeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    // justifyContent: 'center',
  },
  
  carouselWrapper: {
    height: 250, // Fixed height for the carousel
    marginBottom: 10,
  },
  carouselContainer: {
    flex: 1,
  },
  carouselItem: {
    width: screenWidth, // Show one image at a time
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  carouselImage: {
    width: '85%',
    height: 200, // Adjusted height for better resolution
    borderRadius: 10,
    marginRight: '10%',
  },
  carouselText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});