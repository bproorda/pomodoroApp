import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

interface ChangeProps {
    changeInterval: (newTomato: string) => void
};

const ChangeTimes: React.FC<ChangeProps> = (props: ChangeProps) => {
const {changeInterval} = props;
const [newTomato, setNewTomato] = useState("");

    return (
        <View style={{ padding: 10 }}>
            <TextInput
                style={{ height: 40, width: 200 }}
                placeholder=" Change Pomodoro Interval"
                onChangeText={text=>setNewTomato(text)}
            />
            <Button
                onPress={() => changeInterval(newTomato)}
                title="Submit Changes"
            />
        </View>
    )
};
export default ChangeTimes;