import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Timer(): React.ReactNode {
    const [tomato, SetTomato] = useState(30.00);

    return (
        <>
            <Text>Hello!</Text>
            <Text>{tomato.toFixed(2)}</Text>
        </>
    )
}