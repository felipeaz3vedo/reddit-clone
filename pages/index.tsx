import type { NextPage } from 'next';
import Head from 'next/head';
import { PostBox } from '../components/PostBox';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reddit Clone</title>
      </Head>

      {/* postbox */}
      <PostBox />

      <div>{/* feed  */}</div>
    </div>
  );
};

export default Home;
