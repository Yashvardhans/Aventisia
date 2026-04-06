import { MdOutlineSupportAgent } from "react-icons/md";
import { GiArtificialHive } from "react-icons/gi";
import { TbBooks } from "react-icons/tb";
import { IoBookSharp } from "react-icons/io5";

export const sections = [
  {
    header: "My Projects",
    items: [
      { label: "Agents", icon: <MdOutlineSupportAgent />, path: "/agents" },
      { label: "AI Models", icon: <GiArtificialHive />, path: "/ai-models" },
      { label: "Library", icon: <TbBooks />, path: "/library" },
    ],
  },
  {
    header: "Orchestrator",
    items: [
      { label: "Settings", icon: <MdOutlineSupportAgent />, path: "/settings" },
      { label: "Billing", icon: <TbBooks />, path: "/billing" },
      { label: "Knowledge Base", icon: <IoBookSharp />, path: "/knowledge-base" },
      { label: "Agents", icon: <MdOutlineSupportAgent />, path: "/agents" },
      { label: "AI Models", icon: <GiArtificialHive />, path: "/ai-models" },
      { label: "Library", icon: <TbBooks />, path: "/library" },
    ],
  },
  {
    header: "Admin",
    items: [
      { label: "Settings", icon: <MdOutlineSupportAgent />, path: "/settings" },
      { label: "Billing", icon: <TbBooks />, path: "/billing" },
      { label: "Knowledge Base", icon: <IoBookSharp />, path: "/knowledge-base" },
      { label: "Agents", icon: <MdOutlineSupportAgent />, path: "/agents" },
      { label: "AI Models", icon: <GiArtificialHive />, path: "/ai-models" },
      { label: "Library", icon: <TbBooks />, path: "/library" },
    ],
  },
];