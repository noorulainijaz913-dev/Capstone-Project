// src/localStorage.js
import AsyncStorage from '@react-native-async-storage/async-storage';
const KEY = 'FAVORITES';
export async function saveFavorite(item) {
  const raw = await AsyncStorage.getItem(KEY);
  const list = raw ? JSON.parse(raw) : [];
  const next = [...list.filter(x => x.id !== item.id), item];
  await AsyncStorage.setItem(KEY, JSON.stringify(next));
  return next;
}
export async function getFavorites() {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}
