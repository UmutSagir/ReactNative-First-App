import React from 'react';
import { Text,TouchableOpacity, View, StyleSheet} from 'react-native';

const Counter = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>0</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.touchable}>
                    <Text style={styles.buttonText}>Arttır</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable}>
                    <Text style={styles.buttonText}>Azalt</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles= StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "space-around"
    },
    numberText:{
        fontSize:200,
        color:'lightgreen',
    },
    buttonsContainer: {
        flexDirection:'row',
        JustifyContent: 'center',
    },
    touchable:{
        height:50,
        width:150,
        backgroundColor:'orange',
        marginHorizontal:10,
        justifyContent: 'center',
    },
    buttonText:{
        fontSize:'20',
        color:'white',
        fontWeight:'700',
        
    }

})

export default Counter;
