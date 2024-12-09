import React from 'react';
import {Button, Container, Flex, IconButton, Link} from '@chakra-ui/react';
import {LuSearch} from 'react-icons/lu';
import styles from './styles.module.css';

const Navbar = () => {
  return (
    <Container className={styles.navbar}>
      <Flex direction="row" justify="space-between">
        <Link href="/" className={styles.logo}>
          Papaya
        </Link>
        <Flex gap={5} align="center">
          <Button>Sign Up</Button>
          <Button>Log In</Button>
          <IconButton aria-label="Search database">
            <LuSearch />
          </IconButton>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
