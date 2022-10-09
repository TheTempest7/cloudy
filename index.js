/**
 * @format
 */
import reactotron from 'reactotron-react-native';
if (__DEV__) {
    import('./ReactotronConfig').then(() => reactotron.log('Reactotron Configured'))
}
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
