import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverViewScreen from './screens/MealsOverViewScreen';

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<>
			<StatusBar style="dark" />
			<NavigationContainer>
				<Stack.Navigator initialRouteName="MealsCategories">
					<Stack.Screen
						name="MealsCategories"
						component={CategoriesScreen}
					></Stack.Screen>
					<Stack.Screen
						name="MealsOverview"
						component={MealsOverViewScreen}
					></Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({});
