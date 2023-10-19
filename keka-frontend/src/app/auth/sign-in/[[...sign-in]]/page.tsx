// pages/index.js

import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="main-container flex h-screen ">
      <div className="relative w-full" style={{ width: "calc(100vw - 500px)" }}>
        <Image
          src="https://cdn.kekastatic.net/login/v/M161_2023.10.09.1/images/login-image.jpg"
          alt="Scenery"
          layout="fixed"
          width={1500}
          height={0}
          objectFit="cover"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-12 ml-15 ">
        <div className="">
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary:
                  "bg-blue-400 hover:bg-blue-400 text-sm normal-case font-normal p-5",
                formFieldInput: "p-18 text-18",
              },
              layout: {
                socialButtonsPlacement: "bottom",
                socialButtonsVariant: "iconButton",
                logoImageUrl: "/logo.png",
              },
            }}
          />
        </div>
        <div className="flex w-77 p-15">
          <Image
            src="https://cdn.kekastatic.net/login/v/M161_2023.10.09.1/images/keka-logo-black.svg"
            alt="keka"
            width={70}
            height={70}
          />
          <p className="text-center text-gray-600 mt-4">
            By logging in, you agree to Keka{" "}
            <Link href="/terms" className="underline">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

    </div>
  );
}
