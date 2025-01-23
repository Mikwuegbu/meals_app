import { View, Text, StyleSheet } from 'react-native';
import Meal from '../models/meal';

const MealDetails = ({ duration, complexity, affordability, textStyle }) => {
	return (
		<View style={styles.details}>
			<Text style={(styles.detailItem, textStyle)}>{duration}m</Text>
			<Text style={(styles.detailItem, textStyle)}>
				{complexity.toUpperCase()}
			</Text>
			<Text style={(styles.detailItem, textStyle)}>
				{affordability.toUpperCase()}
			</Text>
		</View>
	);
};

export default MealDetails;

const styles = StyleSheet.create({
	details: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		margin: 8,
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 12,
		fontWeight: 'bold',
	},
});
