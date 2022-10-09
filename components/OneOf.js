import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import reactotron from 'reactotron-react-native';
import { useEffect, useState } from 'react';

export default function OneOf(props) {

    const Passer = () => {
        reactotron.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        reactotron.log(props)
        reactotron.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        props.nav.navigate('Quotation', props);
    }

    return (<View style={styles.container}>
        <Text style={styles.text} onPress={Passer}>{props.el.name}</Text>
    </View>
    )

}

const styles = StyleSheet.create({
    container: {

    },
    text: { textAlign: 'center', marginTop: 5 }
});
