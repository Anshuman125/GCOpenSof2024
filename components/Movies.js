import React from 'react'
import { TouchableOpacity, View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 0,
        paddingRight: 0
    },
    label: {
        color: '#fff',
        fontSize: 23,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 15,
        marginLeft: 10
    },
    movieScroll: {
        paddingLeft: 10
    },
    movieCard: {
        paddingRight: 9,
        flexDirection: 'row'
    },
    moviePoster: {
        width: 300,
        height: 200,
        marginRight: 10,
        marginLeft: 2,
        borderRadius: 3
    }

})

const Movies = (props) => {
    const movies = [ 
        require('../assets/movie1.jpg'), 
        require('../assets/movie2.jpg'), 
        require('../assets/movie3.jpg'), 
        require('../assets/movie4.jpg'),
    ]
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={{...styles.label, fontWeight: 700}}>{props.label}</Text>
            <ScrollView horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.movieScroll}>
                {movies.map((movie, index) => (
                    <View style={styles.movieCard} key={index}>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Movies')}>
                            <Image resizeMode='cover'source={movie}
                            style={styles.moviePoster} />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Movies