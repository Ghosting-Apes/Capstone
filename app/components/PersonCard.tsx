import { Card, Image, Text, Button, Group } from '@mantine/core';

import styles from "./styles/CardHover.module.css";

export default function PersonCard(props: any) {
    let {name, caption, imgURL} = props;
    return (
        <div className="flex pb-10">
            <Card 
            shadow='lg' 
            w={200}
            component='a'
            href={"people/" + name.split(' ').join('-') + "/info"}
            className={styles.element}>
                <Image 
                    src={imgURL} 
                    height={400}
                    alt="Sample image" 
                />
                <Group justify="center"  mt="md" mb="xs">
                    <Text fw={500}>{name ?? "no-title"}</Text>
                </Group>
                <Text size="sm" c="dimmed">{caption ?? "no-desc"}</Text>
            </Card>
        </div>
    )
}