/** @format */

import {AppRegistry} from 'react-native';
import Agenda from './src/screens/Agenda'
import {name as appName} from './app.json';
import Navigator from './src/Navigator'

AppRegistry.registerComponent(appName, () => Navigator);
