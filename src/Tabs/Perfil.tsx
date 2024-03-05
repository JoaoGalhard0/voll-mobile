import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'
import { Title } from '../components/Title'


export default function Perfil() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Title color="blue.500"> Meu Perfil</Title>

                <Avatar source={{ uri: "https://github.com/alura-cursos.png" }} mt={5} size="xl"/>

                <Title color="blue.500">Informações Pessoais</Title>
                <Title fontSize="lg" mb={1}>João Galhardo</Title>
                <Text>12/12/1998</Text>
                <Text>São Paulo</Text>
                
                <Divider mt={5}/>
                
                <Title color="blue.500" mb={1}>Histórico médico</Title>
                <Text>Bronquite</Text>
                <Text>Sinusite</Text>
            </VStack>
        </ScrollView>
    )
}