import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { ResultsSection, onLoadMore } from '../components/ResultsSection'; // Corrected import statement
import { searchScreenStyles } from '../styles/SearchScreenStyles'; // Corrected import statement

import { cardStyles } from '../styles/CardStyles';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState(''); // State to manage search input text
  const [searchResults, setSearchResults] = useState([]); // State to store search results

  const [results, setResults] = useState([1, 2, 3, 4]); // State for general search results
  const [loading, setLoading] = useState(false); // State to manage loading state

  const [resultsGenra, setResultsGenra] = useState([1, 2, 3, 4]); // State for genre-specific search results
  const [loadingGenra, setLoadingGenra] = useState(false); // State to manage loading state for genre-specific results

  // Function to handle input text change
  const handleInputChange = (text) => {
    setSearchText(text);
    if (text.length > 0) {
      searchMovies(text); // Perform movie search
    } else {
      setSearchResults([]); // Clear search results
    }
  };

  // Function to simulate movie search
  const searchMovies = (text) => {
    setSearchResults(['Movie 1', 'Movie 2', 'Movie 3']); // Sample search results
  };

  // Function to handle "load more" for general search results
  const onLoadMoreResults = () => onLoadMore(loading, setLoading, setResults);

  return (
    <SafeAreaView style={searchScreenStyles.container}>
      <View style={searchScreenStyles.searchBarContainer}>
        <TextInput
          placeholder='Search Movie'
          placeholderTextColor='lightgray'
          onChangeText={handleInputChange}
          value={searchText}
          style={searchScreenStyles.searchTextInput}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={searchScreenStyles.crossButton}
        >
          <XMarkIcon size={30} color="white" strokeWidth={2} />
        </TouchableOpacity>
      </View>
      <View>
        {results.length > 0 ? (
          <ResultsSection results={results} heading={"Results"} onLoadMore={onLoadMoreResults} />
        ) : (
          // Placeholder component for no results
          <View style={cardStyles.resultSpace}>
            <TouchableWithoutFeedback>
              <Image
                style={cardStyles.cardImage}
                source={require("../assets/pixar-balloon.png")} // Placeholder image source
              />
              <Text style={cardStyles.resultsText}>
                {/* Render placeholder text */}
                No results found
              </Text>
            </TouchableWithoutFeedback>
          </View>
        )}
      </View>
      
    </SafeAreaView>
  );
};

export default SearchScreen;