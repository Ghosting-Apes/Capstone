import { Card, Image, Text, Group } from '@mantine/core';

import styles from "./styles/CardHover.module.css";

export enum CardType {
    Person = "person",
    Work = "work",
    Place = "place",
    Miscellaneous = "misc"
}

export default function DataCard(props: {name: string, caption?: string, imgURL?: string, cardType: CardType}) {
    const {name, caption, imgURL, cardType} = props;

    const getUrlRoute = () => {
        const formattedName = name.split(' ').join('_');

        if (cardType === CardType.Work) {
            return `/work/` + formattedName;
        } else if (cardType === CardType.Person) {
            return `/people/` + formattedName + "/info";
        } else if (cardType === CardType.Miscellaneous) {
            return `/misc/` + formattedName;
        } else if (cardType === CardType.Place) {
            return `/place/` + formattedName;
        }
    }

    return (
        <div className="flex pb-10">
            <Card 
            shadow='lg' 
            w={200}
            component='a'
            href={getUrlRoute()}
            className={styles.element}>
                <div style={{ width: '100%', height: 200, overflow: 'hidden' }}>
                    <Image 
                        src={imgURL} 
                        height={200}
                        alt="Sample image" 
                    />
                </div>
                <Group justify="center"  mt="md" mb="xs">
                    <Text fw={500}>{name ?? "no-title"}</Text>
                </Group>
                <Text size="sm" c="dimmed">{caption ?? "no-caption"}</Text>
            </Card>
        </div>
    )
}