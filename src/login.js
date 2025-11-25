// src/login.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'test@example.com' && password === 'password') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Login Error', 'Incorrect email or password');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={{ fontSize: 26, fontWeight: '600', marginBottom: 16 }}>Welcome Back</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address"
        style={{ borderWidth: 1, padding: 12, borderRadius: 8, marginBottom: 12 }} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry
        style={{ borderWidth: 1, padding: 12, borderRadius: 8, marginBottom: 12 }} />
      <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: '#1f6feb', padding: 14, borderRadius: 8 }}>
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: '600' }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={{ marginTop: 14 }}>
        <Text style={{ color: '#1f6feb', textAlign: 'center' }}>No account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
