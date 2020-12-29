import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import { DataTable, ActivityIndicator } from 'react-native-paper';
import { SCALE_8 } from '_styles/spacing';
import { scaleSize } from '_styles/mixins';
import { Menu } from '_components/Menu';
import { ServiceKey } from '_utils/env'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Detail = () => {
    const [data, setData] = useState([]);

    const getStorage = async() => {
        if(await AsyncStorage.getItem('@address')) {
            const address = await AsyncStorage.getItem('@address') 
            await axios.get(`http://apis.data.go.kr/1613000/BldRgstService_v2/getBrTitleInfo?sigunguCd=${JSON.parse(address).sigunguCode}&bjdongCd=${JSON.parse(address).bcode.substr(5)}&platGbCd=0&bun=${JSON.parse(address).buildingCode.substr(11, 4)}&ji=${JSON.parse(address).buildingCode.substr(15, 4)}&numOfRows=15&pageNo=1&ServiceKey=${ServiceKey}`)
            .then((res) => {
                setData(res.data.response.body.items.item)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    useEffect(() => {
        getStorage()
    }, [data, setData])

    return (
        <ScrollView>
            {data=== undefined? <ActivityIndicator/>:<View/>}
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>항목명</DataTable.Title>
                    <DataTable.Title style={styles.dataRow}>데이터</DataTable.Title>
                </DataTable.Header>
            </DataTable>

            <DataTable.Row>
                <DataTable.Cell>대장구분</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.regstrKindCdNm}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>대지위치</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.platPlc}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>도로명</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.newPlatPlc}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>주용도</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.mainPurpsCdNm}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>기타용도</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.etcPurps}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>구조코드명</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.strctCdNm}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>기타구조</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.etcStrct}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>지붕코드명</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.roofCdNm}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>기타지붕</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.etcRoof}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>건물명</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.bldNm}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>호수</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.hoCnt} 호</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>세대수</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.hhldCnt} 세대</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>가구수</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.fmlyCnt} 가구</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>높이</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.heit} m</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>지상층수</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.grndFlrCnt} 층</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>지하층수</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.ugrndFlrCnt} 층</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>승용승강기수</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.rideUseElvtCnt} 대</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>비상용승강기수</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.emgenUseElvtCnt} 대</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>부속건축물수</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.atchBldCnt} 개</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>부속건축물면적</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.atchBldArea} ㎡</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>총동연면적</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.totDongTotArea} ㎡</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>옥내기계식대수</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.indrMechUtcnt} 대</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>옥내기계식면적</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.indrMechArea} ㎡</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>옥외기계식대수</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.oudrMechUtcnt} 대</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>옥외기계식면적</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.oudrMechArea} ㎡</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>옥내자주식대수</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.indrAutoUtcnt} 대</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>옥외자주식면적</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.indrAutoArea} ㎡</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>옥외기계식대수</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.oudrAutoUtcnt} 대</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>옥외자주식면적</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.oudrAutoArea} ㎡</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>대지면적</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.platArea} ㎡</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>건축면적</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.archArea} ㎡</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>건폐율</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.bcRat} %</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>연면적</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.totArea} ㎡</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>용적률</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.vlRat} %</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>허가일</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.pmsDay}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>착공일</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.stcnsDay}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>사용승인일</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.useAprDay}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>허가기관</DataTable.Cell>
                <DataTable.Cell style={styles.dataRow}>{data.pmsnoKikCdNm}</DataTable.Cell>
            </DataTable.Row>
        </ScrollView>
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
    }, [address])

    return (
        <SafeAreaView style={styles.container}>
            <Menu navigation={navigation} title="건축물대장 표제부"/>
            <Detail/>
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
    dataRow: {
        flex: 2
    }
})

export default BasisInfoScreen;