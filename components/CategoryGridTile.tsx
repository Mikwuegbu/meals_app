import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

const CategoryGridTile = ({
	title,
	color,
	onPress,
}: {
	title: string;
	color: string;
	onPress: () => void;
}) => {
	return (
		<View style={styles.gridItem}>
			<Pressable
				onPress={onPress}
				android_ripple={{ color: '#e2e1e1' }}
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.buttonPressed : null,
				]}
			>
				<View style={[styles.innerContainer, { backgroundColor: color }]}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
};

export default CategoryGridTile;

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 8,
		backgroundColor: 'white',
		elevation: 4,
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowRadius: 8,
		shadowOffset: { width: 0, height: 2 },
		overflow: 'hidden',
	},
	button: {
		flex: 1,
	},
	buttonPressed: {
		opacity: 0.5,
		backgroundColor: '#e2e1e1',
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});
