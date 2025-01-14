import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import signupImage from "@/assets/signup-image.jpg";

import SignUpForm from "./SignUpForm";
import Logo from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Sign Up",
};

const SignUpPage = () => {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">
              Sign up to <Logo />
            </h1>
            <p className="text-muted-foreground">
              The first <span className="italic">proper</span> astrology social
              media app.
            </p>
          </div>
          <div className="space-y-5">
            <SignUpForm />

            <Link
              href="/login"
              className="small block text-center text-xs font-bold underline"
            >
              Already have an account? Click here to Log in.
            </Link>
          </div>
        </div>
        <Image
          src={signupImage}
          alt=""
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
};

export default SignUpPage;
