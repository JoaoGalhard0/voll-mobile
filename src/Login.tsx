import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Title } from './components/Title';
import { InputText } from './components/InputText';
import { Buton } from './components/Button';

export default function Login( { navigation } ) {
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
        />
        <InputText
          label="Senha"
          placeholder='Insira sua senha'
          secureTextEntry={true} 
        />
      </Box>
      <Buton onPress={() => navigation.navigate('Tabs')}>Entrar</Buton>
      
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


