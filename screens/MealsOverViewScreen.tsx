import MealList from '../components/MealList';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';

export type RouteParams = {
	categoryId: string;
};

const MealsOverViewScreen = () => {
	const { params } = useRoute();
	const { setOptions } = useNavigation();
	const { categoryId } = params as RouteParams;

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find(
			(category) => category.id === categoryId
		)?.title;
		setOptions({
			title: categoryTitle,
		});
	}, [categoryId, setOptions]);

	const displayedMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(categoryId) >= 0
	);

	return <MealList item={displayedMeals} />;
};

export default MealsOverViewScreen;
