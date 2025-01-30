import MealList from '../components/MealList';
import { useContext } from 'react';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import { StyleSheet, Text, View } from 'react-native';

const FavouriteScreen = () => {
	const { ids } = useContext(FavoritesContext);

	const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

	if (!favoriteMeals || favoriteMeals.length === 0) {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>
					No favorite meals found. Start adding some!
				</Text>
			</View>
		);
	}

	return <MealList item={favoriteMeals} />;
};

export default FavouriteScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
	},
});
