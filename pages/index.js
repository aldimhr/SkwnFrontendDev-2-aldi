import Head from 'next/head';
import Activity from '../components/Activity';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Services from '../components/Services';
import Visa from '../components/Visa';

export default function Home() {
  return (
    <div className="bg-gray-300 font-roboto">
      <div className="min-h-screen bg-white px-5 max-w-[375px] mx-auto relative">
        <Head>
          <title>Finance App</title>
        </Head>

        <Header />
        <Visa />
        <Services />
        <Activity />

        <div className="z-10 bg-white sticky bottom-0 shadow-inner w-full left-0">
          <Navigation />
        </div>
      </div>
    </div>
  );
}
