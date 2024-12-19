import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import {
  Link,
  Textarea,
  Tabs,
  Card,
  Button,
  Input,
  Tag,
  Flex,
  Alert,
  AlertTitle,
  Box,
} from '@chakra-ui/react';
import ThreadsTable from '@/app/Home/ui/ThreadsTable/ThreadsTable';
import {useValidate} from '@/entities/user/queries/useValidate';
import {RxCross2} from 'react-icons/rx';
import {CreateThreadRequest} from '@/entities/thread';
import {usePostThread} from '@/entities/thread/queries/usePostThread';

const NavigationTabs = () => {
  const isAuthenticated = useValidate();
  const [threadForm, setThreadForm] = useState<CreateThreadRequest>({
    title: '',
    categories: [],
  });

  const {createThread, success} = usePostThread();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setThreadForm(prev => ({...prev, [name]: value}));
  };

  const handleCategoryKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const input = e.currentTarget.value.trim();
      if (input && !threadForm.categories.includes(input)) {
        setThreadForm(prev => ({
          ...prev,
          categories: [...prev.categories, input],
        }));
      }
      e.currentTarget.value = '';
    }
  };

  const handleDeleteCategorie = (categorie: string) => {
    setThreadForm(prev => ({
      ...prev,
      categories: prev.categories.filter(cat => cat !== categorie),
    }));
  };

  return (
    <Tabs.Root
      defaultValue="threads"
      fontFamily={'Faculty Glyphic'}
      width="100%">
      <Tabs.List className={styles.tabs_list}>
        <Tabs.Trigger className={styles.tabs_trigger} value="threads" asChild>
          <Link>Threads</Link>
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="threads">
        {isAuthenticated ? (
          <Card.Root width="40%" marginBottom="1.5em">
            <Card.Body gap="2">
              <Card.Title mt="2">Enter a Thread</Card.Title>
              <Card.Description>
                <Textarea
                  placeholder="Your important text"
                  name="title"
                  value={threadForm.title}
                  onChange={handleChange}
                />
                <Flex gap="1" margin="0.5rem 0 0.2rem 0">
                  {threadForm.categories?.map((category: string, index) => (
                    <Tag.Root asChild variant="solid" key={index}>
                      <Tag.Label>
                        {category}
                        <RxCross2
                          onClick={() => handleDeleteCategorie(category)}
                        />
                      </Tag.Label>
                    </Tag.Root>
                  ))}
                </Flex>
                <Input
                  placeholder="Enter a category"
                  onKeyDown={handleCategoryKeyDown}
                />
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="outline">Clear</Button>
              <Button onClick={() => createThread(threadForm)}>Post</Button>
            </Card.Footer>
          </Card.Root>
        ) : (
          ''
        )}
        <ThreadsTable />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default NavigationTabs;
