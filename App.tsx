import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouriteScreen from './screens/FavouriteScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#351401',
				},
				drawerItemStyle: {
					borderRadius: 10,
					marginVertical: 6,
				},
				headerTintColor: '#fff',
				sceneStyle: {
					backgroundColor: '#3f2f25',
				},
				drawerContentStyle: {
					backgroundColor: '#3f2f25',
				},
				drawerInactiveTintColor: 'white',
				drawerActiveTintColor: '#351401',
				drawerActiveBackgroundColor: '#e4baa1',
			}}
		>
			<Drawer.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{
					title: 'All Categories',
					drawerIcon: ({ color, size }) => (
						<Ionicons name="list" size={size} color={color} />
					),
				}}
			/>
			<Drawer.Screen
				name="favorites"
				component={FavouriteScreen}
				options={{
					title: 'All Categories',
					drawerIcon: ({ color, size }) => (
						<Ionicons name="star" size={size} color={color} />
					),
				}}
			/>
		</Drawer.Navigator>
	);
};

export default function App() {
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
							headerShown: false,
						}}
						name="MealsCategories"
						component={DrawerNavigator}
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
							title: 'About the Meal',
						}}
						component={MealDetailScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({});
