import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverViewScreen, {
	RouteParams,
} from './screens/MealsOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: '#351401',
						},
						headerTintColor: '#fff',
						contentStyle: {
							backgroundColor: '#3f2f25',
						},
					}}
					initialRouteName="MealsCategories"
				>
					<Stack.Screen
						options={{
							title: 'All Categories',
						}}
						name="MealsCategories"
						component={CategoriesScreen}
					></Stack.Screen>
					<Stack.Screen
						options={{
							headerBackButtonDisplayMode: 'minimal',
						}}
						// options={({ route, navigation }) => {
						// 	const { categoryId } = route.params as RouteParams;
						// 	return {
						// 		title: categoryId,
						// 	};
						// }}

						name="MealsOverview"
						component={MealsOverViewScreen}
					></Stack.Screen>
					<Stack.Screen
						name="mealDetail"
						options={{
							title: 'Meal Detail',
							// headerRight: () => {
							// 	return <Button title="Tap me!" />;
							// },
						}}
						component={MealDetailScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({});
