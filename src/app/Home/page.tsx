'use client';
import React from 'react';
import styles from './styles.module.css';
import {Box, Container} from '@chakra-ui/react';
import NavigationTabs from '@/app/Home/ui/Tabs/NavigationTabs';
import {useValidate} from '@/entities/user/queries/useValidate';

const Home = () => {
  return (
    <Box>
      <Container className={styles.buttons}>
        <NavigationTabs />
      </Container>
    </Box>
  );
};

export default Home;
