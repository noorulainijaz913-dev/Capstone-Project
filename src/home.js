// src/home.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  const [items, setItems] = useState([
    { id: '1', title: 'Sample Item 1' },
    { id: '2', title: 'Sample Item 2' },
    { id: '3', title: 'Sample Item 3' },
  ]);
  useEffect(() => {}, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 12 }}>Home</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail', { item })}
            style={{ padding: 14, borderWidth: 1, borderRadius: 8, marginBottom: 10 }}
          >
            <Text style={{ fontSize: 16 }}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
