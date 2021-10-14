import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CounterButton from './CounterButton';
import NumberButton from './NumberButton';


const CounterAdvanced = props => {

    //Gösterilen sayı
    const [ num, setNum ] = useState(0);
    //Artış - Azalış miktarı
    // const [ amount, setAmount ] = useState(0);
    const refAmount = useRef(0);
    
    const onPress_Increase = () => {
        setNum(num + refAmount.current);
    }

    const onPress_Decrease = () => {
        
        setNum(num - refAmount.current);
        
    }

    const onSelectedStateChange = (isSelected , number) => {
        console.log(isSelected, number);

        let newAmount;
        if(isSelected) {
            newAmount = refAmount.current + number;
        }else{
            newAmount = refAmount.current - number;
        }

        //setAmount(newAmount);
        refAmount.current = newAmount;

    }

    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{num}</Text>
            <View style={styles.numberButtonsContainer}>
                <NumberButton 
                    number={5} 
                    onSelectedStateChange={onSelectedStateChange}/>
                <NumberButton 
                    number={10} 
                    onSelectedStateChange={onSelectedStateChange}/>
                <NumberButton 
                    number={15} 
                    onSelectedStateChange={onSelectedStateChange}/>
            </View>
            <View style={styles.buttonsContainer}>
                <CounterButton 
                    buttonText="ARTTIR"
                    onPressButton={onPress_Increase} />
                <CounterButton 
                    buttonText="AZALT"
                    onPressButton={onPress_Decrease} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    numberText: {
        fontSize: 200,
        color: 'lightgreen',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    touchable: {
        height: 50,
        width: 150,
        backgroundColor: 'orange',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '700',
    },
    numberButtonsContainer: {
        flexDirection: 'row',
    },
})

export default CounterAdvanced;