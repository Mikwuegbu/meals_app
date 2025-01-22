import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Category from '../models/category';

type RouteParams = {
	categoryId: string;
};

const MealsOverViewScreen = () => {
	const { params } = useRoute();
	const catID = (params as RouteParams).categoryId;

	return (
		<View style={styles.container}>
			<Text>{catID}</Text>
		</View>
	);
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
