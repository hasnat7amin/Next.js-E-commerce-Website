import Head from "next/head";
import React, { useEffect } from "react";
import "../styles/globals.css";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyle = document.querySelector("#jss-server-side");
    if (jssStyle) {
      jssStyle.parentElement.removeChild(jssStyle);
    }
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
