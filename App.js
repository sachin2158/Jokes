import React,{useState,useEffect}from 'react'
import {View,Text,Button,StyleSheet,TextInput} from 'react-native';

function App(){
	const [jokes,setJokes]=useState("Loading....")
	const [fname,setfname]=useState("john")
	const [sname,setsname]= useState("deo")
	const newjokes= async(first,second)=>{
		await fetch(`http://api.icndb.com/jokes/random?firstName=${first}&lastName=${second}`).then(res=>res.json())
		.then(res2=>{
			console.log(res2)
			setJokes(res2.value.joke)
		})

	}
	useEffect(() => {
		newjokes(fname,sname)

	},[])
	return<View style={styles.cont}>
	<Text style={styles.text}> jokes</Text>
	<TextInput style={styles.input} type="text" value={fname} onChangeText={setfname}/>
	<TextInput style={styles.input} type="text" value={sname} onChangeText={setsname}/>

	<Button color="red" onPress={() => newjokes(fname,sname)} title="another jokes"/>
	<Text style={styles.cart}>{jokes}</Text>
	</View>
}
export default App
const styles=StyleSheet.create({
	cont:{ 
	  flex: 1,
      justifyContent: 'center',
      margin:20
    },
	text:{
		textAlign:"center",
	    fontSize:40,
	    padding:20
	},
	cart:{
		fontSize:20
	},
	input: {
      height: 40,
      margin: 12,
      borderBottomWidth:3 ,
      padding: 10,
      
      


    }


})
