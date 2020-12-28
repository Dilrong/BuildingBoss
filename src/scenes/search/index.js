import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { SCALE_8 } from '_styles/spacing';
import { scaleSize } from '_styles/mixins';
import { Menu } from '_components/Menu';
import Postcode from 'react-native-daum-postcode';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Menu navigation={navigation}/>
            <Postcode
                style={{ width: '100%', height: '100%' }}
                jsOptions={{ animated: true }}
                onSelected={(data) => alert(JSON.stringify(data))}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
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