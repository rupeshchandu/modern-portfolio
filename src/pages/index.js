import AnimatedText from "@/Components/AnimatedText";
import { LinkArrow } from "@/Components/Icons";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/developer-pic-1.png"
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import HireMe from "@/Components/HireMe";
import Transitions from "@/Components/Transitions";


export default function Home() {
  return (
    <>
      <Head>
        <title>Rupesh Chandu | Home Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Transitions/>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light
      ">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
        <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt = "RupeshChandu" className='w-full h-auto md:inline-block md:w-full ' 
                priority sizes="(max-width : 768px) 100vw,(max-width : 1200px) 50vw,50vw"/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                <AnimatedText text={`Turning Vision Into Reality With Code And Design.`} className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                    As a front-end developer, I am dedicated to turning ideas into innovative web applications. 
                    Explore my latest projects, showcasing my expertise in React.js and web development.
                </p>
                <div className='flex items-center self-start mt-2 lg:self-center'>
                  <Link href= "./Resume.pdf" target={"_blank"}
                   className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg 
                   font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                   dark:text-dark dark:bg-light hover:dark:bg-dark  hover:dark:text-light hover:dark:border-light
                   md:p-2 md:px-4 md:text-base
                   '
                   download={true}
                   >
                    Resume <LinkArrow className={"w-6 ml-1 "}/>
                    
                  </Link>
                  <Link href= "mailto:lvrupeshch@gmail.com" target={"_blank"}
                    className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
        </Layout>
        <HireMe/>
        <div className="absolute w-24 right-8 bottom-1 inline-block md:hidden">
          <Image
            src={LightBulb}
            alt="Bulb"
            className="w-full h-auto md:hidden"
          />
        </div>
      </main>
    </>
  );
}


