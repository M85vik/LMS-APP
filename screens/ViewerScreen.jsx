import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { WebView } from 'react-native-webview';

const ViewerScreen = ({ route }) => {
  const { material } = route.params;

  if (material.type === 'image') {
    // Render images using the Image component
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{material.title}</Text>
        <Image source={{ uri: material.file }} style={styles.image} resizeMode="contain" />
      </View>
    );
  }

  if (material.type === 'pdf' || material.type === 'ppt') {
    // Render PDFs and PPTs using Google Docs Viewer
    const googleDocsUrl = `https://docs.google.com/gview?embedded=true&url=${material.file}`;
    return (
      <View style={styles.webContainer}>
        <Text style={styles.title}>{material.title}</Text>
        <WebView source={{ uri: googleDocsUrl }} style={styles.webview} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Unsupported file type</Text>
    </View>
  );
};

export default ViewerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  webContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    padding: 10,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '80%',
  },
  webview: {
    flex: 1,
  },
});