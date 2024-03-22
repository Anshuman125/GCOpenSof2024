import React from 'react'
import { Dimensions, TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'left',
        width: Dimensions.get('window').width,
        padding: 15,
    },
    tabs: {
        color: '#fff',
        fontSize: 18,
        margin: 20,
        marginTop: 0,
    }
})

const HeaderTabs = () => {
    const tabs = ['TV Shows', 'Movies', 'My List']

    return (
        <View style={styles.container}>
            {tabs.map((tab, index) => (
                <TouchableOpacity key={index}>
                    <Text style={{...styles.tabs, fontWeight: 400}}>{tab}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default HeaderTabs