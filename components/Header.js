import React from 'react'

import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, Image, TextInput, StyleSheet } from 'react-native';
import {
    useFonts,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_800ExtraBold
} from "@expo-google-fonts/montserrat";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingRight: 25,
        paddingBottom: 0,
        paddingLeft: 25,
        width: '100%',
    },
    leftHeader: {
        flexDirection: 'row',
    },
    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        margin: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    searchBar: {
        flex: 1,
        color: '#FFF',
        paddingLeft: 20,
        fontSize: 18,
        paddingRight: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        borderRadius:20,
        // Responsive styles
        maxWidth: '100%', // Ensure the search bar doesn't exceed the screen width
        alignSelf: 'stretch',
    },
    search: {
        paddingRight: 10,
    },
    avatar: {
        width: 50,
        height: 35,
        borderRadius: 20,
    },
})

const Header = () => {
    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Montserrat_200ExtraLight,
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Montserrat_800ExtraBold
    });

    return fontsLoaded && (
        <View style={styles.container}>
            <View style={styles.leftHeader}>
                {
                    <TouchableOpacity
                        style={{ marginLeft: 10 }}
                        onPress={() => navigation.navigate('Profile')}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>

                }
            </View>

            <View style={styles.headerIcons}>
                {
                    <View style={styles.container2} color='red'>
                        <TextInput placeholder='Search'
                            placeholderTextColor='#aaa'
                            style={styles.searchBar} onPressIn={()=>navigation.navigate('Search')}/>
                        <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
                            <Feather name='search' size={32} color='white' style={styles.search} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Image resizeMode='contain' source={{ uri: 'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41' }}
                                style={styles.avatar} />
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </View>
    )

}

export default Header