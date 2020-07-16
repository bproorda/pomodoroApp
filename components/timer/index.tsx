import React, { useState } from 'react';
import { StyleSheet, Text, View, ViewComponent, Button } from 'react-native';
import ChangeTimes from '../changeTimes'


  
  const Timer: React.FC = (props) => {
    const [tomato, SetTomato] = useState(0.5);
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
                setTimeLeft((finalTime - Date.now()))
            }
        }, 1000);
    }

    function calcTimeLeft(){
        let minutes = Math.floor(timeLeft / (1000 * 60))
        let minutesString = `${minutes}`;
        if (minutes < 10) minutesString = `0${minutesString}`;
        let seconds = Math.floor(timeLeft / 1000);
        let secondsString = `${seconds}`;
        if (seconds < 10) secondsString = `0${secondsString}`

        return `${minutesString} : ${secondsString}`
    }
    return (
        <View>
            <Text>Hello!</Text>
            <Text>{calcTimeLeft()}</Text>
            <Button
                onPress={runTimer}
                title="Start"
            />
            <ChangeTimes />
        </View>
    )
}
export default Timer;