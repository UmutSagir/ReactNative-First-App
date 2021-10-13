import React from 'react';
import { View,StyleSheet,Dimensions,Text } from 'react-native';


//Dimension API Kullanımı
const dimensions = Dimensions.get('screen')//ekranlarda aynı olması için, responsive tasarım için kullanılabiliyor.
const width = dimensions.width;
const height = dimensions.height;

//Flex ,flexShrink,flexGrow
const App=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Anasayfa</Text>
            </View>
            <View style={styles.campaignsContainer}>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
            </View>
            <View style={styles.products}/>
            <View style={styles.footer}/>
        </View>
    );
}

const styles =StyleSheet.create({
    container: {
        backgroundColor:'rgba(0,0,0,0.1)',
        // flex:1,
        flex:1,
        // overflowhidden:true,//containerden taşanları gizle
    },
    header: {
        backgroundColor:'pink',
        // flex:0.1,
        height:width*0.2,
    },
    campaignsContainer:{
        backgroundColor:'white',
        // flex:0.3,
        height:width*0.3,
    },
    products: {
        backgroundColor:'orange',
        // flex:0.45,
        // flexGrow:0.5,//kalan alanın yarısını buraya ver demiş oluyoruz
        height:width*2,
        flexShrink:1,//taşma olursa sığdır
    },
    footer: {
        backgroundColor:'lightgreen',
        // flex:0.15,
        height:width*0.2,
    },
}); 

export default App;