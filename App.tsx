import { NativeBaseProvider, StatusBar } from 'native-base'

import { THEMES } from './src/styles/themes';
import Routes from './src/routes';

export default function App() {
  return (
    <NativeBaseProvider theme={THEMES}>
      <StatusBar backgroundColor={THEMES.colors.blue[800]} />
      <Routes />
    </NativeBaseProvider>
  );
}


