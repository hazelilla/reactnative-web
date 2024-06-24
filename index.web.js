// index.web.js
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './index.css'; // Ensure you have a CSS file to include basic styling

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
