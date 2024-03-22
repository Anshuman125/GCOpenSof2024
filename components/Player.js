import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import * as ScreenOrientation from 'expo-screen-orientation';


const VideoPlayer = () => {
  const navigation = useNavigation(); // Get navigation object
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedQuality, setSelectedQuality] = useState('Auto');
  const { width, height } = Dimensions.get('window');

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  const handlePlaybackRateChange = (rate) => {
    setPlaybackRate(parseFloat(rate));
    if (videoRef.current) {
      videoRef.current.setRateAsync(parseFloat(rate), true);
    }
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pauseAsync();
      } else {
        videoRef.current.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleBack = () => {
    navigation.goBack(); // Navigate back to previous screen
  };
  const handleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.setIsMutedAsync(!isMuted);
      setIsMuted(!isMuted);
    }
  };

  return (
    <View style={[styles.container, { width, height }]}>
      <Video
        ref={videoRef}
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        rate={playbackRate}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay={isPlaying}
        isLooping
        useNativeControls
        style={[styles.video, { width, height }]}
      />
      <TouchableOpacity style={styles.overlay} onPress={handlePlayPause}>
        <MaterialIcons name={isPlaying ? 'pause' : 'play-arrow'} size={48} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <MaterialIcons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.muteButton} onPress={handleMuteUnmute}>
        <MaterialIcons name={isMuted ? 'volume-off' : 'volume-up'} size={24} color="white" />
      </TouchableOpacity>
      <Picker
        selectedValue={playbackRate.toString()}
        style={styles.picker}
        onValueChange={(itemValue) => handlePlaybackRateChange(itemValue)}
      >
        {/* Playback rate options */}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  picker: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: 100,
    backgroundColor: '#fff',
  },
  muteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default VideoPlayer;
