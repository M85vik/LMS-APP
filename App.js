import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './screens/LoadingScreen';
import SubjectScreen from './screens/SubjectScreen';
import CourseMaterialsScreen from './screens/CourseMaterialsScreen';
import ViewerScreen from './screens/ViewerScreen';
import MaterialTypeScreen from './screens/MaterialTypeScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        {/* Loading Screen */}
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false }} // Hide the header for the loading screen
        />

        {/* Subject Screen */}
        <Stack.Screen
          name="Subjects"
          component={SubjectScreen}
          options={{
            headerTitle: () => (
              <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#fff' }}>
              Classify

                <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#fff' }}>
               X
              </Text>
              </Text>

              
            ),
            headerStyle: { backgroundColor: '#A9B5DF' },
            headerTintColor: '#fff',
          }}
        
        />

        
<Stack.Screen
  name="MaterialType"
  component={MaterialTypeScreen}
  options={{
    
      headerTitle: () => (
        <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#fff' }}>
        Classify

          <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#fff' }}>
         X
        </Text>
        </Text>
      ),
      headerStyle: { backgroundColor: '#A9B5DF' },
      headerTintColor: '#fff',
    }}

/>


        {/* Course Materials Screen */}
        <Stack.Screen
          name="CourseMaterials"
          component={CourseMaterialsScreen}
          options={{
            headerTitle: () => (
              <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#fff' }}>
              Classify

                <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#fff' }}>
               X
              </Text>
              </Text>
            ),
            headerStyle: { backgroundColor: '#A9B5DF' },
            headerTintColor: '#fff',
          }}
        />

        {/* Viewer Screen */}
        <Stack.Screen
          name="Viewer"
          component={ViewerScreen}
          options={{
            headerTitle: () => (
              <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#fff' }}>
              Classify

                <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#fff' }}>
               X
              </Text>
              </Text>
            ),
            headerStyle: { backgroundColor: '#A9B5DF' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}