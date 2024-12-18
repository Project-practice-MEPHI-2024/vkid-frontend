'use client';

import React, {useEffect} from 'react';
import {Tag} from '@/shared/Components/Tag/ui/tag';
import {useRouter} from 'next/navigation';
import {useGetThreads} from '@/entities/thread/queries/useGetThreads';
import {Box, Table} from '@chakra-ui/react';
import {useThreadStore} from '@/entities/thread/stores/threadStore';

const ThreadsTable = () => {
  const {threads, loaded, error, fetchThreads} = useGetThreads();
  const setThreads = useThreadStore(state => state.setThreads);
  const router = useRouter();

  useEffect(() => {
    fetchThreads(1, 10);
  }, []);

  if (loaded) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{color: 'red'}}>{error}</p>;
  }
  const handleClick = (threadId: string) => {
    router.push(`/thread/${threadId}`);
    setThreads(threads);
  };

  return (
    <Table.Root
      interactive
      borderRadius="20px"
      padding="10px"
      variant="outline">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Title</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Categories</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {threads?.map(thread => (
          <Table.Row onClick={() => handleClick(thread.ID)} key={thread.ID}>
            <Table.Cell>{thread.title}</Table.Cell>
            <Table.Cell>
              <Box gap="2" display="flex" justifyContent="flex-end">
                {thread.categories.map(categorie => (
                  <Tag key={categorie} colorScheme="purple">
                    {categorie}
                  </Tag>
                ))}
              </Box>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default ThreadsTable;
