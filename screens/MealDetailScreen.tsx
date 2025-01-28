import { useNavigation, useRoute } from '@react-navigation/native';
import {
	Button,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import { useLayoutEffect } from 'react';
import { ScreenStackHeaderRightView } from 'react-native-screens';
import IconButton from '../components/IconButton';

const MealDetailScreen = () => {
	const { mealId } = useRoute().params as { mealId: string };
	const selectMeal = MEALS.find((meal) => meal.id === mealId);
	const { setOptions } = useNavigation();

	const headerButtonPressHandler = () => {
		console.log('Button tapped!');
	};

	useLayoutEffect(() => {
		setOptions({
			headerRight: () => {
				return (
					<IconButton
						onPress={headerButtonPressHandler}
						icon="star"
						color="white"
					/>
				);
			},
		});
	}, [setOptions, headerButtonPressHandler]);

	return (
		<ScrollView style={styles.rootContaine}>
			<Image style={styles.mealImage} source={{ uri: selectMeal?.imageUrl }} />
			<Text style={styles.title}>{selectMeal?.title}</Text>
			<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
				{selectMeal && (
					<MealDetails textStyle={styles.detailText} {...selectMeal} />
				)}
			</View>
			<View style={{ width: '80%', alignSelf: 'center' }}>
				<View style={styles.subTitleContainer}>
					<Text style={styles.subTitle}>Ingredients</Text>
				</View>
				{selectMeal?.ingredients.map((ingredient, index) => (
					<View key={index} style={styles.ingredientsContainer}>
						<Text style={styles.itemText}>{ingredient}</Text>
					</View>
				))}
				<View style={styles.subTitleContainer}>
					<Text style={styles.subTitle}>Steps</Text>
				</View>

				{selectMeal?.steps.map((step, index) => (
					<View key={index} style={styles.ingredientsContainer}>
						<Text style={styles.itemText}>{step}</Text>
					</View>
				))}
			</View>
		</ScrollView>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	rootContaine: {
		marginBottom: 16,
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	mealImage: {
		width: '100%',
		height: 250,

		marginBottom: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		margin: 8,
		textAlign: 'center',
		color: 'white',
	},
	detailText: {
		color: 'white',
	},
	subTitle: {
		fontWeight: 'bold',
		color: '#e2b497',
		fontSize: 18,
		padding: 10,
		textAlign: 'center',
	},
	subTitleContainer: {
		padding: 6,
		margin: 4,
		marginHorizontal: 18,
		borderBottomColor: 'white',
		borderBottomWidth: 2,
	},
	ingredientsContainer: {
		borderRadius: 6,
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginVertical: 4,
		marginHorizontal: 12,
		backgroundColor: '#a6a4a4',
	},
	itemText: {
		color: '#1c1b1b',
		fontSize: 14,
		marginBottom: 4,
		textAlign: 'center',
	},
});
