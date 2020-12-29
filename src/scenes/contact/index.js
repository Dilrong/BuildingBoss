import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { SCALE_8 } from '_styles/spacing';
import { scaleSize } from '_styles/mixins';
import { Menu } from '_components/Menu';

const ContactScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Menu navigation={navigation} title="문의하기"/>
            <WebView source={{ uri: 'https://blog.naver.com/dilrong/222189130155' }}/>
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
    }
})

export default ContactScreen;