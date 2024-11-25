import React from 'react';
import {Box, Container, Tabs, Link} from "@chakra-ui/react"
import styles from "./styles.module.css"

const Home = () => {
    return (
        <Box>
            <Container className={styles.buttns}>
                <Tabs.Root defaultValue="latest">

                    <Tabs.List className={styles.tabs_list}>
                        <Tabs.Trigger className={styles.tabs_trigger} value="latest" asChild >
                            <Link href={"#latest"}>
                                latest
                            </Link>
                        </Tabs.Trigger>

                        <Tabs.Trigger className={styles.tabs_trigger} value="categories" asChild>
                            <Link href={"#categories"}>
                                categories
                            </Link>
                        </Tabs.Trigger>

                        <Tabs.Trigger className={styles.tabs_trigger} value="tags" asChild>
                            <Link href={"#tags"}>
                                tags
                            </Link>
                        </Tabs.Trigger>
                    </Tabs.List>

                    <Tabs.Content value="latest">
                        latest
                    </Tabs.Content>

                    <Tabs.Content  value="categories">
                        categories
                    </Tabs.Content>

                    <Tabs.Content  value="tags">
                        tags
                    </Tabs.Content>
                </Tabs.Root>
            </Container>
        </Box>
    );
};

export default Home