import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  route: string;
  label: string;
  imgURL: string;
  isActive: boolean;
  forMobile?: boolean;
};

const NavLink = ({
  route,
  label,
  imgURL,
  forMobile = false,
  isActive,
}: Props) => {
  return (
    <Link
      href={route}
      className={`${forMobile ? "bottombar_link" : "leftsidebar_link"} ${
        isActive && "bg-primary-500"
      }`}
    >
      <Image src={imgURL} alt={label} width={24} height={24} />
      <p
        className={`text-light-1 ${!forMobile && "max-lg:hidden"} ${
          forMobile && "text-subtle-medium text-light-1 max-sm:hidden"
        }`}
      >
        {forMobile ? label.split(/\s+/)[0] : label}
      </p>
    </Link>
  );
};

export default NavLink;
