import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CgTwitter } from "react-icons/cg";
const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a href="https://github.com/Suzykenne" target="blank">
        <FaGithub />{" "}
      </a>
      <a href="https://www.facebook.com/suzy.ndatewo/" target="blank">
        <FaFacebookF />{" "}
      </a>
      <a href="https://twitter.com/Suzydatewo" target="blank">
        <CgTwitter />{" "}
      </a>
    </div>
  );
};
export default HeaderSocial;
