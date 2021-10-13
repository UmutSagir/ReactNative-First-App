import React from "react";//kütüphaneleri ekleme
import { View,Text, } from "react-native";

const viewStyles={

};

const HelloWorldComponent = () =>{
  return (
    <View style = {{
      backgroundColor:'lightgreen',
      flex : 0.5,//ekranı yarıya böler
      flexDirection:'row',
      justifyContent:'flex-end',//dikey hizalama
      alignItems:'center'//yatay hizalama
    }}>
      <Text>Hello World!</Text>
      </View>
  );
    

}

export default HelloWorldComponent;//default export. Sadece bir tane default export olur.

export const age = 25;//tekil export.birden fazla tekil export olabilir.
export const func  =()=>{

  //dfgdf

}