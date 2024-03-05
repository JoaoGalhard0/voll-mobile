import { Text, Avatar, VStack } from 'native-base'
import { Buton } from './Button'

interface CardProps {
    name: string;
    photo: string;
    specialty: string;
    data?: string;
    attended?: boolean;
    scheduled?: boolean;
}

export function QuerieCard({
    name,
    photo,
    data,
    specialty,
    attended,
    scheduled
}: CardProps) {
    return (
        <VStack w="100%" bg={attended ? 'blue.100' : 'white'} p="5" borderRadius="lg" shadow="2" mb={5}>
            <VStack flexDir="row" >
                <Avatar source={{ uri: photo }} size="lg" />
                <VStack pl="4">
                    <Text fontSize="md" bold>{name}</Text>
                    <Text>{specialty}</Text>
                    <Text>{data}</Text>
                </VStack>

            </VStack>


            <Buton mt={4}>
               {scheduled ? 'Cancelar Consulta' : 'Agendar Consulta'}
            </Buton>

        </VStack>
    )
}