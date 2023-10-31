'use client';

import { Session } from 'next-auth';
import Image from 'next/image';
import profilePicPlacholder from '@/app/assets/profile-pic-placeholder.png';

interface UserMenuButtonProps {
  session: Session | null;
}

export default function UserMenuButton({ session }: UserMenuButtonProps) {
  const user = session?.user;
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        {user ? (
          <Image
            src={user?.image || profilePicPlacholder}
            alt="Profile picture"
            width={40}
            height={40}
            className="w-10 rounded-full"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <circle cx="5" cy="12" r="2" fill="#000" />
            <circle cx="12" cy="12" r="2" fill="#000" />
            <circle cx="19" cy="12" r="2" fill="#000" />
          </svg>
        )}
      </label>
      <ul>
        
      </ul>
    </div>
  );
}
