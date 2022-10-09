
import React from 'react';
import { useState, useEffect } from 'react';
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


export default function About({ navigation }) {
    const [apiAnswer, setAnswer] = useState();
    const [st1, setSt1] = useState('123');
    const baseUrl = 'https://poloniex.com/public?command=returnTicker';



    const Sender = () => {
        try {
            axios.get(baseUrl)
                .then((res) => {
                    reactotron.log(typeof res.data['error']);
                    reactotron.log(res);
                    reactotron.log(res.status);
                    let t = res.data;
                    let stat = res.status;
                    setSt1(stat);
                    setAnswer(t);

                })
        }
        catch (e) {
            reactotron.log(9999999999999);
            reactotron.log(e);
            reactotron.log(e);
            reactotron.log(e);
            reactotron.log(e);
            reactotron.log(99999999999999);
        }

    }


    useEffect(() => {
        Sender();
        reactotron.log(st1);
    }, [])

    if (apiAnswer) {
        return (
            <View>
                <Text >About</Text>
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