import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  // ... add more states
];

const cities = {
  Alabama: ['Birmingham', 'Montgomery', 'Mobile'],
  Alaska: ['Anchorage', 'Fairbanks', 'Juneau'],
  Arizona: ['Phoenix', 'Tucson', 'Mesa'],
  // ... add more cities for each state
};

export default function DonationScreen() {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    console.log('Donation submitted:', { state, city, amount });
    // Here you would typically send this data to your backend
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Make a Donation</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>State:</Text>
        <Picker
          selectedValue={state}
          onValueChange={(itemValue) => {
            setState(itemValue);
            setCity('');
          }}
          style={styles.picker}
        >
          <Picker.Item label="Select a state" value="" />
          {states.map((s) => (
            <Picker.Item key={s} label={s} value={s} />
          ))}
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>City:</Text>
        <Picker
          selectedValue={city}
          onValueChange={(itemValue) => setCity(itemValue)}
          style={styles.picker}
          enabled={!!state}
        >
          <Picker.Item label="Select a city" value="" />
          {state && cities[state].map((c) => (
            <Picker.Item key={c} label={c} value={c} />
          ))}
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Amount ($):</Text>
        <TextInput
          style={styles.input}
          onChangeText={setAmount}
          value={amount}
          keyboardType="numeric"
          placeholder="Enter donation amount"
        />
      </View>

      <Button
        title="Submit Donation"
        onPress={handleSubmit}
        disabled={!state || !city || !amount}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
  },
});