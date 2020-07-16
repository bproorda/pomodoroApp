import React, { useState } from 'react';
import { StyleSheet, Text, View, ViewComponent } from 'react-native';
import ChangeTimes from '../changeTimes'


  
  const Timer: React.FC = (props) => {
    const [tomato, SetTomato] = useState(30.00);

    return (
        <View>
            <Text>Hello!</Text>
            <Text>{tomato.toFixed(2)}</Text>
            <ChangeTimes />
        </View>
    )
}
export default Timer;