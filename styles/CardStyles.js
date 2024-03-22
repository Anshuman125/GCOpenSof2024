import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const cardStyles = StyleSheet.create({
  resultSpace: {
    marginBottom: 16,
    marginVertical: 8,
    marginRight: 10,
  },
  resultsText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 4,
  },
  cardImage: {
    borderRadius: 5,
    width: width * 0.35,
    height: height * 0.30,
    // Add more styles as needed
  },
});
