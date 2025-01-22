import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Category from '../models/category';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import Meal from '../models/meal';

type RouteParams = {
	categoryId: string;
};

const MealsOverViewScreen = () => {
	const { params } = useRoute();
	const catID = (params as RouteParams).categoryId;

	const displayedMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(catID) >= 0
	);

	const renderMealItem = (itemData: Meal) => {
		return <MealItem {...itemData} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(meal) => meal.id}
				renderItem={(item) => renderMealItem(item.item)}
			/>
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
