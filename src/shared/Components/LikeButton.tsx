import React, { FC, useState } from 'react';
import { IconButton, Icon, Tooltip } from '@chakra-ui/react';

type LikeButtonProps = {
 
  targetId?: number | string;
  
  initialLiked?: boolean;
};

const LikeButton: FC<LikeButtonProps> = ({ targetId, initialLiked = false }) => {
  const [liked, setLiked] = useState<boolean>(initialLiked);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <Tooltip label={liked ? 'Убрать лайк' : 'Поставить лайк'} fontSize="sm">
      <IconButton
        aria-label={liked ? 'Убрать лайк' : 'Поставить лайк'}
        onClick={toggleLike}
        variant="ghost"
        size="sm"
        color={liked ? 'red.500' : 'gray.500'}
        icon={
          <Icon viewBox="0 0 24 24" boxSize={5}>
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill={liked ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="2"
            />
          </Icon>
        }
      />
    </Tooltip>
  );
};

export default LikeButton;
