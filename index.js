/**
 * @format
 */
 import 'react-native-gesture-handler';
 import {AppRegistry} from 'react-native';


import App,{age,func} from './StylingLayouts/App';//App kısmı default, {age} kımsı tekil export edilmiştir. Tekil exportlar süslü parentez içerisinde yazılmaktadır.

import App2 from './StylingLayouts/App2';
import App3 from './StylingLayouts/App3';
import App4 from './StylingLayouts/App4';

import HomeScreen from './CoreComponents/HomeScreen'
//import ShoppingList from './CoreComponents/ShoppingList'
//import Counter from './State/Counter'
import ShoppingList from './State/ShoppingList'
import Counter from './CustomComponents/Counter'
import CounterAdvanced from './CustomComponents/CounterAdvanced'

import MainNavigation from './Navigation/MainNavigation';
import MainNavigationTabs from './Navigation/MainNavigationTabs';
import AsyncAwait from './APIRequests/AsyncAwait';
import ShoppingListWithApi from './APIRequests/ShoppingListWithAPI';
import HarcamaTakibi from './APIRequests/HarcamaTakibi';

import {name as appName} from './app.json';
//pull için ekleme


AppRegistry.registerComponent(appName, () => HarcamaTakibi);
