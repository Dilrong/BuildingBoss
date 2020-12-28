import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import { ActivityIndicator, Modal, List, Title } from 'react-native-paper';
import { SCALE_16, SCALE_8 } from '_styles/spacing';
import { scaleSize } from '_styles/mixins';
import { H6 } from '_styles/typography';
import { Menu } from '_components/Menu';
import { ServiceKey } from '_utils/env'
import { DataTable } from 'react-native-paper';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Table = () => {
    const [visible, setVisible] = React.useState(false);
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1)
    const [modalData, setModalData] = useState(null)

    const itemsPerPage = 15;
    const from = (page-1) * itemsPerPage;
    const to = (page+1) * itemsPerPage;
    const containerStyle = {backgroundColor: 'white', padding: SCALE_16, margin: SCALE_8};

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const getStorage = async() => {
        if(await AsyncStorage.getItem('@address')) {
            const address = await AsyncStorage.getItem('@address') 
            await axios.get(`http://apis.data.go.kr/1613000/BldRgstService_v2/getBrBasisOulnInfo?sigunguCd=${JSON.parse(address).sigunguCode}&bjdongCd=${JSON.parse(address).bcode.substr(5)}&platGbCd=0&numOfRows=15&pageNo=${page}&ServiceKey=${ServiceKey}`)
            .then((res) => {
                setData(res.data.response.body.items.item)
                setCount(res.data.response.body.totalCount)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    useEffect(() => {
        getStorage()
    }, [setData, page])

    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>순번</DataTable.Title>
                <DataTable.Title style={{flex: 1}}>대장구분</DataTable.Title>
                <DataTable.Title style={{flex: 4}}>대지위치</DataTable.Title>
            </DataTable.Header>

            <ScrollView>
            {data===undefined?<ActivityIndicator/>:data.map((data, index) => (
                <DataTable.Row key={index} onPress={() => {
                    setModalData(data)
                    showModal()
                }}>
                    <DataTable.Cell>{data.rnum}</DataTable.Cell>
                    <DataTable.Cell style={{flex: 1}}>{data.regstrGbCdNm}</DataTable.Cell>
                    <DataTable.Cell style={{flex: 4}}>{data.platPlc}</DataTable.Cell>
                </DataTable.Row>
            ))}
            </ScrollView>

            <DataTable.Pagination
                page={page}
                numberOfPages={itemsPerPage}
                onPageChange={page => setPage(page)}
                label={`${from}-${to} of ${count}`}
            />
            {modalData===null?<ActivityIndicator/>:
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <List.Item
                    title="대지위치"
                    description={modalData.platPlc}
                />
                <List.Item
                    title="도로명주소"
                    description={modalData.newPlatPlc}
                />
                <List.Item
                    title="대장구분"
                    description={modalData.regstrGbCdNm}
                />
                <List.Item
                    title="대장종류"
                    description={modalData.regstrKindCdNm}
                />
                <List.Item
                    title="건물명"
                    description={modalData.bldNm}
                />
                <List.Item
                    title="특수지명"
                    description={modalData.splotNm}
                />
                <List.Item
                    title="블록"
                    description={modalData.block}
                />
                <List.Item
                    title="생성일자"
                    description={modalData.crtnDay}
                />
            </Modal>}
        </DataTable>
    )
}

const BasisInfoScreen = ({navigation}) => {
    const [address, setAddress] = useState('')
    const getStorage = async() => {
        if(await AsyncStorage.getItem('@address')) {
            const data = await AsyncStorage.getItem('@address')
            setAddress(JSON.parse(data).jibunAddress)
        }
    }

    useEffect(() => {
        getStorage()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Menu navigation={navigation} title="기본개요 조회" subtitle={address}/>
            <Table/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchBar: {
        height: scaleSize(35),
        borderColor: 'gray',
        borderWidth: scaleSize(0.5),
        borderRadius: SCALE_8,
        margin: SCALE_8,
        padding: SCALE_8
    },
    title: {
        fontSize: H6,
        padding: SCALE_8
    },
})

export default BasisInfoScreen;