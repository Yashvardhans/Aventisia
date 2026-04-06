import SideNavContent from "./SideNavContent";

import { sections } from "../../data/navbar_routes";



const SideNav = () => {
  return (
    <div className="w-60 h-screen border-gray-300 border-r-2 border-dotted font-family-inter overflow-scroll [&::-webkit-scrollbar]:hidden ">
      {sections.map((section, i) => (
        <SideNavContent key={i} {...section} />
      ))}
    </div>
  );
};

export default SideNav;
