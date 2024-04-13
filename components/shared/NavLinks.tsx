"use client";
import { sidebarLinks } from "@/constants";
import React from "react";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

type Props = { forMobile?: boolean };

const NavLinks = ({ forMobile = false }: Props) => {
  const pathname = usePathname();
  return (
    <>
      {sidebarLinks.map((link, index) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;
        return (
          <NavLink
            key={link.label}
            forMobile={forMobile}
            isActive={isActive}
            {...link}
          />
        );
      })}
    </>
  );
};

export default NavLinks;
