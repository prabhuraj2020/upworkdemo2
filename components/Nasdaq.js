import { Grid, Card, Text, Link } from "@nextui-org/react";
import styles from '@/styles/Home.module.css'

export default function Nasdaq() {

    return (
        <Grid.Container gap={2} className={styles.marginBottom30}>
        <Grid xs={6}>
            <Card variant="flat" className={styles.enterpriseSuite}>
                <Card.Body>
                    <Text h1 color="#ffffff">Nasdaq</Text>
                    <div className={styles.howWork}>
                        <Text h4 align="left" color="#ffffff">“Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”</Text>
                        <Text h5 align="left" color="#ffffff">Josh Machiz, Chief Digital Officer</Text>
                        <Text h5 align="left" color="#ffffff">Results</Text>
                    </div>
                </Card.Body>
                <Grid.Container gap={2}>
                    <Grid>
                        <Text h3 align="left" color="#ffffff">Emmy Winning</Text>
                        <Text h5 align="left" color="#ffffff">Facebook Watch program</Text>
                    </Grid>
                    <Grid>
                        <Text h3 align="left" color="#ffffff">Millions</Text>
                        <Text h5 align="left" color="#ffffff">of impressions generated per client per IPO</Text>
                    </Grid>
                </Grid.Container>
            </Card>
        </Grid>
        <Grid xs={6}>
            <Card variant="flat" className={styles.microsoftBoxcolor}>
                <Card.Body>
                    <Text h1 color="#ffffff">Microsoft</Text>
                    <div className={styles.howWork}>
                        <Text h4 align="left" color="#ffffff">“One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.”</Text>
                        <Text h5 align="left" color="#ffffff">Carol Taylor, Director of Content Experience</Text>
                        <Text h5 align="left" color="#ffffff">Results</Text>
                    </div>
                </Card.Body>
                <Grid.Container gap={2}>
                    <Grid>
                        <Text h3 align="left" color="#ffffff">50% Faster</Text>
                        <Text h5 align="left" color="#ffffff">launch of projects</Text>
                    </Grid>
                    <Grid>
                        <Text h3 align="left" color="#ffffff">10,000</Text>
                        <Text h5 align="left" color="#ffffff">projects completed</Text>
                    </Grid>
                </Grid.Container>
            </Card>
        </Grid>
    </Grid.Container>
    );
}
