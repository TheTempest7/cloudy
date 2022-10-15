import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList
} from 'react-native';
import reactotron from 'reactotron-react-native';
import { useEffect, useState } from 'react';
import OneOf from './OneOf';

export default function Items(props) {
    const [st1, setSt1] = useState({ 'data': { 'id': 'Waiting...' } });
    const [values, setValues] = useState();

    const circle = (data) => {
        for (let i = 0; i < Object.keys(props.data).length; i++) {
            data[i]['name'] = Object.keys(props.data)[i];
        }
        reactotron.log(data);
        setValues(data);
    }


    useEffect(() => {
        if (props.data) {
            reactotron.log(props);
            let data = Object.values(props.data);
            setSt1(props.data);
            circle(data);
        }
    }, [])



    return (<View style={styles.container}>
        <Text style={styles.text} >Tap an eye to see details</Text>
        <FlatList showsVerticalScrollIndicator={false} style={styles.fatherList} data={values} renderItem={({ item }) => (
            <OneOf resent={props.resent} status={props.status} nav={props.nav} el={item} />
        )} />
    </View>
    )

}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 35,
        backgroundColor: '#6DA4CD'
    },
    text: {
        color: '#FFF',
        paddingVertical: 15,
        fontFamily: 'Dosis-Medium',
        fontSize: 20
    }
});
