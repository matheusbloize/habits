"use client";

import Image from "next/image";
import Link from "next/link";

import user from "@/assets/svg/user.svg";

const Header = () => {
  const isLogged = true;

  const openMenu = () => {
    const profileMenu = document.getElementById(
      "profile-menu",
    ) as HTMLDivElement;
    profileMenu.style.display = "flex";
  };

  const closeMenu = () => {
    const profileMenu = document.getElementById(
      "profile-menu",
    ) as HTMLDivElement;
    setTimeout(() => {
      profileMenu.style.display = "none";
    }, 500);
  };

  return (
    <header className="flex items-center justify-between p-4 border-b-solid border-b-2 border-b-gray-200 mb-4 lg:mb-20">
      <Link className="text-2xl font-bold 2xl:text-3xl" href={"/"}>
        Habits
      </Link>
      <nav className="flex gap-4 items-center 2xl:text-2xl">
        {isLogged ? (
          <>
            <Link className="relative w-fit border-link" href={"/my-habits"}>
              My Habits
            </Link>
            <Image
              className="transition-all hover:cursor-pointer 2xl:w-12 2xl:h-12"
              onClick={openMenu}
              src={user}
              alt="User."
              width={32}
              height={32}
            />
            <div
              id="profile-menu"
              className="hidden absolute right-0 top-16 bg-gray-300 px-4 pb-2 rounded-b-lg 2xl:top-20"
              onMouseLeave={closeMenu}
            >
              <ul className="flex flex-col gap-1">
                <li>Settings</li>
                <li>Log out</li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link href={"/login"}>Log in</Link>
            <Link href={"/signup"}>Sign up</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
