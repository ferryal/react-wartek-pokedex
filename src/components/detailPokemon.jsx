import React from 'react';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

export default function detailPokemon({
  img, name, types, abilities, stats,
}) {
  return (
    <Center py={6}>
      <Box
        maxW="640px"
        w="full"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="2xl"
        rounded="lg"
        p={6}
        textAlign="center"
      >
        <Avatar
          size="xl"
          src={img}
          alt="Avatar Alt"
          mb={4}
          pos="relative"
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize="2xl" fontFamily="body">
          {name}
        </Heading>
        <Stack align="center" justify="center" direction="row" mt={6} flexFlow="wrap">
          <Text
            textAlign="center"
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            Ability
          </Text>
          {abilities !== undefined
            ? abilities.map((data, index) => (
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight="400"
                key={index + 1}
              >
                {data && data.ability ? data.ability.name : ''}
              </Badge>
            )) : ''}
        </Stack>
        <Stack align="center" justify="center" direction="row" mt={6} flexFlow="wrap">
          <Text
            textAlign="center"
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            Types
          </Text>
          {types !== undefined
            ? types.map((data, index) => (
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight="400"
                key={index + 1}
              >
                {data && data.type ? data.type.name : ''}
              </Badge>
            )) : ''}
        </Stack>
        <Stack align="center" justify="center" direction="row" mt={6} flexFlow="wrap">
          <Text
            textAlign="center"
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            Stats
          </Text>
          {stats !== undefined
            ? stats.map((data, index) => (
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight="400"
                key={index + 1}
              >
                { data && data.stat ? data.stat.name.toUpperCase() : '-'}
                :
                {' '}
                {data && data.stat && data.base_stat}
              </Badge>
            )) : ''}
        </Stack>
      </Box>
    </Center>
  );
}
