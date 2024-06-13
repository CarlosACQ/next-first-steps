import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "@/components";

const navItems = [
  { path: "/about", label: "About" },
  { path: "/price", label: "Pricing" },
  { path: "/contact", label: "Contact" },
];

export default async function Navbar() {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center">
        <HomeIcon className="mr-2" />
        <span className="ml-1">Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((item) => (
        <ActiveLink key={item.path} path={item.path} text={item.label} />        
      ))}
    </nav>
  );
}
