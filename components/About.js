
import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList,
    TouchableHighlight
} from 'react-native';
import reactotron from 'reactotron-react-native';
import axios from 'react-native-axios';

import Quotation from './Quotation';
import Items from './Items';

const baseUrl = 'https://poloniex.com/public?command=returnTicker';
export default function About({ navigation }) {
    const [apiAnswer, setAnswer] = useState();
    const [st1, setSt1] = useState('Loading...');

    const Sender = React.useCallback(() => {
        try {
            axios.get(baseUrl)
                .then((res) => {
                    reactotron.log(typeof res.data['error']);
                    let t = res.data;
                    let stat = res.status;
                    setSt1(stat);
                    setAnswer(t);
                })
        }
        catch (e) {
            reactotron.log(e);
        }
    }, [])

    useEffect(() => {
        Sender();
    }, [])

    if (apiAnswer) {
        return (
            <View>
                <Items resent={Sender} status={st1} data={apiAnswer} nav={navigation} />
            </View>
        )
    }
    else {
        return (
            <View>
                <Text >About</Text>
            </View>
        )
    }

}