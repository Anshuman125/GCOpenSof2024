import React, { useRef } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { resultsSectionStyles } from '../styles/ResultSectionStyles'; // Corrected import statement
import Card from './Card';
import LoadMoreButton from './LoadMoreButton';

// Reusable function to handle "load more" functionality
export const onLoadMore = (loadingState, setLoadingState, setResultsState) => { // Changed to named export
  if (!loadingState) {
    setLoadingState(true); // Set loading state to true
    // Simulate fetching more data after a delay
    setTimeout(() => {
      setResultsState(prevResults => [...prevResults, 'Movie 4', 'Movie 5', 'Movie 6']); // Add more items to results
      setLoadingState(false); // Set loading state to false
    }, 1000); // Adjust the delay as needed
  }
};

// Render Results
export const ResultsSection = ({ results, heading, onLoadMore }) => { // Changed to named export
  const scrollViewRef = useRef();

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;

    if (layoutMeasurement.width + contentOffset.x >= contentSize.width) {
      onLoadMore();
    }
  };

  return (
    <View>
      <Text style={resultsSectionStyles.resultsHeading}>{heading} ({results.length})</Text>
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={resultsSectionStyles.resultsContentContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={resultsSectionStyles.cardsContainer}>
          {results.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </View>
        {onLoadMore && results.length > 0 && <LoadMoreButton onPress={onLoadMore} />}
      </ScrollView>
    </View>
  );
};
