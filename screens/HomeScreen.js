import React, { useEffect, useState, useLayoutEffect } from 'react'

import { ScrollView, ImageBackground, StatusBar, Dimensions, StyleSheet } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import Header from '../components/Header'
import Hero from '../components/Hero'
import HeaderTabs from '../components/HeaderTabs'
import Movies from '../components/Movies'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000'
	},
	scrollbar: {
		width: '100%',
		height: Dimensions.get('window').height * 81 / 100
	},
	lingrad: {
		height: '101%'

	}
})

const Home = () => {
	const labels = ['Popular on Netflix', 'US Movies', 'Crime TV Shows']

	return (
		<>
			<StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='light-content'
			/>
			<ScrollView style={styles.container}>
				<ImageBackground source={{ uri: 'https://cdn.vox-cdn.com/thumbor/9PqzVk9RnfW0g22byhIyRSPDBYM=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8832449/strangerthings.jpg' }}
					style={styles.scrollbar}>
					<LinearGradient
						locations={[0, 0.2, 0.5, 0.94]}
						colors={[
							'rgba(0,0,0,0.5)',
							'rgba(0,0,0,0.0)',
							'rgba(0,0,0,0.0)',
							'rgba(0,0,0,1)'
						]} style={styles.lingrad}>
						<Header />
						<HeaderTabs />
						<Hero />
					</LinearGradient>
				</ImageBackground>
				<React.Fragment>
					{labels.map((label, index) => (
						<Movies key={index} label={label} />
					))}
				</React.Fragment>
			</ScrollView>
		</>
	)
}

export default Home;
