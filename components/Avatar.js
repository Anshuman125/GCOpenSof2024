import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const styles = StyleSheet.create({
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    container: {
        flexDirection: 'row',
        // justifyContent: 'center',
        paddign: 50,
        paddingTop: 50,
        
    },
    text: {
        color: '#fff',
        fontSize: 16,
        margin: 20,
        marginTop: 5,
        padding: 2,
    },
    container2: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: 3,
        // margin: 10,
        // paddingHorizontal: 15,
        // paddingVertical: 8,
    },
})

const Avatar = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.container2}>
        <Image resizeMode='contain' source={{ uri: 'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41' }}
        style={styles.avatar}/>
        <Text style={styles.text}>{props.label}</Text>
        </View>
    </View>
  );
}

export default Avatar;