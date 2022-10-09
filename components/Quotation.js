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
import { useState, useEffect } from 'react';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default function Quotation(props) {
    reactotron.log(2222222222222222222222222222);
    reactotron.log(props.route);
    reactotron.log(222222222222222222222222);
    const [status, setStatus] = useState(false);

    const title = ['name', 'last', 'highestBid', 'percentChange']
    const name = props.route.params.el.name;
    const last = props.route.params.el.last;
    const highestBid = props.route.params.el.highestBid;
    const percentChange = props.route.params.el.percentChange;
    const dat = [name, last, highestBid, percentChange];
    const tableData = [
        ['name', name],
        ['last', last],
        ['highestBid', highestBid],
        ['percentChange', percentChange]
    ];
    const headt = ['', 'Head1', 'Head2', 'Head3'];


    const WatchStatus = () => {
        if (((props.route.status) > 299) || ((props.route.status) < 200)) {
            reactotron.log('error');
            reactotron.log(props.route.status);
            setStatus(true);
            tableData.unshift(["ошибка", props.route.status])
        }
        else {
            reactotron.log(status);
        }
    }

    useEffect(() => {
        WatchStatus();
        let timer = setInterval(props.route.params.resent, 5000);
        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 1 }}>
                <TableWrapper style={styles.wrapper}>
                    <Rows data={tableData} flexArr={[1, 1]} style={styles.row} textStyle={styles.text} />
                </TableWrapper>
            </Table>
        </View>

    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { height: 28 },
    text: { textAlign: 'center' }
});