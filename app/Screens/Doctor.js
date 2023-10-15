import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

export default function Doctor() {
  const [booked, setBooked] = useState(false);

  // Dummy list of doctors' information
  const doctorsList = [
    { name: 'Dr. Smith', description: 'Pediatrician', time: '9:00 AM' },
    { name: 'Dr. Johnson', description: 'Dentist', time: '10:30 AM' },
    // Add more doctors as needed
  ];

  return (
    <View style={styles.container}>
      {booked ? (
        <View>
          {doctorsList.map((doctor, index) => (
            <TouchableOpacity
              style={styles.doctorItem}
              key={index}
              onPress={() => {
                // Handle click on a doctor here
              }}
            >
              <View style={styles.doctorInfo}>
                <Text style={styles.doctorName}>{doctor.name}</Text>
                <Text style={styles.doctorDescription}>{doctor.description}</Text>
                <Text style={styles.doctorTime}>{doctor.time}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View style={styles.noBooking}>
          <Text style={styles.noBookingText}>Ask Guardian to Book</Text>
          <Button title="Ask Guardian to Book" onPress={() => setBooked(true)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 43,
    paddingHorizontal: 10,
  },
  doctorItem: {
    marginBottom: 16,
    padding: 20,
    width: '97%',
    backgroundColor: '#fcba4f',
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  doctorDescription: {
    fontSize: 14,
  },
  doctorTime: {
    fontSize: 14,
  },
  noBooking: {
    alignItems: 'center',
  },
  noBookingText: {
    fontSize: 18,
    marginBottom: 16,
  },
});
