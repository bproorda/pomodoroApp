import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

interface ChangeProps {
    changeInterval: (newTomato: string) => void,
    currentTomato: number
};

const ChangeTimes: React.FC<ChangeProps> = (props: ChangeProps) => {
const {changeInterval, currentTomato} = props;
const [newTomato, setNewTomato] = useState("");

    return (
        <View style={{ padding: 10 }}>
            <Text>Change the Pomodoro Interval</Text>
           <label><TextInput
                style={{ height: 40 }}
                placeholder={`${currentTomato}`}
                onChangeText={text=>setNewTomato(text)}
            /> Minutes</label> 
            <Button
                onPress={() => changeInterval(newTomato)}
                title="Submit Changes"
            />
        </View>
    )
};
export default ChangeTimes;