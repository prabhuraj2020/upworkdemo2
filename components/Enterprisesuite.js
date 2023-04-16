import { Grid, Card, Text, Link } from "@nextui-org/react";
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Button } from "@nextui-org/react";

export default function Enterprisesuite() {

    return (
        <Card className={`${styles.enterpriseSuite} ${styles.marginBottom30}`}>
            <Grid.Container>
                <Grid xs={7} className={styles.enterpriseDark}>
                <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                        <Text className={styles.white} h3 css={{ lineHeight: "$xs" }}>
                            Enterprise Suite
                        </Text>
                    </Grid>
                    <Grid xs={12}>
                    <Text className={styles.white} h1 css={{ lineHeight: "$xs" }}>
                        This is how
                    </Text>
                    </Grid>
                    <Grid xs={12}>
                        <Text className={styles.enterpriseMint} h1 css={{ lineHeight: "$xs" }}>
                            good companies
                        </Text>
                    </Grid>
                    <Grid xs={12}>
                        <Text className={styles.enterpriseMint} h1 css={{ lineHeight: "$xs" }}>
                            find good company.
                        </Text>
                    </Grid>
                    <Grid xs={9}>
                        <Text h4 className={styles.white}>Access the top 1% of talent on Upwork, and a full suite of hybrid workforce management tools. This is how innovation works now.</Text>
                    </Grid>
                    <Grid xs={9}>
                        <Text h4 className={styles.white}>Access expert talent to fill your skill gaps</Text>
                    </Grid>
                    <Grid xs={9}>
                        <Text h4 className={styles.white}>Control your workflow: hire, classify and pay your talent</Text>
                    </Grid>
                    <Grid xs={9}>
                        <Text h4 className={styles.white}>Partner with Upwork for end-to-end support</Text>
                    </Grid>
                    <Grid xs={12}>
                        <Button color="primary" auto rounded>
                            Learn more
                        </Button>
                    </Grid>
                </Grid.Container>
            </Grid>
                <Grid xs={5} className={styles.upworkMan}>
                <Image
                    src="/hxwn-enterprise-image@2x.png"
                    alt="Upwork Man"
                    width={400}
                    height={500}
                />
            </Grid>
            </Grid.Container>
                    </Card>
    );
}
