import { Grid, Card, Text, Link } from "@nextui-org/react";
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Button } from "@nextui-org/react";
export default function Whybusinesses() {

    return (
        <Grid.Container gap={2} className={styles.marginBottom30}>
            <Grid xs={8}>
                <Card variant="flat" className={styles.whyBusiness}>
                    <Card.Body>
                        <Text h1 color="#000000">Why businesses
                            turn to Upwork</Text>
                    </Card.Body>
                    <Grid.Container gap={2}>
                        <Grid>
                            <Text h3 align="left" color="#000000">Proof of quality</Text>
                            <Text h5 align="left" color="#000000">Check any pro’s work samples, client reviews, and identity verification.</Text>
                        </Grid>
                        <Grid>
                            <Text h3 align="left" color="#000000">No cost until you hire</Text>
                            <Text h5 align="left" color="#000000">Interview potential fits for your job, negotiate rates, and only pay for work you approve.</Text>
                        </Grid>
                        <Grid>
                            <Text h3 align="left" color="#000000">Safe and secure</Text>
                            <Text h5 align="left" color="#000000">Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it.</Text>
                        </Grid>
                    </Grid.Container>
                </Card>
            </Grid>
            <Grid xs={4}>
                <Card variant="flat" className={styles.worldsWork}>
                    <Card.Body>
                        <Text h1 color="#ffffff">We're the worlds work marketplace</Text>
                    </Card.Body>
                    <Grid.Container gap={2}>
                        <Grid>
                            <Text h3 align="left" color="#ffffff">4.9/5</Text>
                            <Text h5 align="left" color="#ffffff">Clients rate professionals on Upwork</Text>
                        </Grid>
                        <Grid>
                            <Text h3 align="left" color="#ffffff">Award winner</Text>
                            <Text h5 align="left" color="#ffffff">G2’s 2021 Best Software Awards</Text>
                        </Grid>
                    </Grid.Container>
                </Card>
            </Grid>
        </Grid.Container>
    );
}
