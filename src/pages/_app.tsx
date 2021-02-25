import "../styles/global.scss";

import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";

import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <CountdownProvider>
        <Component {...pageProps} />;
      </CountdownProvider>
    </ChallengesProvider>
  );
}

export default MyApp;
