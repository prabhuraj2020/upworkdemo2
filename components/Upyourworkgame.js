import { Grid, Card, Text } from "@nextui-org/react";
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Button } from "@nextui-org/react";

export default function Upyourworkgame() {

  return (
      <Grid.Container gap={2}>
          <Grid xs={6}>
              <Image
                  src="/martig.png"
                  alt="Work game Banner"
                  width={550}
                  height={400}
                  priority
              />
          </Grid>
          <Grid xs={6} className={styles.howWork} align="left">
              <Text h1>Up your work game, it’s free.</Text>
              <Text h3>No cost to join.</Text>
              <Text h5>Register and browse professionals, explore projects, or even book a consultation.</Text>
              <Text h3>Post a job and hire top talent.</Text>
              <Text h5>Finding talent doesn’t have to be a chore. Post a job or we can search for you!</Text>
              <Text h3>Work with the best—without breaking the bank.</Text>
              <Text h5>Upwork makes it affordable to up your work and take advantage of low transaction rates.</Text>
              <Grid.Container gap={2}>
              <Grid>
              <Button color="success" auto rounded>
                  Sign up for free
              </Button>
              </Grid>
              <Grid>
                  <Button auto color="success" rounded bordered>
                      Learn how to hire
                  </Button>
              </Grid>
              </Grid.Container>
          </Grid>
      </Grid.Container>
  );
}
