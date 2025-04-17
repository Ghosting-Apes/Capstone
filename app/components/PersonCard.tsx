import { Card, Image, Text, Button, Group } from '@mantine/core';

import styles from "./styles/CardHover.module.css";

export default function PersonCard(props: any) {
    let {name, desc, imgURL} = props;
    return (
        <div className="flex pb-10">
            <Card 
            shadow='lg' 
            w={300}
            component='a'
            href={"people/" + name.split(' ').join('-') + "/info"}
            className={styles.element}
            >
                <Image 
                    src={imgURL} 
                    alt="Sample image" 
                />
                <Group justify="center"  mt="md" mb="xs">
                    <Text fw={500}>{name ?? "no-title"}</Text>
                </Group>
                <Text size="sm" c="dimmed">{desc ?? "no-desc"}</Text>
            </Card>
        </div>
    )
}