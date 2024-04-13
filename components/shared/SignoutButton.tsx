"use client";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  label?: string;
  containerClasses?: React.ComponentProps<"div">["className"];
};

const SignoutButton = (props: Props) => {
  //   const router = useRouter();
  return (
    <SignedIn>
      <SignOutButton signOutCallback={() => redirect("/sign-in")}>
        <div className={`flex cursor-pointer ` + props.containerClasses}>
          <Image
            src={"/assets/logout.svg"}
            alt="logout"
            width={24}
            height={24}
          />

          {props.label && (
            <p className="text-light-1 max-lg:hidden">{props.label}</p>
          )}
        </div>
      </SignOutButton>
    </SignedIn>
  );
};

export default SignoutButton;
