import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Title, Paragraph, Divider } from 'react-native-paper';
import { SCALE_16, SCALE_8 } from '_styles/spacing';
import { scaleSize } from '_styles/mixins';
import { Menu } from '_components/Menu';

const HelpScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Menu navigation={navigation} title="도움말"/>
            <ScrollView style={styles.content}>
                <Title>건축물대장?</Title>
                <Paragraph>건축물의 위치·면적·구조·용도·층수 등 건축물의 표시에 관한 사항과 건축물 소유자의 성명·주소·소유권 지분 등 소유자 현황에 관한 사항을 등록하여 관리하는 문서입니다.</Paragraph>
                <Divider style={styles.divider}/>
                <Title>왜 봐야되나요?</Title>
                <Paragraph>등기부등본과 마찬가지로 부동산 계약상의 실수나 사기를 막기 위해서 꼭 필요합니다.</Paragraph>
                <Paragraph>등기부등본과 건축물대장 그리고 부동산 계약서를 보고 계약하는 집이 맞는지 확인해야합니다.</Paragraph>
                <Paragraph>본 서비스는 국토교통부 건축물대장정보 서비스를 이용하고 있습니다.</Paragraph>
                <Paragraph>더 자세한 건축물대장을 열람하고 싶다면 세움터라는 웹사이트 이용하면 됩니다.</Paragraph>
                <Divider style={styles.divider}/>
                <Title>건축물 대장의 두가지 종류</Title>
                <Paragraph>1. 일반건축물대장 : 단독주택(다가구) 해당하는 건축물 및 대지에 관한 현황입니다.</Paragraph>
                <Paragraph>2. 집합건축물대장 : 아파트, 연립주택(다세대) 해당하는 건축물 및 대지에 관한 현황입니다.</Paragraph>
            </ScrollView>
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
    menu: {
        paddingLeft: SCALE_8
    },
    content: {
        padding: SCALE_8
    },
    divider: {
        marginTop: SCALE_16,
        marginBottom: SCALE_16
    }
})

export default HelpScreen;