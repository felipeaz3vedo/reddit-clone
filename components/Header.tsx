import Image from 'next/image';
import redditLogo from '../public/reddit-logo.svg';

export const Header = () => {
  return (
    <div className="h-10 w-20 flex-shrink-0">
      <Image src={redditLogo} alt="reddit logo" objectFit="contain" />
    </div>

    
  );
};
