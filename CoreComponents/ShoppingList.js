import React from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';



const ShoppingList = props =>{
    
    
    return(
        // <View style={styles.container}>
        //     <TextInput
        //         style={styles.textInput}
        //         placeholder="Yazmaya başlayın..."
        //         placeholderTextColor="rgba(0,0,0,0.3)"/>
        //     <TouchableOpacity style={styles.button}>
        //         <Text>Buraya Dokun</Text>
        //     </TouchableOpacity>
        // </View>
        
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>ALIŞVERİŞ LİSTESİ</Text>
                </View>
                <View style={styles.textHolder} >
                    <TextInput style={styles.textInput}
                    placeholder="Yazmaya başlayın...">

                    </TextInput>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>EKLE</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Alınacaklar</Text>

                <View style={styles.boxContainer}>
                    <View style={styles.boxItem}>
                        {/* kutucuk */}
                    </View>                          
                            <Text style={styles.textItem} >Ekmek</Text>                      
                            <TouchableOpacity>
                                {/* button */}
                                <Text style={styles.btnDelete}>Sil</Text>
                            </TouchableOpacity>
                </View>
                <View style={styles.boxContainer}>
                    <View style={styles.boxItem}>
                        {/* kutucuk */}
                    </View>                          
                            <Text style={styles.textItem} >Süt</Text>                      
                            <TouchableOpacity>
                                {/* button */}
                                <Text style={styles.btnDelete}>Sil</Text>
                            </TouchableOpacity>
                </View>
                <View style={styles.boxContainer}>
                    <View style={styles.boxItem}>
                        {/* kutucuk */}
                    </View>                          
                            <Text style={styles.textItem} >Elma</Text>                      
                            <TouchableOpacity>
                                {/* button */}
                                <Text style={styles.btnDelete}>Sil</Text>
                            </TouchableOpacity>
                </View>
                
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {

    },
    container: {
        // flex:1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding:10,
        borderWidth:1,
        borderColor:'grey',
        
    },
    headerText:{
        color: 'darkorange',    
        fontWeight: 'bold',
        fontSize:20,
        

    },
    textInput: {
        width:350,
        height:40,
        padding:10,
        borderWidth:1,
        borderRadius:5,
        borderColor:'lightgrey',
        margin:15,
        
    },
    textHolder:{
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    button: {
        backgroundColor:'darkorange',
        padding:5,
        borderRadius:5,
        width:350,
        height:40,
        margin:15,
        justifyContent: 'center',
        alignItems: 'center',    
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:20,
        color:'white',
    },
    text:{
        color:'darkorange',
        fontSize:20,
        fontWeight:'bold',
        marginLeft:17,
    },
    checkbox:{
        alignSelf:'center',
        
    },
    label:{
        margin:8,
    },
    view:{
        width:15,
        height:15,
        borderWidth:1,
        borderRadius:5,
        borderColor:'grey',
        
    },boxContainer:{
        flexDirection:'row',
        margin:2,
    },
    boxItem:{
        borderRadius:5,
        borderColor:'rgba(0,0,0,0.1)',
        borderWidth:1,
        //marginRight:5,
        margin:5,
        height:20,
        width:20,
        //flexGrow:0.1,
    },
    textItem:{
        margin:5,
        flexGrow:1,
    },
    btnDelete:{
        backgroundColor:'red',
        width:45,
        textDecorationColor:'white',
        color:'white',       
        borderWidth:2,
        borderRadius:3,
        borderColor:'red',
        textAlign:'center',
        margin:5,
        //flexGrow:0.1,
    }

})


export default ShoppingList;