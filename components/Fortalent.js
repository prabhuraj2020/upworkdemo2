import { Grid, Card, Text, Link } from "@nextui-org/react";
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Button } from "@nextui-org/react";

export default function Fortalent() {

    return (
        <Card className={`${styles.forTalent} ${styles.marginBottom30}`}>
            <Grid.Container>
                <Grid xs={6} className={styles.fortalentWomen}>
                    <Image
                        src="/find-great-work@2x.jpg"
                        alt="Talent Women"
                        width={620}
                        height={550}
                    />
                </Grid>
                <Grid xs={6} className={styles.enterpriseDark}>
                    <Grid.Container>
                        <Grid xs={12}>
                            <Text className={styles.white} h3 css={{ lineHeight: "$xs" }}>
                                For Talent
                            </Text>
                        </Grid>
                        <Grid xs={12}>
                            <Text className={styles.white} h1 css={{ lineHeight: "$xs" }}>
                                Find great work
                            </Text>
                        </Grid>
                        <Grid xs={9}>
                            <Text h4 className={styles.white}>Meet clients you’re excited to work with and take
                                your career or business to new heights.</Text>
                        </Grid>
                        <Grid xs={12}>
                            <Button color="primary" auto rounded>
                                Find opportunities
                            </Button>
                        </Grid>
                    </Grid.Container>
                </Grid>
            </Grid.Container>
        </Card>
    );
}
