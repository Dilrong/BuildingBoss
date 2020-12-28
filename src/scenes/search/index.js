import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { SCALE_8 } from '_styles/spacing';
import { scaleSize } from '_styles/mixins';
import { Menu } from '_components/Menu';
import Postcode from 'react-native-daum-postcode';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchScreen = ({navigation}) => {
    const storeData = async (data) => {
        try {
            await AsyncStorage.setItem('@address', data)
            
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Menu navigation={navigation} title="주소검색"/>
            <Postcode
                style={{ width: '100%', height: '100%' }}
                jsOptions={{ animated: true }}
                onSelected={(data) => storeData(JSON.stringify(data))}
            />
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
})

export default SearchScreen;