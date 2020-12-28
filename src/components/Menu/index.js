import React from 'react';
import { DrawerActions } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';

export const Menu = ({navigation, title, subtitle}) => (
    <Appbar.Header>
        <Appbar.Action icon="dots-vertical" onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}/>
        <Appbar.Content title={title} subtitle={subtitle}/>
    </Appbar.Header>
)