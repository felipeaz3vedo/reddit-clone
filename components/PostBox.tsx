import { PhotoIcon, LinkIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import { Avatar } from './Avatar';

export const PostBox = () => {
  const { data: session } = useSession();

  return (
    <form className="sticky top-16 z-50 rounded-md border border-gray-300 bg-white p-2">
      <div className="flex items-center space-x-3">
        <Avatar />

        <input
          className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
          disabled={!session}
          type="text"
          placeholder={session ? 'Postar' : 'Logue para postar'}
        />

        <PhotoIcon className={`h-6 cursor-pointer text-gray-400`} />
        <LinkIcon className="h-6 cursor-pointer text-gray-400" />
      </div>
    </form>
  );
};
