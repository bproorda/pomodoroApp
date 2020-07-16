import React, { useState } from 'react';
import { StyleSheet, Text, View, ViewComponent, Button } from 'react-native';
import ChangeTimes from '../changeTimes'


  
  const Timer: React.FC = (props) => {
    const [tomato, SetTomato] = useState(30);
    const [timeLeft, setTimeLeft] = useState(tomato);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [timerIsRunning, setTimerIsRunning] = useState(false);

    function runTimer(){
        let finalTime = new Date(Date.now() + tomato * 60 * 1000).getTime();
        setStartTime(Date.now());
        setEndTime(finalTime);
      const tick =  setInterval(()=>{
          setTimerIsRunning(true);
            if(Date.now() >= finalTime){
                setTimeLeft(tomato);
                setTimerIsRunning(false);
               clearInterval(tick);
            } else {
                setTimeLeft((finalTime - Date.now()))
            }
        }, 1000);
    }

    function calcTimeLeft(timeSpan: number){
        let minutes = Math.floor(timeSpan / (1000 * 60))
        let minutesString = `${minutes}`;
        if (minutes < 10) minutesString = `0${minutesString}`;
        let seconds = Math.floor((timeSpan - minutes *60 * 1000) / 1000);
        let secondsString = `${seconds}`;
        if (seconds < 10) secondsString = `0${secondsString}`
        // console.log(minutes);
        // console.log(seconds);

        return `${minutesString} : ${secondsString}`
    }

    function changeInterval(newTomato: string){
        SetTomato(parseFloat(newTomato));
    }

    return (
        <View>
            <Text>Hello!</Text>
            <Text>{timerIsRunning ? calcTimeLeft(timeLeft) : calcTimeLeft((tomato * 60 * 1000))}</Text>
            <Button
                onPress={runTimer}
                title="Start"
            />
            <ChangeTimes changeInterval={changeInterval} currentTomato={tomato}/>
        </View>
    )
}
export default Timer;