import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex">
      <div className="">
        <Image
          src="https://cdn.kekastatic.net/login/v/M161_2023.10.09.1/images/login-image.jpg"
          alt="Scenery"
          width={1500}
          height={0}
        />
      </div>
      <div className="flex-2 bg-white p-4">
        <div className="mx-auto max-w-sm">
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary:
                  "bg-blue-400 hover:bg-blue-400 text-sm normal-case font-normal p-5",
                formFieldInput: {
                  padding: "18px",
                  fontSize: "18px",
                },
              },
              layout: {
                socialButtonsPlacement: "bottom",
                socialButtonsVariant: "iconButton",
                logoImageUrl: "/logo.png",
              },
            }}
          />
        </div>
        <div className="flex">
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
