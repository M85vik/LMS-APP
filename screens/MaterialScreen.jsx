import React, { useRef, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width: screenWidth } = Dimensions.get('window');

const MaterialScreen = ({ navigation, route }) => {
  const { subjectId } = route.params;
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  const carouselItems = [
    { id: '1', title: 'Welcome to Materials', image: 'https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg?ga=GA1.1.1640587892.1744881734&semt=ais_hybrid&w=740' },
    { id: '2', title: 'Explore Resources', image: 'https://img.freepik.com/free-vector/students-using-e-learning-platform-video-laptop-graduation-cap_335657-3285.jpg?ga=GA1.1.1640587892.1744881734&semt=ais_hybrid&w=740' },
    { id: '3', title: 'Learn and Grow', image: 'https://img.freepik.com/free-vector/online-certification-with-books-glasses_23-2148571394.jpg?ga=GA1.1.1640587892.1744881734&semt=ais_hybrid&w=740' }
  ];

  const scrollViewRef = useRef(null);
  const currentIndex = useRef(0);

  // Fetch materials.json
  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await fetch('https://serv-git-main-vikas-sharmas-projects-5aee629a.vercel.app/JSON/materials.json'); // Replace with your hosted URL
        const data = await response.json();
        setMaterials(data[subjectId] || []);
      } catch (error) {
        console.error('Error fetching materials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, [subjectId]);

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

  const renderMaterial = ({ item }) => (
    <TouchableOpacity
      style={styles.materialCard}
      onPress={() => navigation.navigate('Viewer', { material: item })}
    >
      <Icon name={item.icon} size={40} color="#4CAF50" style={styles.materialIcon} />
      <Text style={styles.materialText}>{item.title}</Text>
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
      <View style={styles.carouselWrapper}>
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
      </View>
  
      {/* Materials List */}
      <Text style={styles.title}>Course Materials for {subjectId}</Text>
      <FlatList
        data={materials}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMaterial}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default MaterialScreen;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
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
      textAlign: 'center',
    },
    listContainer: {
      paddingBottom: 10,
    },
  
  materialCard: {
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
  materialIcon: {
    marginRight: 15
  },
  materialText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  }
});




/*
General Education
book - General education or reading
book-outline - Notes or assignments
school-outline - School or education
notebook-outline - Journals or notebooks
calendar-check - Timetable or schedule
clipboard-text - Assignments or tasks
account-tie - Faculty or professors
Science
beaker - Chemistry or experiments
test-tube - Lab work
rocket - Space science or aerospace
weather-lightning - Physics or electricity
leaf - Environmental science
bacteria - Microbiology
earth - Geology or geography
Mathematics
abacus - Mathematics or calculations
chart-pie - Statistics or data visualization
square-root - Algebra or calculus
ruler-square - Geometry or measurements
math-compass - Engineering or technical drawing
function-variant - Mathematical functions
Technology
desktop-classic - Computer science
cellphone - Mobile development
code-braces - Programming or coding
server - Networking or databases
chip - Electronics or embedded systems
keyboard - Typing or software development
cloud-outline - Cloud computing
Arts and Humanities
brush - Painting or design
guitar-acoustic - Music or performing arts
drama-masks-outline - Theater or drama
book-open-page-variant - Literature or language studies
quill - Writing or creative writing
camera - Photography or media studies
Business and Economics
currency-usd-circle - Finance or economics
briefcase-outline - Business or management
chart-areaspline - Marketing or analytics
account-cash - Accounting or financial studies
account-group-outline - Human resources
bank-outline - Banking or investments
Health and Medicine
heart - Medicine or healthcare
medical-bag - Medical studies
needle - Nursing or clinical studies
food-apple-outline - Nutrition or dietetics
bandage - First aid or health sciences
hospital-box-outline - Hospitals or medical facilities
Engineering
cogs - Mechanical engineering
electric-switch - Electrical engineering
bridge-outline - Civil engineering
wrench-outline - Tools or technical studies
hydraulic-oil-level - Industrial engineering
robot-outline - Robotics or AI
Sports and Physical Education
soccer-field - Sports or physical education
run-fast - Athletics or running
weight-lifter - Fitness or gym
basketball-hoop-outline - Basketball or team sports
trophy-outline - Competitions or achievements
whistle - Coaching or refereeing
Languages
alphabet-latin - Language studies
translate-variant - Translation or linguistics
flag-triangle - International studies or foreign languages
book-alphabet - Literature or language learning
dictionary - Vocabulary or linguistics





*/