import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const ChangeTimes: React.FC = (props) => {


    return (
        <View style={{ padding: 10 }}>
            <TextInput
                style={{ height: 40 }}
                placeholder="Type here to change Pomodoro Length"
            />
            <Button
                onPress={() => {
                    alert('You tapped the button!');
                }}
                title="Submit Changes"
            />
        </View>
    )
}
export default ChangeTimes;