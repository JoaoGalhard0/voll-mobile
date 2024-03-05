import { VStack, Text, Image, Box, ScrollView, TextArea, Divider} from 'native-base'
import Logo from '../assets/Logo.png';
import { Buton } from '../components/Button';
import { InputText } from '../components/InputText';
import { Title } from '../components/Title';
import { depositions } from '../utils/moc';

export default function Mainl(){

    return (
      <ScrollView flex={1} bgColor="white">
        <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
          <Image source={Logo} alt="Logo" mt={10} />
          <Title color="blue.500">Boas-vindas!</Title>
  
          <Box w="100%" borderRadius="lg" p={3} mt={10} shadow="1" borderRightRadius="md">
            <InputText
              placeholder="Digite a especialidade"
            />
            <InputText
              placeholder="Digite sua localização"
            />
            <Buton mt={3} mb={3}>
              Buscar
            </Buton>
          </Box>
  
          <Title color="blue.800" alignSelf="center">Depoimentos</Title>
          <VStack space={3} divider={<Divider />} w="100%">
            {
              depositions.map(deposition => (
                <Box key={deposition.id} w="100%" borderRadius="lg" p={3}>
                  <Text color="gray.300" fontSize="md" textAlign="justify">
                    {deposition.text}
                  </Text>
                  <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt="2">{deposition.title}</Text>
                </Box>
              ))
            }
          </VStack>
        </VStack>
      </ScrollView>
    );
  }