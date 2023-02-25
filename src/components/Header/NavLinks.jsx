import React from "react";

const NavLinks = () => {
  const Links = [
    {
      name: "Location",
      link: "#Location",
    },
    {
      name: "Blogs",
      link: "#Blogs",
    },
    {
      name: "Testimonials",
      link: "#Testimonials",
    },
    {
      name: "Contact",
      link: "#Contact",
    },
  ];
  return (
    <>
      {Links.map((item, id) => (
        <li
          key={id}
          className="transition-all font-medium text-lg leading-[calc(32/18)]"
        >
          <a
            className="relative hover:text-primary hover:before:w-full transition-all before:absolute before:-bottom-1 before:right-0 before:left-0 before:w-0 before:bg-primary before:h-1 ease-linear before:duration-500"
            href={item.link}
          >
            {item.name}
          </a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
