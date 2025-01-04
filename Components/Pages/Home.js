import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';

const recentRequests = [
  { id: '1', name: 'John Doe', amount: 50, cause: 'Medical Bills' },
  { id: '2', name: 'Jane Smith', amount: 100, cause: 'Education Fund' },
  { id: '3', name: 'Bob Johnson', amount: 75, cause: 'Disaster Relief' },
  // Add more recent requests as needed
];

const Home = () => {
  const renderRequestItem = ({ item }) => (
    <View style={styles.requestItem}>
      <Text style={styles.requestName}>{item.name}</Text>
      <Text style={styles.requestAmount}>${item.amount}</Text>
      <Text style={styles.requestCause}>{item.cause}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to DonationApp</Text>
      
      <View style={styles.sliderContainer}>
        <Text style={styles.sectionTitle}>Recent Requests</Text>
        <FlatList
          data={recentRequests}
          renderItem={renderRequestItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      
      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>Donation Stats</Text>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>1,234</Text>
          <Text style={styles.statLabel}>Total Donations</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>$56,789</Text>
          <Text style={styles.statLabel}>Amount Raised</Text>
        </View>
      </View>
      
      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Donation Categories</Text>
        <View style={styles.categoriesGrid}>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Medical</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Education</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Disaster Relief</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Animal Welfare</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <TouchableOpacity style={styles.donateButton}>
        <Text style={styles.donateButtonText}>Make a Donation</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sliderContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  requestItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    width: 150,
  },
  requestName: {
    fontWeight: 'bold',
  },
  requestAmount: {
    color: 'green',
  },
  requestCause: {
    fontStyle: 'italic',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    color: 'gray',
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '48%',
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  categoryText: {
    fontWeight: 'bold',
  },
  donateButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  donateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Home;