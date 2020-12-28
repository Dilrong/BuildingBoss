import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GRAY_DARK } from '_styles/colors';

import SearchScreen from '../scenes/search';
import BasisInfoScreen from '../scenes/basisInfo';

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="주소검색" component={SearchScreen}/>
        <Drawer.Screen name="기본개요 조회" component={BasisInfoScreen}/>
        <Drawer.Screen name="표제부 조회" component={SearchScreen}/>
        <Drawer.Screen name="총괄표제부 조회" component={SearchScreen}/>
        <Drawer.Screen name="층별개요 조회" component={SearchScreen}/>
        <Drawer.Screen name="부속지번 조회" component={SearchScreen}/>
        <Drawer.Screen name="전유공용면적 조회" component={SearchScreen}/>
        <Drawer.Screen name="오수정화시설 조회" component={SearchScreen}/>
        <Drawer.Screen name="주택가격 조회" component={SearchScreen}/>
        <Drawer.Screen name="전유부 조회" component={SearchScreen}/>
        <Drawer.Screen name="지역지구구역 조회" component={SearchScreen}/>
    </Drawer.Navigator>
)

export default AppNavigator;