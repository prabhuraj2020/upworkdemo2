import {Grid, Card, Text, Link} from "@nextui-org/react";
import styles from '@/styles/Home.module.css'
export default function Browsetalent() {

  return (
    <Grid.Container gap={2} className={styles.marginBottom30}>
      <Grid xs={12} className={styles.howWork}>
        <Text h1>Browse talent by category</Text>
      </Grid>

        <Grid xs={12} className={styles.lookingWork}>
            <Link><Text h4>Looking for work? <div className={styles.browseJobs}>Browse for jobs</div></Text></Link>
        </Grid>

                <Grid xs={3}>
                    <Card variant="flat" className={styles.talentCategory}>
                    <Card.Body>
                      <Text h3>Development & IT</Text>
                      <div className={styles.browseTalent}>
                      <Text h4 align="left">4.85/5</Text>
                      <Text h4>1853 skills</Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Grid>
        <Grid xs={3}>
            <Card variant="flat" className={styles.talentCategory}>
                <Card.Body>
                    <Text h3>Design & Creative</Text>
                    <div className={styles.browseTalent}>
                        <Text h4 align="left">4.91/5</Text>
                        <Text h4>968 skills</Text>
                    </div>
                </Card.Body>
            </Card>
        </Grid>
        <Grid xs={3}>
            <Card variant="flat" className={styles.talentCategory}>
                <Card.Body>
                    <Text h3>Sales & Marketing</Text>
                    <div className={styles.browseTalent}>
                        <Text h4 align="left">4.77/5</Text>
                        <Text h4>392 skills</Text>
                    </div>
                </Card.Body>
            </Card>
        </Grid>
        <Grid xs={3}>
            <Card variant="flat" className={styles.talentCategory}>
                <Card.Body>
                    <Text h3>Writing & Translation</Text>
                    <div className={styles.browseTalent}>
                        <Text h4 align="left">4.92/5</Text>
                        <Text h4>505 skills</Text>
                    </div>
                </Card.Body>
            </Card>
        </Grid>
        <Grid xs={3}>
            <Card variant="flat" className={styles.talentCategory}>
                <Card.Body>
                    <Text h3>Admin & Customer Support</Text>
                    <div className={styles.browseTalent}>
                        <Text h4 align="left">4.77/5</Text>
                        <Text h4>508 skills</Text>
                    </div>
                </Card.Body>
            </Card>
        </Grid>
        <Grid xs={3}>
            <Card variant="flat" className={styles.talentCategory}>
                <Card.Body>
                    <Text h3>Finance & Accounting</Text>
                    <div className={styles.browseTalent}>
                        <Text h4 align="left">4.79/5</Text>
                        <Text h4>214 skills</Text>
                    </div>
                </Card.Body>
            </Card>
        </Grid>
        <Grid xs={3}>
            <Card variant="flat" className={styles.talentCategory}>
                <Card.Body>
                    <Text h3>Engineering & Architecture</Text>
                    <div className={styles.browseTalent}>
                        <Text h4 align="left">4.85/5</Text>
                        <Text h4>650 skills</Text>
                    </div>
                </Card.Body>
            </Card>
        </Grid>
        <Grid xs={3}>
            <Card variant="flat" className={styles.talentCategory}>
                <Card.Body>
                    <Text h3>Legal</Text>
                    <div className={styles.browseTalent}>
                        <Text h4 align="left">4.85/5</Text>
                        <Text h4>133 skills</Text>
                    </div>
                </Card.Body>
            </Card>
        </Grid>
    </Grid.Container>
  );
}
