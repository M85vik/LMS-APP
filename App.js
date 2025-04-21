import React from 'react';
import { StyleSheet } from 'react-native';
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
          name="Semester"
          component={SemesterScreen}
          options={
            { title: 'Semesters',  
              headerStyle:{
                backgroundColor: '#A9B5DF', // Background color of the header
              },
              headerTitleStyle: {
                fontWeight: 'bold', // Bold font for the title
                fontSize: 20, // Font size for the title
                color: '#fff', // Title text color
              },
              headerTintColor: 'fff', // Back button and icon color
            }}
        />


          {/* Subject Screen */}
          <Stack.Screen
          name="Subjects"
          component={SubjectScreen}
          options={{ title: 'Subjects' ,
            headerStyle:{
              backgroundColor: '#A9B5DF', // Background color of the header
            },
            headerTitleStyle: {
              fontWeight: 'bold', // Bold font for the title
              fontSize: 20, // Font size for the title
              color: '#fff', // Title text color
             
            },
            headerTintColor: 'fffff', // Back button and icon color
          }}
        />



        {/* Material Screen */}
        <Stack.Screen
          name="Materials"
          component={MaterialScreen}
          options={{ title: 'Materials' ,



            
           headerStyle:{
              backgroundColor: '#A9B5DF', // Background color of the header
            },
            headerTitleStyle: {
              fontWeight: 'bold', // Bold font for the title
              fontSize: 20, // Font size for the title
              color: '#fff', // Title text color
             
            },
            headerTintColor: 'fffff', // Back button and icon color
          }}
        />
        {/* Viewer Screen */}
        <Stack.Screen
          name="Viewer"
          component={ViewerScreen}
          options={{ title: 'Viewer',
            headerStyle:{
              backgroundColor: '#A9B5DF', // Background color of the header
            },
            headerTitleStyle: {
              fontWeight: 'bold', // Bold font for the title
              fontSize: 20, // Font size for the title
              color: '#fff', // Title text color
             
            },
            headerTintColor: 'fffff', // Back button and icon color
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