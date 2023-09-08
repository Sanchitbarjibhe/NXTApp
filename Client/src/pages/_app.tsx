import type { AppProps } from 'next/app'
import AppLayout from 'src/layouts/Applayout'
import 'tailwindcss/tailwind.css';


export default function App({ Component, pageProps }: AppProps) {

    return (
        <>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </>
    )
}