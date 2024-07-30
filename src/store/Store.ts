import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  token: string | null;
  setToken: (token: { access_token: string }) => Promise<void>;
  removeToken: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  token: null,
  setToken: async (token: { access_token: string }) => {
    try {
      await AsyncStorage.setItem('authToken', JSON.stringify(token.access_token));
      set({ token: token.access_token });
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
        set({ token: JSON.parse(token) });
      } else {
        set({ token: null });
      }
    } catch (error) {
      console.error('Failed to load token', error);
    }
  },
}));

export default useAuthStore;
