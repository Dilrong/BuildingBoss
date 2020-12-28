import React from 'react';
import { SCALE_8 } from '_styles/spacing';
import { DrawerActions } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

export const Menu = ({navigation}) => (
    <TouchableOpacity style={styles.menu} onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}>
      <MaterialCommunityIcons name="menu" size={26}/>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    menu: {
        paddingLeft: SCALE_8
    },
})