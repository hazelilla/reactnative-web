import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import UiPage from '../screens/UiPage';

const Stack = createStackNavigator();

const MobileNavigation: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{header: () => null}}
          />
          {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
          <Stack.Screen name="UiPage" component={UiPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MobileNavigation;
