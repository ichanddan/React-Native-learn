import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Overlay, Input, Button } from "@rneui/themed";

const EditProfileModal = ({ isVisible, onClose, onUpdate, currentProfile }) => {
  const [name, setName] = useState(currentProfile.name);
  const [email, setEmail] = useState(currentProfile.email);
  const [address, setAddress] = useState(currentProfile.address);
  const [number, setNumber] = useState(currentProfile.number);

  const handleUpdate = () => {
    onUpdate({ name, email, address, number });
  };

  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={onClose}
      overlayStyle={styles.overlay}
    >
      <View style={styles.modalContent}>
        <Input
          label="Name"
          value={name}
          onChangeText={setName}
          containerStyle={styles.input}
        />
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          containerStyle={styles.input}
        />
        <Input
          label="Address"
          value={address}
          onChangeText={setAddress}
          containerStyle={styles.input}
        />
        <Input
          label="Phone Number"
          value={number}
          onChangeText={setNumber}
          containerStyle={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Cancel"
            onPress={onClose}
            buttonStyle={[styles.button, styles.cancelButton]}
          />
          <Button
            title="Update"
            onPress={handleUpdate}
            buttonStyle={[styles.button, styles.updateButton]}
          />
        </View>
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlay: {
    width: "90%",
    borderRadius: 10
  },
  modalContent: {
    padding: 20
  },
  input: {
    marginBottom: 15
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  button: {
    width: 120
  },
  cancelButton: {
    backgroundColor: "#e74c3c"
  },
  updateButton: {
    backgroundColor: "#3498db"
  }
});

export default EditProfileModal;
