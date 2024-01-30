import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors.js';

function GuessLogItem({roundNumber,guess}) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
        </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        padding: 12,
        borderRadius: 40,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowRadius: 3,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
    },
    itemText: {
        fontFamily: 'OpenSans-Regular',
    },
});