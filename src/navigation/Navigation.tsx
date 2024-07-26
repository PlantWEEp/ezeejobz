import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import LoginScreen from '../screens/auth/LoginScreen';
import EmailLoginScreen from '../screens/auth/EmailLoginScreen';
import OtpScreen from '../screens/auth/OtpScreen';
import BottomTabs from './BottomTab';
import useAuthStore from '../store/Store';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="EmailLoginScreen" component={EmailLoginScreen} />
      <Stack.Screen name="otpScreen" component={OtpScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const token = useAuthStore((state) => state.token);
  const checkAuth = useAuthStore((state) => state.checkAuth);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifyAuth = async () => {
      await checkAuth();
      setIsAuthenticated(!!token);
    };

    verifyAuth();
  }, [token, checkAuth]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          // Screens for logged in users
          <Stack.Group>
            <Stack.Screen name="Root" component={BottomTabs} />
          </Stack.Group>
        ) : (
          // Auth screens
          <Stack.Group>
            <Stack.Screen name="Auth" component={AuthStack} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default Navigation;
