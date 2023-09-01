import type { AppProps } from 'next/app'
import Applayout from 'src/layouts/Applayout'
import 'src/custom/output.css';


export default function App({ Component, pageProps }: AppProps) {

    return (
        <>
            <Applayout>
                <Component {...pageProps} />
            </Applayout>
        </>
    )
}