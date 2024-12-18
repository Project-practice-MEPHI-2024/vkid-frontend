'use client';
import React, {useEffect} from 'react';
import {useThreadStore} from '@/entities/thread/stores/threadStore';
import {Box, Container, Card, Button, Separator} from '@chakra-ui/react';
import getFormattedDate from '@/shared/utils/getFormattedDate';
import {Tag} from '@/shared/Components/Tag/ui/tag';
import {useGetPosts} from '@/entities/post/queries/useGetPosts';

const ThreadPage = ({params}: {params: {id: string}}) => {
  const thread = useThreadStore(state => state.threads).find(
    thread => thread.ID === params.id,
  );
  const {posts, loaded, error, fetchPosts} = useGetPosts(params.id);

  useEffect(() => {
    fetchPosts(1, 10);
  }, []);

  if (thread == null) {
    return <>Not found this thread</>;
  }

  return (
    <Container>
      <Card.Root marginTop="2em">
        <Card.Body gap="2">
          <Card.Title mt="2">{thread.title}</Card.Title>
          <Card.Description>
            <Box display="flex" gap="2">
              {thread.categories.map(categorie => (
                <Tag key={categorie} colorScheme="purple">
                  {categorie}
                </Tag>
              ))}
            </Box>
          </Card.Description>
          <Card.Description mt="2" fontFamily="Faculty Glyphic">
            {getFormattedDate(thread.CreatedAt)}
          </Card.Description>
        </Card.Body>
      </Card.Root>

      {posts.length > 0 ? (
        <Box>
          <Separator margin="2em 0 2em 0" />
          {posts.map(post => (
            <Card.Root marginTop="2em" key={post.ID}>
              <Card.Body gap="2">
                <Card.Description mt="2">{post.content}</Card.Description>
                <Card.Description mt="2" fontFamily="Faculty Glyphic">
                  {getFormattedDate(post.CreatedAt)}
                </Card.Description>
              </Card.Body>
            </Card.Root>
          ))}
        </Box>
      ) : (
        <Box>This thread has no posts</Box>
      )}
    </Container>
  );
};

export default ThreadPage;
