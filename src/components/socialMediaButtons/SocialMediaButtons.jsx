import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as GithubIcon } from "../../assets/icons/github-alt.svg";
import { ReactComponent as BehanceIcon } from "../../assets/icons/behance-alt.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin-alt.svg";
import "./SocialMediaButtons.scss";

const SocialMediaButtons = () => {
  return (
    <div className='buttonsContainer'>
      <Link
        className='socialMediaBtn'
        to='https://www.behance.net/hanifbahar31e8'
      >
        <BehanceIcon />
      </Link>
      <Link className='socialMediaBtn' to='https://github.com/hanifb1360'>
        <GithubIcon />
      </Link>
      <Link
        className='socialMediaBtn'
        to='https://www.linkedin.com/in/hanifbahari/'
      >
        <LinkedinIcon />
      </Link>
    </div>
  );
};

export default SocialMediaButtons;
