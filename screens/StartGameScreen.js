import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';

import Colors from '../constants/color';

export default function StartGameScreen (props) {
	const [enteredNumber, setEnteredNumber] = useState('');

	function numberInputHandler(enteredNumber) {
		setEnteredNumber(enteredNumber);
	}

	function resetInputHandler() {
		setEnteredNumber('');
	}

	function confirmInputHandler() {
		const chosenNumber = parseInt(enteredNumber);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert('Invalid Number!', 'Number has to be between 1 and 99.', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
		}

		props.onPickNumber(chosenNumber);
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false}  onChangeText={numberInputHandler} value={enteredNumber} />
			<View style={styles.buttonsContainer} >
				<View style={styles.buttonContainer} >
					<PrimaryButton onPress={resetInputHandler} >Reset</PrimaryButton>
				</View>
				<View style={styles.buttonContainer} >
					<PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 100,
		marginHorizontal: 24,
		borderRadius: 8,
		padding: 16,
		backgroundColor: Colors.primary800,
		elevation: 4, // android only property
		shadowColor: 'black', // ios only property
		shadowOffset: { width: 0, height: 2 }, // ios property to set how skewed the shadow is
		shadowRadius: 6, // ios property to set how wide the shadow is
		shadowOpacity: 0.25, // ios property to set how strong the shadow is
	},

	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		color: Colors.accent500,
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'center',
	},

	buttonsContainer: {
		flexDirection: 'row',
	},

	buttonContainer: {
		flex: 1,
	},
});