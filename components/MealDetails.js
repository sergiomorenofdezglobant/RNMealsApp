import { View, Text, StyleSheet } from "react-native";


function MealDetails({duration, complexity, affordability, styleContainer, styleText}) {
    return (
        <View style={[styles.details, styleContainer]}>
            <Text style={[styles.detailItem, styleText]}>{duration} m</Text>
            <Text style={[styles.detailItem, styleText]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, styleText]}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

export default MealDetails

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
})