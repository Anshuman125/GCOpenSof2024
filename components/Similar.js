import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const movies = [
  { id: 13, title: 'Recommended Movie 1', imageUrl: 'https://image.tmdb.org/t/p/original/uNyEVSPeAtJgUBehuQJ8WEFwatN.jpg ',details:'Movie 1 details' },
    { id: 23, title: 'Recommended Movie 2', imageUrl: 'https://image.tmdb.org/t/p/original/zI3E2a3WYma5w8emI35mgq5Iurx.jpg' ,details:'Movie 2 details' },
    { id: 33, title: 'Recommended Movie 3', imageUrl: 'https://image.tmdb.org/t/p/original/MpdROQ5XxQqOMKhJlLUf7PTxIC.jpg',details:'Movie 3 details' },
    { id: 43, title: 'Recommended Movie 1', imageUrl: 'https://image.tmdb.org/t/p/original/uNyEVSPeAtJgUBehuQJ8WEFwatN.jpg ',details:'Movie 1 details' },
    { id: 243, title: 'Recommended Movie 2', imageUrl: 'https://image.tmdb.org/t/p/original/zI3E2a3WYma5w8emI35mgq5Iurx.jpg' ,details:'Movie 2 details' },
    { id: 343, title: 'Recommended Movie 3', imageUrl: 'https://image.tmdb.org/t/p/original/MpdROQ5XxQqOMKhJlLUf7PTxIC.jpg',details:'Movie 3 details' },

  ];


const Similar = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map((movie) => (
          <TouchableOpacity key={movie.id} onPress={()=>navigation.navigate('Movies')}>
            <View style={styles.card}>
            <Image style={styles.image} source={{ uri: movie.imageUrl }} />
            </View>
            <Text style={styles.cardTitle}>{movie.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Modal visible={selectedMovie !== null} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.title}>{selectedMovie?.title}</Text>
          <Text style={styles.details}>{selectedMovie?.details}</Text>
          <TouchableOpacity onPress={() => setSelectedMovie(null)} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  card: {
    width: 300,
    height: 200,
    backgroundColor: '#f0f0f0',
    margin: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 3,
        // border: '1px solid #fff',
    },
  cardTitle: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Similar;
