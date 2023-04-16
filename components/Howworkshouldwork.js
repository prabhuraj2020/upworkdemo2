import { Grid, Card, Text } from "@nextui-org/react";
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Button } from "@nextui-org/react";

export default function Howworkshouldwork() {

  return (
    <Grid.Container gap={2}>
                <Grid xs={6} className={styles.howWork} align="left">
                    <Text h1>How work
                        should work</Text>
                    <Text h3>Forget the old rules. You can have the best people.</Text>
                        <Text h3>Right now. Right here.</Text>
                    <Button color="success" auto rounded>
                        Get Started
                    </Button>
                </Grid>
        <Grid xs={6} className={styles.workImage}>
            <Image
                src="/globe@1x.jpg"
                alt="Ukraine help"
                width={400}
                height={400}
                priority
            />
        </Grid>
    </Grid.Container>
  );
}
