import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface AuthState {
  token: string | null;
  setToken: (token: string) => Promise<void>;
  removeToken: () => Promise<void>;
  checkAuth: () => Promise<void>;
}


const useAuthStore = create<AuthState>((set) => ({
  token: null,
  setToken: async (token: string) => {
    try {
      await AsyncStorage.setItem('authToken', JSON.stringify(token));
      set({ token });
    } catch (error) {
      console.error('Failed to save token', error);
    }
  },
  removeToken: async () => {
    try {
      await AsyncStorage.removeItem('authToken');
      set({ token: null });
    } catch (error) {
      console.error('Failed to remove token', error);
    }
  },
  checkAuth: async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      if (token) {
        set({ token });
      } else {
        set({ token: null }); // Explicitly set token to null if not found
      }
    } catch (error) {
      console.error('Failed to load token', error);
    }
  },
}));

export default useAuthStore;
