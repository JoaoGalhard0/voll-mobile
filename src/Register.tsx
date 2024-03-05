import { VStack, Image, Text, Box, FormControl, Input, Button, Link, Checkbox, ScrollView } from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Title } from './components/Title';
import { InputText } from './components/InputText';
import { Buton } from './components/Button';
import { useState } from 'react';
import { sections } from './utils/registerInputText';

export default function Register() {
  const [numberSection, setNumSection] = useState(0);
 

  function advanceSection() {
    if (numberSection < sections.length - 1) {
      setNumSection(numberSection + 1)
    }
  }

  function backSection() {
    if (numberSection > 0) {
      setNumSection(numberSection - 1)
    }
  }

  return (
    <ScrollView flex={1}  p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center"/>

      <Title color="gray.800">
        {sections[numberSection].title}
      </Title>
      <Box>
        {
          sections[numberSection]?.inputText?.map(input => {
            return <InputText label={input.label} placeholder={input.placeholder} key={input.id} />
          })
        }
      </Box>

      <Box>
        <Text color="blue.500" fontWeight="bold" fontSize="md" mt={2} mb={2}>
          Selecione o plano:
        </Text>
        {
          sections[numberSection].checkbox.map(checkbox => {
            return <Checkbox key={checkbox.id} value={checkbox.value}>
              {checkbox.value}
            </Checkbox>
          })
        }
      </Box>

      {numberSection > 0 && <Buton onPress={() => backSection()} bgColor='gray.400'> Voltar</Buton>}

      <Buton onPress={() => advanceSection()} mt={4} mb={20}> Avançar</Buton>


    </ScrollView>
  );
}


