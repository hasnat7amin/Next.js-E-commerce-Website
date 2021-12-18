import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import React from "react";
import NextLink from "next/link";
import useStyles from "../styles/Layout/style.js";

function Layout({ title, children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title? title: 'Amazon'}</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref className={classes.link}>
            <Link className={classes.link}>
              <Typography className={classes.logo}>Amazon</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}>
            <NextLink href="/cart" passHref className={classes.link}>
              <Link className={classes.link}>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref className={classes.link}>
              <Link className={classes.link}>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Amazon @2020</Typography>
      </footer>
    </div>
  );
}

export default Layout;
