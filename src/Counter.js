import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  TextInput
} from 'react-native';
import {connect,useSelector,useDispatch} from 'react-redux'
import { changeByAmount, decrementAction, incrementAction } from './Actions';


const Counter = () => {

 
  const dispatch = useDispatch()
  const value = useSelector(({counter}) => counter.amount)
  const increase = () => {
    dispatch(incrementAction())
  }

  const decrease = () => {
    dispatch(decrementAction())
  }
  const handleInputChange = (event) => {
    dispatch(changeByAmount(event.nativeEvent.text))
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent:'center',alignItems:'center' }}>
      <Text>{"Counter:"+ value}</Text>
      <View style = {{flexDirection:'row',justifyContent:'space-around',width:'100%'}}>
        <Button 
        title = "Increase"
        onPress = {increase}
        />
        <TextInput onSubmitEditing = {handleInputChange}   keyboardType = 'numeric' placeholder = 'change amount'/>
         <Button 
        title = "Decrease"
        onPress = {decrease}
        />
      </View>

    </SafeAreaView>
  )
}

const mapStateToProps = (state) => {
  return {amount: state.counter.amount}
}

export default connect(mapStateToProps)(Counter);