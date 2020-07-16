import React, { useState } from 'react';
import { StyleSheet, Text, View, ViewComponent, Button } from 'react-native';
import ChangeTimes from '../changeTimes'


  
  const Timer: React.FC = (props) => {
    const [tomato, SetTomato] = useState(1);
    const [timeLeft, setTimeLeft] = useState(tomato);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);

    function runTimer(){
        let finalTime = new Date(Date.now() + tomato * 60 * 1000).getTime();
        setStartTime(Date.now());
        setEndTime(finalTime);
      const tick =  setInterval(()=>{
            if(Date.now() >= finalTime){
                setTimeLeft(tomato);
               clearInterval(tick);
            } else {
                setTimeLeft((finalTime - Date.now()) / 60000)
            }
        }, 1000);
    }

    return (
        <View>
            <Text>Hello!</Text>
            <Text>{timeLeft.toFixed(2)}</Text>
            <Button
                onPress={runTimer}
                title="Start"
            />
            <ChangeTimes />
        </View>
    )
}
export default Timer;