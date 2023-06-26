import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});


export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (

    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        
        <Navbar/>
        <AnimatePresence mode = "wait">
        <Component key = {router.asPath} {...pageProps}/>
        </AnimatePresence>
        <Footer/>
      </main>
    </>
  )
}



// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="https://soumyaswaroopsootar.vercel.app/SSS-LOGO.png" type="image/x-icon" />
//       </Head>
//       <main
//         className={`${montserrat.variable} font-mont bg-light w-full dark:bg-dark min-h-screen`}
//       >
//         {/* <div className="text-xs absolute top-0 bg-red-700 text-lime-100">
//           THIS PAGE IS BEING BUILDING NOW...GOOD THINGS TAKE TIME.....80% Built⚠️
//         </div> */}
//         <Navbar />
//         <Component {...pageProps} />
//         <Footer/>
//       </main>
//     </>
//   );
// }

