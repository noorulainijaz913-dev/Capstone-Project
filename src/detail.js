// src/detail.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { saveFavorite } from './localStorage';

export default function Detail({ route }) {
  const { item } = route.params || { item: { id: '0', title: 'Unknown' } };
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 12 }}>Detail</Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>ID: {item.id}</Text>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>{item.title}</Text>
      <TouchableOpacity
        onPress={() => saveFavorite(item)}
        style={{ backgroundColor: '#1f6feb', padding: 14, borderRadius: 8 }}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: '600' }}>Add to Favorites</Text>
      </TouchableOpacity>
    </View>
  );
}
