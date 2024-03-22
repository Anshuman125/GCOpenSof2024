import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Import FontAwesome5 from expo/vector-icons
import Vid from './Video';
import { EventEmitter } from 'events';
import { useNavigation } from '@react-navigation/native';

const Cover = () => {
  const initialDescriptionLimit = 200;
  const [showFullDescription, setShowFullDescription] = useState(false);
const[play,setplay]=useState(true);
  const description =
    'A group of people are standing in a straight line along the platform of a railway station, waiting for a train, which is seen coming at some distance. When the train stops at the platform, A group of people are standing in a straight line along the platform of a railway station, waiting for a train, which is seen coming at some distance. When the train stops at the platform, the line dissolves. The doors of the railway-cars open, and people on the platform help passengers to get off.';

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  const navigation = useNavigation();
  const onclickplay = () => {
setplay(false);
    navigation.navigate('video player');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.movie} onPress={() => onclickplay}>
        <Vid play={setplay} />
      </TouchableOpacity>

      <View style={styles.movieDetailsContainer}>
        <View style={styles.movieDetails}>
          <Text style={styles.movieTitle}>Movie Title</Text>
          <Text style={styles.movieMeta}>
            Duration: 2h 30m | IMDb Rating: 8.5 | Release Year: 2022
          </Text>
          <Text style={styles.movieDescription}>
            {showFullDescription ? description : description.slice(0, initialDescriptionLimit)}
            {description.length > initialDescriptionLimit && (
              <Text style={styles.readMore} onPress={toggleDescription}>
                {showFullDescription ? ' ...Read Less' : ' ...Read More'}
              </Text>
            )}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.playButton]} onPress={() =>navigation.navigate('videoplayer') }>
            <FontAwesome5 name="play" size={18} color="#000" style={styles.playIcon} />
            <Text style={[styles.buttonText, { color: '#000' }]}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.downloadButton]} onPress={() => console.log('Download Button Pressed')}>
            <FontAwesome5 name="download" size={18} color="#fff" style={styles.downloadIcon} />
            <Text style={styles.buttonText}>Download</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.recommendedMovies}>
        {/* Recommended movies component */}
        <Text>Recommended Movies</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  movie: {
    width: '95%',
    height: 300, // Adjust the height as needed
    margin: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  movieCover: {
    width: '100%',
    height: 300, // Adjust the height as needed
    borderRadius: 7,
    objectFit: 'cover', // Ensure the image covers the container and maintains aspect ratio
  },
  movieDetailsContainer: {
    width: '95%',
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    //padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 5, // Adjust as needed
    zIndex: 1,
  },
  movieDetails: {},
  movieTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  movieMeta: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'sans-serif',
  },
  movieDescription: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 16,
  },
  readMore: {
    color: 'skyblue',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row', // Added flexDirection to align icon and text horizontally
  },
  playButton: {
    backgroundColor: '#e8e8e3',
  },
  downloadButton: {
    backgroundColor: '#262625',
  },
  playIcon: {
    marginRight: 5, // Spacing between icon and text
  },
  downloadIcon: {
    marginRight: 5, // Spacing between icon and text
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight:"500",
  },
  recommendedMovies: {
    marginTop: 5, // Adjust as needed
    // Additional styles for recommended movies component
  },
});

export default Cover;