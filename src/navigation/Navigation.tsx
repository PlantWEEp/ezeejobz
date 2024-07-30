import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import LoginScreen from '../screens/auth/LoginScreen';
import EmailLoginScreen from '../screens/auth/EmailLoginScreen';
import OtpScreen from '../screens/auth/OtpScreen'; 
import useAuthStore from '../store/Store';
import { useEffect, useState } from 'react'; 
import HomeScreen from '../screens/dashboard/HomeScreen';
import JobScreen from '../screens/dashboard/JobScreen';
import ProfileScreen from '../screens/dashboard/ProfileScreen';
import BottomTabs from './BottomTab';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="EmailLoginScreen" component={EmailLoginScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} /> 
    </Stack.Navigator>
  );
}

// Home stack navigator
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Job" component={JobScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
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
        <Stack.Screen name="Main" component={BottomTabs} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export { Navigation, HomeStack };