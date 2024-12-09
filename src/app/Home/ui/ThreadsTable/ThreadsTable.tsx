'use client';

import React from 'react';
import {Box, Flex, HStack, Text} from '@chakra-ui/react';
import {Tag} from '@/app/shared/Components/Tag/ui/tag';
import {Avatar} from '@/app/shared/Components/Avatar/ui/avatar';
import {useRouter} from 'next/navigation';

const ThreadsTable = () => {
  const router = useRouter();
  const handleClick = (threadId: string) => {
    router.push(`/thread/${threadId}`);
  };
  return (
    <Box maxW="container.lg">
      {/* Заголовок таблицы */}
      <Box fontWeight="bold" bg="gray.100" p={4} borderRadius="md">
        <Flex>
          <Text flex="2">Title</Text>
          <Text flex="3">Tags</Text>
          <Text flex="2">Category</Text>
          <Text flex="2">Avatars</Text>
          <Text flex="1">Posts</Text>
          <Text flex="1">Last Activity</Text>
        </Flex>
      </Box>

      {/* Строка данных */}
      <Box
        p={4}
        _hover={{bg: 'gray.50'}}
        borderBottom="1px solid"
        borderColor="gray.200"
        onClick={() => handleClick('1')}>
        <Flex align="center">
          <Text flex="2">New Relic Agent</Text>
          <Flex flex="3" gap={2}>
            <Tag colorScheme="purple">bandit</Tag>
            <Tag colorScheme="blue">newrelic</Tag>
            <Tag colorScheme="pink">phoenix</Tag>
          </Flex>
          <Text flex="2" color="purple.500" fontWeight="semibold">
            Questions / Help
          </Text>
          <HStack flex="2" gap="3">
            <Avatar name="User 1" src="https://bit.ly/ryan-florence" ml={-2} />
            <Avatar name="User 2" src="https://bit.ly/prosper-baba" ml={-2} />
            <Avatar name="User 3" src="https://bit.ly/code-beast" ml={-2} />
          </HStack>
          <Text flex="1">5</Text>
          <Text flex="1">6m ago</Text>
        </Flex>
      </Box>

      {/* Повторение строк */}
      <Box
        p={4}
        _hover={{bg: 'gray.50'}}
        borderBottom="1px solid"
        borderColor="gray.200">
        <Flex align="center">
          <Text flex="2">Another Topic</Text>
          <Flex flex="3" gap={2}>
            <Tag colorScheme="green">tag1</Tag>
            <Tag colorScheme="orange">tag2</Tag>
          </Flex>
          <Text flex="2" color="purple.500" fontWeight="semibold">
            Feedback
          </Text>
          <HStack flex="2" gap="3">
            <Avatar name="User 4" src="https://bit.ly/sage-adebayo" ml={-2} />
            <Avatar name="User 5" src="https://bit.ly/dan-abramov" ml={-2} />
          </HStack>
          <Text flex="1">12</Text>
          <Text flex="1">1h ago</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default ThreadsTable;
