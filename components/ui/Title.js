import { Text, StyleSheet, Platform } from 'react-native';


export default function Title(props) {
	return (
		<Text style={styles.title}>{props.children}</Text>
	);
}

const styles = StyleSheet.create({
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 24,
		color: 'white',
		textAlign: 'center',
		borderWidth: Platform.OS === 'android' ? 2 : 0, // same as: Platform.select({ios: 0, android: 2}). Can also separate into Title.android.js and Title.ios.js, then import and use Title as usual
		borderColor: 'white',
		padding: 12,
		maxWidth: '80%',
	},
});