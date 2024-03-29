import { VStack, Image, Text, Box, Link, useToast } from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Title } from './components/Title';
import { InputText } from './components/InputText';
import { Buton } from './components/Button';
import { useEffect, useState } from 'react';
import { doLogin } from './services/AutenticationService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';


export default function Login({ navigation }: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(true)
  const toast = useToast()

  useEffect( () => {
    async function checkLogin() {
      const token = await AsyncStorage.getItem('token')
      if (token) {
        navigation.replace('Tabs')
      }
      setLoading(false)
    }
    checkLogin()
  },[])

  async function login() {
    const result = await doLogin(email, password)
    if (result) {
      const { token } = result
      AsyncStorage.setItem('token', token)

      const tokenDecoded = jwtDecode(token) as any
      const pacientId = tokenDecoded.id
      AsyncStorage.setItem('pacientId', pacientId)
      navigation.replace('Tabs')
    }
    else {
      toast.show({
        title: 'Erro no Login',
        description: 'O email ou senha não conferem',
        backgroundColor: 'red.500'
      })
    }
  }

  if(loading) {
    return null
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />

      <Title color="blue.500">
        Faça Login em sua conta
      </Title>
      <Box>
        <InputText
          label="Email"
          placeholder='Insira seu endereço de e-mail'
          value={email}
          onChangeText={setEmail}
        />
        <InputText
          label="Senha"
          placeholder='Insira sua senha'
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </Box>
      <Buton onPress={login}>Entrar</Buton>

      <Link href='' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text color="blue.500">
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}


