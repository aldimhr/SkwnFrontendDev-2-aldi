import Head from 'next/head';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="bg-gray-300">
      <div className="min-h-screen bg-white max-w-[375px] mx-auto relative">
        <Head>
          <title>Finance App</title>
        </Head>

        <div className="absolute bottom-0 shadow-inner w-full left-0">
          <Navigation />
        </div>
      </div>
    </div>
  );
}
