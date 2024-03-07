import { NativeBaseProvider, StatusBar } from 'native-base'

import { THEMES } from './src/styles/themes';
import Routes from './src/routes';
import { useEffect } from 'react';
import api from './src/services/api';

export default function App() {

  useEffect(() => {
    async function getData() {
      const result = await api.get('/paciente')
      console.log(result.data)
    }
    getData()
  }, [])
  
  return (
    <NativeBaseProvider theme={THEMES}>
      <StatusBar backgroundColor={THEMES.colors.blue[800]} />
      <Routes />
    </NativeBaseProvider>
  );
}


