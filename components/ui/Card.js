import { View, StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/color';

export default function Card(props) {
	return (
		<View style={styles.card}>{props.children}</View>
	);
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	card: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: deviceWidth < 380 ? 18 : 36,
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
});