import { View, Text, StyleSheet, Pressable, Image, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

function MealItem({ itemData }) {
    const navigation = useNavigation()

    function selectMealItemHandler() {
        navigation.navigate('MealDetail',{
            mealId: itemData.item.id
        })
    }
    
    return (
        <View style={styles.mealItem}>
            <Pressable 
            android_ripple={{color: '#ccc'}} 
            style={({pressed}) => (pressed ? styles.buttonPressed : null)}
            onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{ uri: itemData.item.imageUrl }} />
                        <Text style={styles.title}>{itemData.item.title}</Text>
                    </View>
                    <MealDetails duration={itemData.item.duration} complexity={itemData.item.complexity} affordability={itemData.item.affordability} />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
    },
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
    buttonPressed: {
        opacity: 0.5,
    },
})