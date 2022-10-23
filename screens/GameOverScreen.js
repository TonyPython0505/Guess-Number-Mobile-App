import { View, Image, StyleSheet, Text, useWindowDimensions, ScrollView } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';

import Title from '../components/ui/Title';

import Colors from '../constants/color';

export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
	const {width, height} = useWindowDimensions();

	let imageSize = 300;

	if (width < 380) {
		imageSize = 150;
	}

	if (height < 400) {
		imageSize = 80;
	}

	const imageStyle = {
		width: imageSize,
		height: imageSize,
		borderRadius: imageSize / 2,
	};

	return (
		<ScrollView style={{flex: 1}}>
			<View style={styles.rootContainer} >
				<Title>GAME OVER</Title>
				<View style={[styles.imageContainer, imageStyle]} ><Image style={styles.image} source={require('../assets/images/success.png')} /></View>
				<Text style={styles.summaryText}>I needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess your number <Text style={styles.highlightText}>{userNumber}</Text>.</Text>
				<PrimaryButton style={{flex: 0}} onPress={onStartNewGame} >Start New Game</PrimaryButton>
			</View>
		</ScrollView>
	);
}

//const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	imageContainer: {
		// borderRadius: deviceWidth < 380 ? 75 : 150,
		// width: deviceWidth < 380 ? 150 : 300,
		// height: deviceWidth < 380 ? 150 : 300,
		borderWidth: 3,
		borderColor: Colors.primary800,
		overflow: 'hidden',
		margin: 36,
	},

	image: {
		width: '100%',
		height: '100%',
	},

	rootContainer: {
		flex: 1,
		padding: 24,
		alignItems: 'center',
		justifyContent: 'center',
	},

	summaryText: {
		fontFamily: 'open-sans',
		fontSize: 24,
		textAlign: 'center',
		marginVertical: 24,
	},

	highlightText: {
		fontFamily: 'open-sans-bold',
		color: Colors.primary500,
	},
});