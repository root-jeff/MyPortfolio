import React from "react";

export const Social = () => {
  const socialMedia = [
    {
      media: "instagram",
      link: "https://www.instagram.com/jeffjeffjeffje/",
    },
    {
      media: "linkedin",
      link: "https://github.com/root-jeff",
    },
    {
      media: "github",
      link: "https://www.linkedin.com/in/jefferson-palma-194850288/",
    },
  ];
  return (
    <div className="home__social">
      {socialMedia.map(({ media, link }) => (
        <a
          href={link}
          className="home__social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i class={`uil uil-${media}`}></i>
        </a>
      ))}
    </div>
  );
};
