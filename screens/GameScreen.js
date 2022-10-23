import { View, StyleSheet, Alert, Text, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons'; // https://icons.expo.fyi

import Title  from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';

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
	const [guessRounds, setGuessRounds] = useState([initialGuess]);
	const guessRoundsListLength = guessRounds.length;

	useEffect(() => {
		if (currentGuess === props.userNumber) {
			props.onGameOver(guessRoundsListLength);
		}
	}, [currentGuess, props.userNumber, props.onGameOver]);

	useEffect(() => {
		minBoundary = 1;
		maxBoundary = 100;
	}, []);

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
		setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
	}

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionText style={styles.instructionText} >Higher or Lower?</InstructionText>
				<View style={styles.buttonsContainer} >
					<PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')} >
						<Ionicons name="md-remove" size={24} color="white" />
					</PrimaryButton>
					<PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')} >
						<Ionicons name="md-add" size={24} color="white" />
					</PrimaryButton>
				</View>
			</Card>
			<View style={styles.listContainer}>
				{/*guessRounds.map(guessRound => (
					<Text key={guessRound}>{guessRound}</Text>
				))*/}
				<FlatList 
				data={guessRounds} 
				renderItem={(itemDataObject) => (
					<GuessLogItem roundNumber={guessRoundsListLength - itemDataObject.index} 
					guess={itemDataObject.item} />
				)}
				keyExtractor={(item) => item}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 12,
	},

	instructionText: {
		marginBottom: 12,
	},

	buttonsContainer: {
		flexDirection: 'row',
	},

	listContainer: {
		flex: 1,
		padding: 16,
	},
});