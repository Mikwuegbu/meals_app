import { useNavigation, useRoute } from '@react-navigation/native';
import { BackHandler, FlatList, StyleSheet, Text, View } from 'react-native';
import Category from '../models/category';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import Meal from '../models/meal';
import { useEffect, useLayoutEffect } from 'react';

export type RouteParams = {
	categoryId: string;
};

const MealsOverViewScreen = () => {
	const { params } = useRoute();
	const { setOptions } = useNavigation();
	const { categoryId } = params as RouteParams;

	const displayedMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(categoryId) >= 0
	);

	//use a useEffect
	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find(
			(category) => category.id === categoryId
		)?.title;
		setOptions({
			title: categoryTitle,
		});
	}, [categoryId, setOptions]);

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
