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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

export default function OneOf(props) {

    const Passer = () => {
        reactotron.log(props)
        props.nav.navigate('Quotation', props);
    }

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#e4ecff', '#00c8ff', '#415cf7']} style={styles.linearGradient}>
                <Text style={styles.text} >{props.el.name}</Text>
                <FontAwesome5 style={styles.icon} onPress={Passer} name="eye" size={20} color="#4b0082" />
            </LinearGradient>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
    },
    text: {
        textAlign: 'center',
        marginLeft: 80,
        color: '#4b0082',
        fontFamily: 'Dosis-Regular',
        fontSize: 15
    },
    icon: {
        marginLeft: 50
    }
    ,
    linearGradient: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
        marginBottom: 10,
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 10,
    },
});
