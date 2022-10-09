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
            reactotron.log(55555555555555555555);
            reactotron.log(props);
            reactotron.log(55555555555555555555);
            let data = Object.values(props.data);
            setSt1(props.data);
            reactotron.log(props.data);

            circle(data);
        }
    }, [])



    return (<View>
        <Text >Items</Text>
        <FlatList data={values} renderItem={({ item }) => (
            <OneOf resent={props.resent} status={props.status} nav={props.nav} el={item} />
        )} />
    </View>
    )

}