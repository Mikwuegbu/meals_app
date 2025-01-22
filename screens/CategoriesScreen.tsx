import { FlatList, StyleSheet } from 'react-native';
import Category from '../models/category';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const CategoriesScreen = ({
	navigation,
}: {
	navigation: NativeStackNavigationProp<any>;
}) => {
	const renderCategoryItems = (category: Category) => {
		const pressHandler = () => {
			navigation.navigate('MealsOverview', {
				categoryId: category.id,
			});
		};
		return (
			<CategoryGridTile
				onPress={pressHandler}
				title={category.title}
				color={category.color}
			/>
		);
	};

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
	},
});
