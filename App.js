

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
 TouchableOpacity, TextInput,
 KeyboardAvoidingView
} from 'react-native';

const App = () => {
  return (
 <KeyboardAvoidingView style ={style.container}
 /*behavior= "padding"*/>
 
   <TouchableOpacity style={style.logo}>
     <Text style={style.logotxt}>L</Text>
   </TouchableOpacity>
   <Text style ={style.txt}>
     {`Get legal assistance in a second
     and keep track of your matter in real time.
     Stay safe with LAWYERPP.`}
   </Text>
   <View style = {style.btncontainer}>
     <TouchableOpacity style ={style.btn}>
       <Text>Google</Text>
     </TouchableOpacity>
     <TouchableOpacity style ={style.btn}>
       <Text>Linkedin</Text>
     </TouchableOpacity>
   </View>
    <View style ={style.btncontainer}>
     <View style ={style.line}/>
     <Text style={style.txtor}>Or</Text>
     <View style ={style.line}/>
    </View> 
    
   <Text style ={style.txtinputtxt}>Email Address</Text>
    < TextInput style={style.txtinput}
   keyboardType ="email-address"
   placeholder = "Enter email address"/>
   <Text style={style.txtinputtxt}>Password</Text>
    < TextInput style={style.txtinput}
    keyboardType = "default"
    placeholder = "Enter password"
    secureTextEntry = {true}
    passwordRules = {true}/>
    <TouchableOpacity style={style.loginbtn}>
      <Text style={style.logintxt}>Log in</Text>
    </TouchableOpacity>
    <Text style ={style.txt5}>Forgot Passsword</Text>
    <Text style={style.lasttxt}>Don't have an account?Sign Up</Text>
   
 </KeyboardAvoidingView>

  );
};

const style = StyleSheet.create({
container: {
  flex: 1,
  padding: 10,
  backgroundColor: "whitesmoke"
},
logo: {
  height: 45,
  width: 45,
  backgroundColor: "midnightblue",
  borderRadius: 50,
  alignSelf: "center",
  marginVertical: 20 
},
logotxt: {
  alignSelf: "center",
  fontSize: 35,
  color: "white",
  
},
txt: {
  textAlign: "center", 
  fontSize: 15,
  marginTop: 15,
 
},
line: {
  borderBottomWidth: 1,
  borderBottomColor: "#ddd",
  width: 180
},
txtor: {
fontSize:15,

},
btn: {
  width: 190,
  height: 53,
  borderColor: "#ddd",
  borderWidth: 1,
 backgroundColor: "white",
  marginHorizontal: 6,
  borderRadius: 5,
 /* shadowOffset: {width: 0, height: 4},
  shadowRadius: 2,
  shadowColor: "whitesmoke",
  shadowOpacity: 0.5,
  marginLeft:1,
  marginRight:1,
  marginTop:1,
  elevation: 0.5*/
},
btncontainer: {
  display: "flex",
  flexDirection: "row",
  alignSelf: "center",
  paddingTop: 40
},
txtinput: {
  borderWidth: 1,
  borderColor: "#ddd",
  borderRadius: 5,
  marginTop: 10
},
txtinputtxt: {
  marginTop: 25
},
loginbtn: {
  height: 50,
  width: "auto",
  backgroundColor: "midnightblue",
  borderRadius: 5,
  marginTop: 30,
  
},
logintxt: {
  textAlign: "center",
  paddingVertical: 14,
  fontSize: 15,
  color: "white",

},
txt5 :{
  alignSelf: "center",
  fontSize: 15,
  paddingTop: 17,
  color: "silver"
},
lasttxt: {
  alignSelf: "center",
  paddingTop: 40,
  fontSize: 15
}

});



export default App;
