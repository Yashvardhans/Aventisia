import React from "react";
import LogoIcon from "../ui/LogoIcon";
import { Dropdown } from "../ui/Dropdown";
import SearchInput from "../ui/SearchBar";
import ProfileIcon from "../ui/ProfileIcon";
import { IoNotificationsOutline } from "react-icons/io5";

const HeaderNav = () => {
  return (
    <div className=" relative w-full h-14 flex items-center justify-between px-4 py-2 bg-[#1E1B4B] text-white">
      <div
        className="absolute left-1/2 -translate-x-1/2 w-125 h-full 
  bg-linear-to-r 
  from-transparent 
  via-white/10 
  to-transparent 
  blur-lg"
      />
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-evenly gap-4">
          <div className="logo flex items-center mb-1">
            <LogoIcon></LogoIcon>
            <p className="text-[18px]">Worcspace</p>
          </div>
          <Dropdown
            styles={{
              button:
                "w-[116px] h-[26px] text-[12px] flex items-center justify-between rounded-full bg-[#1A2D69] px-3 py-1.5 text-white",
              contents:
                "absolute mt-2 min-w-52 rounded-2xl border bg-zinc-950 text-white shadow-xl",
              item: "block w-full px-4 py-2 text-left text-sm hover:bg-zinc-800",
            }}
          >
            <Dropdown.Button>Worcspace1</Dropdown.Button>

            <Dropdown.Contents>
              <Dropdown.List>
                <Dropdown.Item to="/1">Link 1</Dropdown.Item>
                <Dropdown.Item to="/2">Link 2</Dropdown.Item>
                <Dropdown.Item to="/3">Link 3</Dropdown.Item>
              </Dropdown.List>
            </Dropdown.Contents>
          </Dropdown>
        </div>
        <div>
          <SearchInput className="rounded-lg bg-[#4b3f8f] shadow-inner focus-within:ring-2 focus-within:ring-white/40 pl-6 w-75">
            <SearchInput.Slot className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
                <circle
                  cx="9"
                  cy="9"
                  r="5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M14 14l4 4" stroke="currentColor" strokeWidth="2" />
              </svg>
            </SearchInput.Slot>

            <SearchInput.Slot className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/50">
              ⌘K
            </SearchInput.Slot>
          </SearchInput>
        </div>
        <div className="flex items-center gap-6">
          <IoNotificationsOutline size={20} />
          <ProfileIcon fName="John" lName="Doe" />
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
