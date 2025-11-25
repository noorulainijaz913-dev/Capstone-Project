// src/settingsMenu.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
export default function SettingsMenu({ navigation }) {
  const items = [
    { id: 'theme', label: 'Theme' },
    { id: 'language', label: 'Language' },
    { id: 'notifications', label: 'Notifications' },
  ];
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 12 }}>Settings Menu</Text>
      {items.map((item) => (
        <TouchableOpacity key={item.id}
          onPress={() => navigation.navigate('SettingsScreen', { item })}
          style={{ padding: 14, borderWidth: 1, borderRadius: 8, marginBottom: 10 }}
        >
          <Text>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
