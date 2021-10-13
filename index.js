/**
 * @format
 */

import {AppRegistry} from 'react-native';


import App,{age,func} from './StylingLayouts/App';//App kısmı default, {age} kımsı tekil export edilmiştir. Tekil exportlar süslü parentez içerisinde yazılmaktadır.

import App2 from './StylingLayouts/App2';
import App3 from './StylingLayouts/App3';
import App4 from './StylingLayouts/App4';

import HomeScreen from './CoreComponents/HomeScreen'
import ShoppingList from './CoreComponents/ShoppingList'

import {name as appName} from './app.json';



AppRegistry.registerComponent(appName, () => HomeScreen);
