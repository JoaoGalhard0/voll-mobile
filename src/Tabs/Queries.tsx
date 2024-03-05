import { VStack, Divider, ScrollView } from 'native-base'
import { QuerieCard } from '../components/QuerieCard'
import { Title } from '../components/Title'
import { Buton } from '../components/Button'


export default function Queries() {
    return (
        <ScrollView p="5">
            <Title color="blue.500"  >Minhas Consultas</Title>
            <Buton mt={5} mb="5">Agendar nova consulta</Buton>

            <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb="2">Próximas consultas</Title>
            <QuerieCard
                name="Dr. Andre"
                specialty='Cardiiologista'
                photo='https://github.com/andreocunha.png'
                data='20/04/2023'
                scheduled
            />
            <Divider mt="5" />

            <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb="2">Consultas passadas</Title>
            <QuerieCard
                name="Dr. Andre"
                specialty='Cardiiologista'
                photo='https://github.com/andreocunha.png'
                data='20/04/2023'
                attended
            />
            <QuerieCard
                name="Dr. Andre"
                specialty='Cardiiologista'
                photo='https://github.com/andreocunha.png'
                data='20/04/2023'
                attended
            />
            <QuerieCard
                name="Dr. Andre"
                specialty='Cardiiologista'
                photo='https://github.com/andreocunha.png'
                data='20/04/2023'
                attended
            />
        </ScrollView>


    )
}