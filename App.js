import React from 'react';
import { StyleSheet ,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SemesterScreen from './screens/SemesterScreen';
import MaterialScreen from './screens/MaterialScreen';
import ViewerScreen from './screens/ViewerScreen';
import SubjectScreen from './screens/SubjectScreen';
import LoadingScreen from './screens/LoadingScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="Loading" component={LoadingScreen}  options={{headerShown:false}}/>


        {/* Semester Screen */}
        <Stack.Screen
  name="ClassifyX"
  component={SemesterScreen}
  options={{
    headerTitle: () => (
      <Text style={{ 
        fontWeight: 'bold', 
        fontSize: 24, 
        color: '#fff', 
        fontStyle: "normal", 
        // textShadowColor: '#000', 
        // textShadowOffset: { width: 1, height: 1 }, 
        // textShadowRadius: 2, 
        textAlign: 'center', // Center the title
        
      }}>
        Classify
        <Text style={{ color: '#B771E5', fontStyle:"normal" }}>X</Text> {/* Different color for "X" */}
      </Text>
    ),
    headerStyle: {
      backgroundColor: '#A9B5DF', // Background color of the header
    },
    headerTintColor: '#fff', // Back button and icon color
  }}
/>
          {/* Subject Screen */}
          <Stack.Screen
  name="Subjects"
  component={SubjectScreen}
  options={{
    headerTitle: () => (
      <Text style={{ 
        fontWeight: 'bold', 
        fontSize: 24, 
        color: '#fff', 
        fontStyle: "normal", 
        // textShadowColor: '#000', 
        // textShadowOffset: { width: 1, height: 1 }, 
        // textShadowRadius: 2, 
        textAlign: 'center', // Center the title
        
      }}>
        Classify
        <Text style={{ color: '#B771E5', fontStyle:"normal" }}>X</Text> {/* Different color for "X" */}
      </Text>
    ),
    headerStyle: {
      backgroundColor: '#A9B5DF', // Background color of the header
    },
    headerTintColor: '#fff', // Back button and icon color
  }}
/>



        {/* Material Screen */}
        <Stack.Screen
  name="Materials"
  component={MaterialScreen}
  options={{
    headerTitle: () => (
      <Text style={{ 
        fontWeight: 'bold', 
        fontSize: 24, 
        color: '#fff', 
        fontStyle: "normal", 
        // textShadowColor: '#000', 
        // textShadowOffset: { width: 1, height: 1 }, 
        // textShadowRadius: 2, 
        textAlign: 'center', // Center the title
        
      }}>
        Classify
        <Text style={{ color: '#B771E5', fontStyle:"normal" }}>X</Text> {/* Different color for "X" */}
      </Text>
    ),
    headerStyle: {
      backgroundColor: '#A9B5DF', // Background color of the header
    },
    headerTintColor: '#fff', // Back button and icon color
  }}
/>
      
        {/* Viewer Screen */}
        <Stack.Screen
  name="Viewer"
  component={ViewerScreen}
  options={{
    headerTitle: () => (
      <Text style={{ 
        fontWeight: 'bold', 
        fontSize: 24, 
        color: '#fff', 
        fontStyle: "normal", 
        // textShadowColor: '#000', 
        // textShadowOffset: { width: 1, height: 1 }, 
        // textShadowRadius: 2, 
        textAlign: 'center', // Center the title
        
      }}>
        Classify
        <Text style={{ color: '#B771E5', fontStyle:"normal" }}>X</Text> {/* Different color for "X" */}
      </Text>
    ),
    headerStyle: {
      backgroundColor: '#A9B5DF', // Background color of the header
    },
    headerTintColor: '#fff', // Back button and icon color
  }}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});