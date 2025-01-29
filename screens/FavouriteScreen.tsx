import { Text } from 'react-native';
import MealList from '../components/MealList';
import { useContext } from 'react';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';

const FavouriteScreen = () => {
	const { ids } = useContext(FavoritesContext);

	const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

	return <MealList item={favoriteMeals} />;
};

export default FavouriteScreen;
