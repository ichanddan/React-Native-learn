import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from '@rneui/themed';
import EditProfileModal from './EditProfileModal';

const ProfilePage = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Main St, Anytown, USA',
    number: '+1 (555) 123-4567',
  });

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleUpdateProfile = (updatedProfile) => {
    setUserProfile(updatedProfile);
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/800/200' }}
        style={styles.coverImage}
      />
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: 'https://picsum.photos/200' }}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{userProfile.name}</Text>
        <Text style={styles.info}>{userProfile.email}</Text>
        <Text style={styles.info}>{userProfile.address}</Text>
        <Text style={styles.info}>{userProfile.number}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Edit Profile"
          onPress={toggleModal}
          buttonStyle={styles.editButton}
        />
        <Button
          title="Additional Action"
          onPress={() => {/* Handle additional action */}}
          buttonStyle={styles.additionalButton}
        />
      </View>
      {/* <EditProfileModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        onUpdate={handleUpdateProfile}
        currentProfile={userProfile}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  coverImage: {
    width: '100%',
    height: 200,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginTop: -75,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: '#fff',
  },
  infoContainer: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  editButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: 20,
    marginRight: 10,
  },
  additionalButton: {
    backgroundColor: '#2ecc71',
    paddingHorizontal: 20,
  },
});

export default ProfilePage;

