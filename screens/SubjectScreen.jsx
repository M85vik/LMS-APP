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

const SubjectScreen = ({ navigation }) => {
  const [subjects, setSubjects] = useState([]);
  const [filteredSubjects, setFilteredSubjects] = useState([]); // For filtered subjects
  const [searchQuery, setSearchQuery] = useState(''); // For search input
  const [loading, setLoading] = useState(true);

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

  // Fetch subjects.json
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch('https://testing-app-rust.vercel.app/JSON/subjects.json'); // Replace with your hosted URL
        const data = await response.json();
        setSubjects(data || []);
        setFilteredSubjects(data || []); // Initialize filtered subjects
      } catch (error) {
        console.error('Error fetching subjects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  // Handle search query changes
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredSubjects(subjects); // Reset to all subjects if search is empty
    } else {
      const filtered = subjects.filter((subject) =>
        subject.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSubjects(filtered);
    }
  };
  const renderSubject = ({ item }) => (
    <TouchableOpacity
      style={styles.subjectCard}
      onPress={() => {
        setSearchQuery(''); // Clear the search box
        setFilteredSubjects(subjects); // Reset the filtered subjects
        navigation.navigate('MaterialType', { subjectId: item.id }); // Navigate to MaterialTypeScreen
      }}
    >
      <Icon name={item.icon} size={40} color="#4CAF50" style={styles.subjectIcon} />
      <Text
  style={styles.subjectText}
  numberOfLines={1} // Limit to 1 line
  ellipsizeMode="tail" // Add ellipsis at the end if text overflows
>
  {item.name}
</Text>
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

    

      {/* Subjects List */}
      <Text style={styles.title}>Subjects</Text>

        {/* Search Box */}
        <TextInput
        style={styles.searchBox}
        placeholder="Search subjects..."
        value={searchQuery}
        onChangeText={handleSearch}
      />


      <FlatList
        data={filteredSubjects} // Use filtered subjects
        keyExtractor={(item) => item.id.toString()}
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
    marginRight: '10%',
  },
  carouselText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchBox: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
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

    subjectCard: {
      width: '95%',
      backgroundColor: 'white',
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
      overflow: 'hidden', // Prevent content from overflowing
    },

  subjectIcon: {
    marginRight: 15,
    flexShrink: 0, // Prevent the icon from shrinking
  },
  subjectText: {
    fontSize: 14,
  fontWeight: 'bold',
  color: '#333',
  flex: 1, // Allow the text to take up available space
  flexWrap: 'wrap', // Wrap text to the next line if it overflows
  },
});