import { Grid, Card, Text } from "@nextui-org/react";
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Button } from "@nextui-org/react";

export default function Supportukraine() {

  return (
    <Grid.Container className={`${styles.ukraineSection} ${styles.marginBottom30}`} gap={2} justify="center">
      <Grid>
        <Text h1>We support Ukraine</Text>
        <Text h4>We are taking action to help our freelancers, our clients, and the people of Ukraine—and so can you.</Text>
      <Button auto color="success" rounded bordered>
                Learn more
              </Button>
      </Grid>
      <Grid>
              <Image
                src="/ukraine-help.svg"
                alt="Ukraine help"
                width={250}
                height={150}
                priority
              />

      </Grid>
    </Grid.Container>
  );
}
