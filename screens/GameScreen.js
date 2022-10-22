import { View, Text, StyleSheet, Alert } from 'react-native';
import { useState, useEffect } from 'react';

import Title  from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

function generateRandomBetween(min, max, exclude) {
	const rndNum = Math.floor(Math.random() * (max-min) + min);

	if (rndNum == exclude) {
		return generateRandomBetween(min, max, exclude);
	}
	else {
		return rndNum;
	}
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen(props) {
	const initialGuess = generateRandomBetween(minBoundary, maxBoundary, props.userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	useEffect(() => {
		if (currentGuess === userNumber) {
			props.onGameOver();
		}
	}, [currentGuess, userNumber, props.onGameOver]);

	function nextGuessHandler(direction) {
		if (minBoundary === maxBoundary) {
			Alert.alert("Something is wrong!", 'Did you lie or accidentally give me the wrong instructions?', [{text: 'Sorry!', style: 'cancel', onPress: props.onGameOver}]);
			return;
		}

		if (direction === 'lower') {
			maxBoundary = currentGuess; 
		} else {
			minBoundary = currentGuess + 1;
		}
		const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
		setCurrentGuess(newRndNumber);
	}

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View>
				<View>
					<PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')} >-</PrimaryButton>
					<PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')} >+</PrimaryButton>
				</View>
			</View>
			<View>
				{
					//LOG ROUNDS
				}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 12,
	},
});