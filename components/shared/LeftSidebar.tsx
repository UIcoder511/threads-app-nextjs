import React from "react";

import SignoutButton from "./SignoutButton";
import NavLinks from "./NavLinks";

type Props = {};

const LeftSidebar = (props: Props) => {
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        <NavLinks />
      </div>

      <div className="mt-10 px-6">
        <SignoutButton label="Logout" containerClasses="gap-4 p-4" />
      </div>
    </section>
  );
};

export default LeftSidebar;
