import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from '../components/MealItem';
import Meal from '../models/meal';

const MealList = ({ item }: { item: Meal[] }) => {
	//use a useEffect

	const renderMealItem = (itemData: Meal) => {
		return <MealItem {...itemData} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={item}
				keyExtractor={(meal) => meal.id}
				renderItem={(item) => renderMealItem(item.item)}
			/>
		</View>
	);
};

export default MealList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
