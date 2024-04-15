import Link from "next/link";

import google from "@/assets/svg/google.svg";
import Button from "@/components/Button";
import Input from "@/components/Input";

const SignUp = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-8">
      <h3 className="text-3xl font-bold">Sign Up</h3>
      <section className="flex flex-col gap-8">
        <Input name="register_email" type="email" label="Email" />
        <Input name="register_password" type="password" label="Password" />
        <Button name="Sign Up" />
        <section className="flex flex-col gap-4 relative">
          <hr />
          <span className="absolute left-1/2 -bottom-3 bg-white px-4 [transform:translate(-50%,0);]">
            or
          </span>
        </section>
        <section className="flex flex-col gap-2">
          <Button
            name="Continue With Google"
            image={google}
            alt="Google logo."
          />
          <p className="text-center">
            Already has an account?
            <Link
              className="ml-1 font-bold border-link w-fit relative"
              href={"/login"}
            >
              Log in
            </Link>
          </p>
        </section>
      </section>
    </section>
  );
};

export default SignUp;
