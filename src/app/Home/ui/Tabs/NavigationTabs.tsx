import React from 'react';
import styles from './styles.module.css';
import {Link, Tabs} from '@chakra-ui/react';
import ThreadsTable from '@/app/Home/ui/ThreadsTable/ThreadsTable';

const NavigationTabs = () => {
  return (
    <Tabs.Root defaultValue="latest" fontFamily={'Faculty Glyphic'}>
      <Tabs.List className={styles.tabs_list}>
        <Tabs.Trigger className={styles.tabs_trigger} value="latest" asChild>
          <Link href={'#latest'}>latest</Link>
        </Tabs.Trigger>

        <Tabs.Trigger
          className={styles.tabs_trigger}
          value="categories"
          asChild>
          <Link href={'#categories'}>categories</Link>
        </Tabs.Trigger>

        <Tabs.Trigger className={styles.tabs_trigger} value="tags" asChild>
          <Link href={'#tags'}>tags</Link>
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="latest">
        <ThreadsTable />
      </Tabs.Content>

      <Tabs.Content value="categories">categories</Tabs.Content>

      <Tabs.Content value="tags">tags</Tabs.Content>
    </Tabs.Root>
  );
};

export default NavigationTabs;
