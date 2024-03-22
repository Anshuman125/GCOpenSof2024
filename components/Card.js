import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { cardStyles } from '../styles/CardStyles';
import { useNavigation } from '@react-navigation/native';

const Card = ({ item }) => {
  const navigation = useNavigation();
  return (
  <TouchableOpacity onPress={()=>navigation.navigate('Movies')}>
    <View style={cardStyles.resultSpace}>
      <Image
        style={cardStyles.cardImage}
        source={require("../assets/pixar-balloon.png")} // Placeholder image source
      />
      <Text style={cardStyles.resultsText}>
        {item}
      </Text>
    </View>
  </TouchableOpacity>
  )
};

export default Card;