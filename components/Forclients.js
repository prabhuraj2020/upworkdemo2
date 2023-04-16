import { Grid, Card, Text, Link } from "@nextui-org/react";
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Button } from "@nextui-org/react";

export default function Forclients() {

  return (
      <Card className={`${styles.forClients} ${styles.marginBottom30}`}>
          <Card.Header>
              <Grid.Container>
                  <Grid xs={6} className={styles.howWork}>
                      <Text h3 className={styles.white}>For clients</Text>
                      <Text h2 className={styles.white}>Find talent</Text>
                      <Text h2 className={styles.white}>your way</Text>
                      <Text h3 className={styles.white}>Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.</Text>
                  </Grid>
              </Grid.Container>
          </Card.Header>
          <Grid.Container gap={2}>
              <Grid xs={4}>
                  <Card variant="flat" className={styles.clientsBoxcolor}>
                      <Card.Body>
                          <Text h3 color="#ffffff">Post a job and hire a pro</Text>
                          <div className={styles.clientsBox}>
                              <Text h4 align="left" color="#ffffff">Talent Marketplace</Text>
                          </div>
                      </Card.Body>
                  </Card>
              </Grid>
              <Grid xs={4}>
                  <Card variant="flat" className={styles.clientsBoxcolor}>
                      <Card.Body>
                          <Text h3 color="#ffffff">Browse and buy projects</Text>
                          <div className={styles.clientsBox}>
                              <Text h4 align="left" color="#ffffff">Project Catalog</Text>
                          </div>
                      </Card.Body>
                  </Card>
              </Grid>
              <Grid xs={4}>
                  <Card variant="flat" className={styles.clientsBoxcolor}>
                      <Card.Body>
                          <Text h3 color="#ffffff">Let us help you find the right talent</Text>
                          <div className={styles.clientsBox}>
                              <Text h4 align="left" color="#ffffff">Talent Scout</Text>
                          </div>
                      </Card.Body>
                  </Card>
              </Grid>
          </Grid.Container>
                </Card>
  );
}
