import Image from "next/image";

import arrow from "@/assets/svg/arrow.svg";
import palette from "@/assets/svg/palette.svg";
import x_circle from "@/assets/svg/x_circle.svg";

const Habit = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-8 w-3/4 p-4 mx-auto border-solid border-2 border-gray-300 rounded-lg">
      <section className="flex w-full justify-between">
        <section className="flex gap-4">
          <h3>Habit show</h3>
          <Image
            className="transition-all"
            src={arrow}
            alt="Arrow ponting down."
            width={16}
            height={16}
          />
        </section>
        <section className="flex gap-4">
          <Image
            className="transition-all"
            src={palette}
            alt="Color palette."
            width={24}
            height={24}
          />
          <Image
            className="transition-all"
            src={x_circle}
            alt="X Circle."
            width={24}
            height={24}
          />
        </section>
      </section>
      <section className="w-full bg-gray-300 h-40"></section>
    </section>
  );
};

export default Habit;
