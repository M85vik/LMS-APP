import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width: screenWidth } = Dimensions.get('window');

const SubjectScreen = ({ navigation, route }) => {
  const { semesterId } = route.params;
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const carouselItems = [
    { id: '1', title: 'Welcome to LMS', image: 'https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg?ga=GA1.1.1640587892.1744881734&semt=ais_hybrid&w=740' },
    { id: '2', title: 'Explore Subjects', image: 'https://img.freepik.com/free-vector/students-using-e-learning-platform-video-laptop-graduation-cap_335657-3285.jpg?ga=GA1.1.1640587892.1744881734&semt=ais_hybrid&w=740' },
    { id: '3', title: 'Track Your Progress', image: 'https://img.freepik.com/free-vector/online-certification-with-books-glasses_23-2148571394.jpg?ga=GA1.1.1640587892.1744881734&semt=ais_hybrid&w=740' }
  ];

  const scrollViewRef = useRef(null);
  const currentIndex = useRef(0);

  // Fetch subjects.json
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch('https://serv-git-main-vikas-sharmas-projects-5aee629a.vercel.app/JSON/subjects.json'); // Replace with your hosted URL
        const data = await response.json();
        setSubjects(data[semesterId] || []);
      } catch (error) {
        console.error('Error fetching subjects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, [semesterId]);

  // Automatically scroll the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollViewRef.current) {
        currentIndex.current = (currentIndex.current + 1) % carouselItems.length;
        scrollViewRef.current.scrollTo({
          x: currentIndex.current * screenWidth,
          animated: true
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const renderSubject = ({ item }) => (
    <TouchableOpacity
      style={styles.subjectCard}
      onPress={() => navigation.navigate('Materials', { subjectId: item.id })}
    >
      <Icon name={item.icon} size={40} color="#4CAF50" style={styles.subjectIcon} />
      <Text style={styles.subjectText}>{item.name}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Custom Carousel */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.carouselContainer}
        scrollEnabled={false}
      >
        {carouselItems.map((item) => (
          <View key={item.id} style={styles.carouselItem}>
            <Image source={{ uri: item.image }} style={styles.carouselImage} resizeMode="cover" />
            <Text style={styles.carouselText}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Subjects List */}
      <Text style={styles.title}>Subjects for Semester {semesterId}</Text>
      <FlatList
        data={subjects}
        keyExtractor={(item) => item.id}
        renderItem={renderSubject}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default SubjectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  carouselContainer: {
    height: 30, // Adjusted height to fit the image and text
    marginBottom: 10, // Adjusted gap between carousel and list
    overflow: 'hidden', // Prevent overflow from the container
    
  },
  carouselItem: {
    width: screenWidth, // Show one image at a time
    alignItems: 'center',
    justifyContent:"center",
    backgroundColor:"transparent"

  
  },
  carouselImage: {
    width: '85%',
    height: 200, // Adjusted height for better resolution
    borderRadius:10,
    marginRight:"10%"
  
   
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
    marginVertical: 10,
    textAlign: 'center'
  },
  listContainer: {
    paddingBottom: 10
  },
  subjectCard: {
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
    alignItems: 'center'
  },
  subjectIcon: {
    marginRight: 15
  },
  subjectText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  }
});