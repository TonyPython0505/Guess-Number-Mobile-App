import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/color';

export default function GuessLogItem({roundNumber, guess}) {
	return (
		<View style={styles.listItem}>
			<Text style={styles.itemText}>{roundNumber}</Text>
			<Text style={styles.itemText}>My Guess: {guess}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	listItem: {
		borderColor: Colors.primary800,
		borderWidth: 1,
		borderRadius: 40,
		padding: 12,
		marginalVertical: 9,
		backgroundColor: Colors.accent500,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: {width: 0, height: 0},
		shadowOpacity: 0.25,
		shadowRadius: 3,
	},

	itemText: {
		fontFamily: 'open-sans',
	},
});