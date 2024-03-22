import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView,Platform,StatusBar } from 'react-native';
import RecommendedMovieCard from '../components/RecommendedMovieCard.js';
import Cover from '../components/Cover.js';
import Similar from '../components/Similar.js';
import NavBar from '../components/Navbar.js';

const Moviescreen = () => {
  return (
    <View style={styles.container}>
      <NavBar/>      
      <ScrollView contentContainerStyle={styles.movieScrollContainer}>
      <Cover />
        <View style={styles.movieContainer}>
          <View style={styles.recommendedTitleContainer}>
            <Text style={styles.recommendedTitle}>Recommended for You</Text>
          </View>
          <View style={styles.recommendedContainer}>
              <RecommendedMovieCard  />
          </View>
          <View style={styles.similarTitleContainer}>
            <Text style={styles.similarTitle}>Similar Movies</Text>
          </View>
          <View style={styles.similarContainer}>
              <Similar/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingVertical: 10,
  },
  logo: {
    width: '40%',
    height: 40,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 15,
    color: '#fff',
    marginLeft: '5%',
  },
  movieContainer: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: '3%',
  },
  recommendedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  recommendedTitleContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  recommendedTitle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  similarContainer: {
    width: '100%',
    margin:'auto'
  },
  similarTitleContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  similarTitle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Moviescreen;