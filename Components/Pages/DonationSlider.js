import { Slider } from '@rneui/themed';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  AccessibilityInfo,
} from 'react-native';
// import Slider from '@react-native-community/slider';

const { width } = Dimensions.get('window');

export default function DonationSlider() {
  const [donationAmount, setDonationAmount] = useState(50);

  const handleSliderChange = (value) => {
    console.log(value)
    setDonationAmount(value);
    // AccessibilityInfo.announceForAccessibility(`Donation amount set to $${value.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Support Our Cause</Text> */}
      
      <ImageBackground
        source={{ uri: '/placeholder.svg?height=300&width=400' }}
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        <View style={styles.overlay}>
          <Text style={styles.imageText}>Help us make a difference</Text>
          <View style={styles.sliderContainer}>
            <Slider
              style={styles.slider}
              minimumValue={10}
              maximumValue={1000}
              value={donationAmount}
              onValueChange={handleSliderChange}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              thumbTintColor="#FFFFFF"
              step={5}
              accessibilityLabel="Donation amount slider"
            />
            <Text style={styles.sliderValue}>${donationAmount.toFixed(2)}</Text>
          </View>
        </View>
      </ImageBackground>

      <Text style={styles.description}>
        Your donation helps us continue our mission to make the world a better place. 
        Every dollar counts towards creating positive change in our communities.
      </Text>

      <View style={styles.impactContainer}>
        <Text style={styles.impactTitle}>Your Impact</Text>
        <Text style={styles.impactText}>
          ${donationAmount.toFixed(2)} can provide:
        </Text>
        <Text style={styles.impactItem}>
          • {Math.floor(donationAmount / 2)} meals for those in need
        </Text>
        <Text style={styles.impactItem}>
          • {Math.floor(donationAmount / 10)} books for underprivileged children
        </Text>
        <Text style={styles.impactItem}>
          • {Math.floor(donationAmount / 5)} vaccinations in developing countries
        </Text>
      </View>

      <View style={styles.futureImpactContainer}>
        <Text style={styles.futureImpactTitle}>Future Impact</Text>
        <Text style={styles.futureImpactText}>
          With monthly donations of ${donationAmount.toFixed(2)}, in one year you could provide:
        </Text>
        <Text style={styles.futureImpactItem}>
          • {Math.floor(donationAmount * 12 / 2)} total meals
        </Text>
        <Text style={styles.futureImpactItem}>
          • {Math.floor(donationAmount * 12 / 10)} total books
        </Text>
        <Text style={styles.futureImpactItem}>
          • {Math.floor(donationAmount * 12 / 5)} total vaccinations
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageBackground: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  image: {
    borderRadius: 10,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  imageText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slider: {
    flex: 1,
    height: 40,
  },
  sliderValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  impactContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  impactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  impactText: {
    fontSize: 16,
    marginBottom: 5,
  },
  impactItem: {
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 5,
  },
  futureImpactContainer: {
    backgroundColor: '#e6f3ff',
    padding: 15,
    borderRadius: 10,
  },
  futureImpactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0066cc',
  },
  futureImpactText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  futureImpactItem: {
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 5,
    color: '#444',
  },
});
