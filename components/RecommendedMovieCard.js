import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const movieData = [
    { id: 13, title: 'Recommended Movie 1', imageUrl: 'https://image.tmdb.org/t/p/original/uNyEVSPeAtJgUBehuQJ8WEFwatN.jpg ',details:'movie hello' },
    { id: 23, title: 'Recommended Movie 2', imageUrl: 'https://image.tmdb.org/t/p/original/zI3E2a3WYma5w8emI35mgq5Iurx.jpg' ,details:'movie hello'},
    { id: 33, title: 'Recommended Movie 3', imageUrl: 'https://image.tmdb.org/t/p/original/MpdROQ5XxQqOMKhJlLUf7PTxIC.jpg' ,details:'movie hello'},
    { id: 44, title: 'Recommended Movie 4', imageUrl: 'https://image.tmdb.org/t/p/original/MpdROQ5XxQqOMKhJlLUf7PTxIC.jpg' ,details:'movie hello'},
    { id: 55, title: 'Recommended Movie 5', imageUrl: 'https://image.tmdb.org/t/p/original/fwTv3RPRAIy0maOMns5eYRRwnDk.jpg',details:'movie hello' },
    { id: 64, title: 'Recommended Movie 6', imageUrl: 'https://image.tmdb.org/t/p/original/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg',details:'movie hello' },
    { id: 74, title: 'Recommended Movie 7', imageUrl: 'https://image.tmdb.org/t/p/original/ogMd4e3A0uSNwZADzgC23zCByoi.jpg' ,details:'movie hello'},
    { id: 14, title: 'Recommended Movie 1', imageUrl: 'https://image.tmdb.org/t/p/original/uNyEVSPeAtJgUBehuQJ8WEFwatN.jpg ' ,details:'movie hello'},
    { id: 26, title: 'Recommended Movie 2', imageUrl: 'https://image.tmdb.org/t/p/original/zI3E2a3WYma5w8emI35mgq5Iurx.jpg' ,details:'movie hello'},
    { id: 37, title: 'Recommended Movie 3', imageUrl: 'https://image.tmdb.org/t/p/original/MpdROQ5XxQqOMKhJlLUf7PTxIC.jpg',details:'movie hello' },
    { id: 49, title: 'Recommended Movie 4', imageUrl: 'https://image.tmdb.org/t/p/original/MpdROQ5XxQqOMKhJlLUf7PTxIC.jpg' ,details:'movie hello'},
    { id: 50, title: 'Recommended Movie 5', imageUrl: 'https://image.tmdb.org/t/p/original/fwTv3RPRAIy0maOMns5eYRRwnDk.jpg',details:'movie hello' },
    { id: 60, title: 'Recommended Movie 6', imageUrl: 'https://image.tmdb.org/t/p/original/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg',details:'movie hello' },
    { id: 71, title: 'Recommended Movie 7', imageUrl: 'https://image.tmdb.org/t/p/original/ogMd4e3A0uSNwZADzgC23zCByoi.jpg',details:'movie hello' },
  // Add more movie data as needed
];

const Recommended = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movieData.map((movie) => (
          <TouchableOpacity key={movie.id} onPress={() => navigation.navigate('Movies')}>
            <View style={styles.card}>
            <Image style={styles.image} source={{ uri: movie.imageUrl }} />
            </View>
            <Text style={styles.cardTitle}>{movie.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* <Modal visible={selectedMovie !== null} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.title}>{selectedMovie?.title}</Text>
          <Text style={styles.details}>{selectedMovie?.details}</Text>
          <TouchableOpacity onPress={() => setSelectedMovie(null)} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal> */}
      
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

export default Recommended;
