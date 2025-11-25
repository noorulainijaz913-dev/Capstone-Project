// src/signup.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Signup({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (!username || !email || !password) {
      Alert.alert('Signup Error', 'Please fill all fields');
      return;
    }
    Alert.alert('Success', 'Account created. Please login.');
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={{ fontSize: 26, fontWeight: '600', marginBottom: 16 }}>Create Account</Text>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername}
        style={{ borderWidth: 1, padding: 12, borderRadius: 8, marginBottom: 12 }} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address"
        style={{ borderWidth: 1, padding: 12, borderRadius: 8, marginBottom: 12 }} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry
        style={{ borderWidth: 1, padding: 12, borderRadius: 8, marginBottom: 12 }} />
      <TouchableOpacity onPress={handleSignup} style={{ backgroundColor: '#1f6feb', padding: 14, borderRadius: 8 }}>
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: '600' }}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginTop: 14 }}>
        <Text style={{ color: '#1f6feb', textAlign: 'center' }}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}
