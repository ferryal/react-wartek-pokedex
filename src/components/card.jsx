import React from 'react';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Stack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Card({
  img, name, types,
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
      </Box>
    </Center>
  );
}
