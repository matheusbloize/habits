"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import arrow from "@/assets/svg/arrow.svg";
import plus_circle from "@/assets/svg/plus_circle.svg";

const MyHabits = () => {
  const habitsRef = useRef<HTMLElement | null>(null);

  const toggleSelect = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLElement;
    const arrowImage = target.querySelector("img") as HTMLImageElement;
    if (habitsRef.current) {
      arrowImage.alt === "Arrow poiting up."
        ? ((arrowImage.alt = "Arrow poiting down."),
          (arrowImage.style.transform = "rotate(0deg)"),
          (habitsRef.current.style.display = "none"),
          (target.style.borderBottom = ""),
          (target.style.borderBottomLeftRadius = ""),
          (target.style.borderBottomRightRadius = ""))
        : ((arrowImage.alt = "Arrow poiting up."),
          (arrowImage.style.transform = "rotate(45deg)"),
          (habitsRef.current.style.display = "flex"),
          (target.style.borderBottom = "0"),
          (target.style.borderBottomLeftRadius = "0"),
          (target.style.borderBottomRightRadius = "0"));
    }
  };

  const openModal = () => {};

  return (
    <section className="flex flex-col justify-center items-center gap-8">
      <section className="flex flex-col items-center">
        <h3 className="text-2xl leading-normal font-bold md:text-heading">
          Hi, Matheus Bloize.
        </h3>
        <p className="text-sm text-center lg:text-paragraph">
          It&apos;s nice see to you again, let&apos;s make some progress!
        </p>
      </section>
      <section className="flex relative">
        <section className="flex flex-col">
          <section
            onClick={toggleSelect}
            className="flex flex-col items-center px-8 py-4 cursor-pointer border-solid border-2 border-gray-300 rounded-lg"
          >
            <section className="flex gap-2">
              <h4 className="text-xl">Select your habit</h4>
              <Image
                className="transition-all"
                src={arrow}
                alt="Arrow ponting down."
                width={16}
                height={16}
              />
            </section>
          </section>
          <section
            ref={habitsRef}
            className="hidden flex-col text-center border-solid border-2 border-gray-300 border-t-0 rounded-lg rounded-t-none"
          >
            <Link
              href={`/habit/1`}
              className="text-xl p-2 cursor-pointer transition-all hover:bg-gray-300"
            >
              Read
            </Link>
            <Link
              href={`/habit/2`}
              className="text-xl p-2 cursor-pointer transition-all hover:bg-gray-300"
            >
              Meditate
            </Link>
            <Link
              href={`/habit/3`}
              className="text-xl p-2 cursor-pointer transition-all hover:bg-gray-300"
            >
              Training
            </Link>
            <Link
              href={`/habit/4`}
              className="text-xl p-2 cursor-pointer transition-all hover:bg-gray-300"
            >
              English
            </Link>
          </section>
        </section>
        <section
          onClick={openModal}
          className="absolute -right-10 top-1/2 [transform:translate(0,-50%);] transition-all cursor-pointer"
        >
          <Image src={plus_circle} alt="Plus Circle." width={24} height={24} />
        </section>
      </section>
    </section>
  );
};

export default MyHabits;
