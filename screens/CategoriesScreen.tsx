import { FlatList, StyleSheet } from 'react-native';
import Category from '../models/category';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from './components/CategoryGridTile';

const renderCategoryItems = (category: Category) => {
	return <CategoryGridTile title={category.title} color={category.color} />;
};

const CategoriesScreen = () => {
	return (
		<FlatList
			style={styles.container}
			data={CATEGORIES}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => renderCategoryItems(item)}
			numColumns={2}
		/>
	);
};

export default CategoriesScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: 'white',
		paddingVertical: 40,
	},
});
