import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.scss";

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default App;
