import React from "react";
import NavLinks from "./NavLinks";

type Props = {};

const Bottombar = (props: Props) => {
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        <NavLinks forMobile />
      </div>
    </section>
  );
};

export default Bottombar;
