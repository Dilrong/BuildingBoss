import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GRAY_DARK } from '_styles/colors';

import SearchScreen from '../scenes/search';
import BasisInfoScreen from '../scenes/basisInfo';
import HelpScreen from '../scenes/help';

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="주소검색" component={SearchScreen} options={{
            drawerIcon: () => <MaterialCommunityIcons name="map-search" color={GRAY_DARK} size={26}/>
        }}/>
        <Drawer.Screen name="건축물대장 표제부 조회" component={BasisInfoScreen} options={{
            drawerIcon: () => <MaterialCommunityIcons name="file-search-outline" color={GRAY_DARK} size={26}/>
        }}/>
        <Drawer.Screen name="도움말" component={HelpScreen} options={{
            drawerIcon: () => <MaterialCommunityIcons name="help" color={GRAY_DARK} size={26}/>
        }}/>
        <Drawer.Screen name="문의하기" component={SearchScreen} options={{
            drawerIcon: () => <MaterialCommunityIcons name="chat-outline" color={GRAY_DARK} size={26}/>
        }}/>
    </Drawer.Navigator>
)

export default AppNavigator;