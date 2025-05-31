import React, { FC, useEffect, useState } from 'react';
import {
  Button,
  Card,
  Collapsible,
  Separator,
  Text,
  Textarea,
  Flex
} from '@chakra-ui/react';
import getFormattedDate from '@/shared/utils/getFormattedDate';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot
} from '@/shared/Components/Timeline/ui/timeline';
import { Post as PostType } from '@/entities/post/types/postTypes';
import { useGetCommentsWithPostId } from '@/entities/comment/queries/useGetCommentsWithPostId';
import { CreateCommentRequest } from '@/entities/comment/types/commentTypes';
import { useCreateComment } from '@/entities/comment/queries/useCreateComment';
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger
} from '@/shared/Components/Drawer/ui/drawer';
import { FaPlus } from 'react-icons/fa';

import LikeButton from '@/shared/components/LikeButton';

type Props = {
  post: PostType;
};

const Post: FC<Props> = ({ post }) => {
  const [commentForm, setCommentForm] = useState<CreateCommentRequest>({
    content: '',
    post_id: post.ID
  });
  const { createComment, success } = useCreateComment();
  const { comments, fetchComments } = useGetCommentsWithPostId();
  const [opened, setOpened] = useState<boolean>(false);

  useEffect(() => {
    fetchComments(post.ID, 1, 100);
  }, [success]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCommentForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Card.Root marginTop="2em" key={post.ID}>
      <Card.Body gap="2">
        <Card.Description mt="2">{post.content}</Card.Description>
        <Card.Description mt="2" fontFamily="Faculty Glyphic">
          {getFormattedDate(post.CreatedAt)}
        </Card.Description>
        <Flex align="center" mt="1">
          <LikeButton targetId={post.ID} initialLiked={false} />
        </Flex>
        <Card.Footer padding="0">
          <Collapsible.Root
            width="100%"
            onOpenChange={() => setOpened(!opened)}
          >
            <Collapsible.Trigger>
              <Button variant="outline" margin="1.5rem 0 1.5rem 0">
                {opened ? 'Close' : 'View comments'}
              </Button>
            </Collapsible.Trigger>

            <Collapsible.Content>
              <Separator margin="1em 0 1em 0" />

              <TimelineRoot>
                <DrawerRoot placement={'bottom'}>
                  <DrawerBackdrop />
                  <DrawerTrigger asChild width="fit-content">
                    <Button
                      variant="outline"
                      size="sm"
                      margin="1.5em 0 1.5em 0"
                    >
                      <FaPlus style={{ marginRight: '0.5rem' }} />
                      Write a comment
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent roundedTop={'l3'}>
                    <DrawerHeader>
                      <DrawerTitle>Enter a comment</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                      <Textarea
                        placeholder="Your important comment"
                        name="content"
                        value={commentForm.content}
                        onChange={handleChange}
                      />
                    </DrawerBody>
                    <DrawerFooter>
                      <DrawerActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                      </DrawerActionTrigger>
                      <DrawerActionTrigger asChild>
                        <Button onClick={() => createComment(commentForm)}>
                          Publish
                        </Button>
                      </DrawerActionTrigger>
                    </DrawerFooter>
                    <DrawerCloseTrigger />
                  </DrawerContent>
                </DrawerRoot>
                {comments?.map(comment => (
                  <TimelineItem key={comment.ID}>
                    <TimelineConnector />
                    <TimelineContent>
                      <TimelineDescription fontFamily="Faculty Glyphic">
                        {getFormattedDate(comment.CreatedAt)}
                      </TimelineDescription>
                      <Flex align="center" mt="1">
                        <Text textStyle="sm">{comment.content}</Text>
                        <LikeButton
                          targetId={comment.ID}
                          initialLiked={false}
                        />
                      </Flex>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </TimelineRoot>
            </Collapsible.Content>
          </Collapsible.Root>
        </Card.Footer>
      </Card.Body>
    </Card.Root>
  );
};

export default Post;
