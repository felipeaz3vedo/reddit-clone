import Image from 'next/image';
import redditLogo from '../public/reddit-logo.svg';
import redditLoginIcon from '../public/reddit-login-icon.png';
import { ChevronDownIcon, HomeIcon } from '@heroicons/react/24/solid';
import {
  MagnifyingGlassIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BellIcon,
  GlobeAmericasIcon,
  VideoCameraIcon,
  SparklesIcon,
  PlusIcon,
  MegaphoneIcon,
  Bars3Icon
} from '@heroicons/react/24/outline';

export const Header = () => {
  return (
    <div className="sticky top-0 z-20 flex bg-white px-4 py-2 shadow-sm">
      <div className="h-10 w-20 flex-shrink-0">
        <Image src={redditLogo} alt="reddit logo" objectFit="contain" />
      </div>

      <div className="mx-7 flex items-center xl:min-w-[300px]">
        {/* 260px */}
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Página inicial</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* SEARCH */}
      <form className="flex flex-1 items-center space-x-2 rounded-3xl border border-gray-200 bg-gray-100 px-3 py-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          placeholder="Search Reddit"
          className="flex-1 bg-transparent outline-none"
        />
        {/* apesar que no site original o placeholser é escrito em inglês, procurar
        uma boa tradução */}
        <button type="submit" hidden></button>
      </form>

      {/* ICONS */}
      <div className="lg:flex-inline mx-5 hidden items-center space-x-2 text-[#1a1a1b] lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeAmericasIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatBubbleOvalLeftEllipsisIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <MegaphoneIcon className="icon" />
      </div>

      {/* SANDWICH   */}
      <div className="ml-5 flex items-center lg:hidden">
        <Bars3Icon className="icon stroke-2" />
      </div>

      {/* SIGN IN / SIGN OUT BUTTON  */}
      <div className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex">
        <div className="relative h-5 w-5 flex-shrink-0">
          <Image
            src={redditLoginIcon}
            alt="reddit login icon"
            objectFit="contain"
            layout="fill"
          />
        </div>

        <p className="text-gray-400">Sign In</p>
      </div>
    </div>
  );
};
