import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CourseMaterialsScreen = ({ route, navigation }) => {6       
  const { subjectId, materialType } = route.params; // Destructure subjectId and materialType
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await fetch('https://testing-app-rust.vercel.app/JSON/materials.json'); // Replace with your hosted URL
        const data = await response.json();
        
        // Filter materials based on subjectId and materialType
        const filteredMaterials = (data[subjectId] || [])[materialType] || [];
        setMaterials(filteredMaterials);
      } catch (error) {
        console.error('Error fetching materials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, [subjectId, materialType]);

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
      <Text style={styles.title}>Materials</Text>
      <FlatList
        data={materials}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMaterial}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default CourseMaterialsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
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
    alignItems: 'center',
  },
  materialIcon: {
    marginRight: 15,
  },
  materialText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});