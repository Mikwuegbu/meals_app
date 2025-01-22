import {
	Image,
	Platform,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import Meal from '../models/meal';

const MealItem = ({
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
}: Meal) => {
	return (
		<View style={styles.mealItem}>
			<Pressable
				android_ripple={{ color: '#e2e1e1' }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
			>
				<View style={styles.innerContainer}>
					<View>
						<Image source={{ uri: imageUrl }} style={styles.image} />
						<Text style={styles.title}>{title}</Text>
					</View>
					<View style={styles.details}>
						<Text style={styles.detailItem}>{duration}m</Text>
						<Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
						<Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
					</View>
				</View>
			</Pressable>
		</View>
	);
};

export default MealItem;

const styles = StyleSheet.create({
	mealItem: {
		margin: 10,
		borderRadius: 8,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
		backgroundColor: 'white',
		justifyContent: 'space-between',
		elevation: 4,
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowRadius: 8,
		shadowOffset: { width: 0, height: 2 },
	},
	innerContainer: {
		borderRadius: 8,
		overflow: 'hidden',
	},
	buttonPressed: {
		opacity: 0.5,
		backgroundColor: '#e2e1e1',
	},
	image: {
		width: '100%',
		height: 200,
		overflow: 'hidden',
	},
	title: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 18,
		margin: 8,
	},
	details: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 8,
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 12,
		fontWeight: 'bold',
	},
});
