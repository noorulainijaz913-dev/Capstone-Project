// src/settingsScreen.js
import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
export default function SettingsScreen({ route }) {
  const { item } = route.params || { item: { id: 'theme', label: 'Theme' } };
  const [enabled, setEnabled] = useState(false);
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 12 }}>{item.label}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        <Text style={{ marginRight: 12 }}>Toggle</Text>
        <Switch value={enabled} onValueChange={setEnabled} />
      </View>
    </View>
  );
}
