import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  name: string;
  href?: string;
  image?: StaticImport;
  alt?: string;
}

const Button = ({ name, href, image, alt }: ButtonProps) => {
  return (
    <>
      {href ? (
        <Link
          className="py-4 px-6 font-bold border-solid border-[3px] border-black rounded-lg transition-all hover:bg-black hover:text-white lg:px-12"
          href={href}
        >
          {name}
        </Link>
      ) : image ? (
        <button className="flex gap-2 py-4 px-6 font-bold border-solid border-[3px] border-black rounded-lg transition-all hover:bg-black hover:text-white lg:px-12">
          <Image src={image} alt={alt!} width={24} height={24} /> {name}
        </button>
      ) : (
        <button className="py-4 px-6 font-bold border-solid border-[3px] border-black rounded-lg transition-all hover:bg-black hover:text-white lg:px-12">
          {name}
        </button>
      )}
    </>
  );
};

export default Button;
