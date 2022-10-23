import { Text, StyleSheet } from 'react-native';

import Colors from '../../constants/color';

export default function InstructionText(props) {
	return (
		<Text style={[styles.instructionText, props.style]} >{props.children}</Text>
	);
}

const styles = StyleSheet.create({
	instructionText: {
		fontFamily: 'open-sans',
		color: Colors.accent500,
		fontSize: 24,
	},	
});