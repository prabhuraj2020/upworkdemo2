import styles from '@/styles/Home.module.css'
import { Button, Text, Grid } from "@nextui-org/react";
import Image from "next/image";

export default function Navbar() {

    return (
        <Grid.Container gap={2} className={`${styles.flex} ${styles.menuSection}`}>
            <Grid xs={3}>
                <Image
                    src="/logo.png"
                    alt="Upwork Logo"
                    width={125}
                    height={40}
                />
            </Grid>
            <Grid xs={6} className={styles.mainMenu}>
                <Text h5>Find Talent</Text>
                <Text h5>Find Work</Text>
                <Text h5>Why Upwork</Text>
                <Text h5>Enterprise</Text>
            </Grid>
            <Grid xs={3} className={styles.loginSection}>
                <Text h5>Log In</Text>
                <Button color="success" auto>
                    Sign Up
                </Button>
            </Grid>
        </Grid.Container>
    );
}
