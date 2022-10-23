import { View, Text, Pressable, StyleSheet } from 'react-native';

import Colors from '../../constants/color';

export default function PrimaryButton(props) {
	return (
		<View style={[styles.buttonOuterContainer, props.style]}>
			<Pressable style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} onPress={props.onPress} android_ripple={{color: Colors.primary600}}>
					<Text style={styles.buttonText} >{props.children}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonOuterContainer: {
		flex: 1,
		borderRadius: 28,
		margin: 4,
		overflow: 'hidden',
	},

	buttonInnerContainer: {
		backgroundColor: Colors.primary500,
		paddingVertical: 8,
		paddingHorizontal: 16,
		//shadowOffset: {width: , height: }
		//shadowRadius,
		//shadowColor,
		//shadowOpacity,
		elevation: 2,
	},

	buttonText: {
		color: "white",
		textAlign: 'center',
	},

	pressed: {
		opacity: 0.75,
	},
});