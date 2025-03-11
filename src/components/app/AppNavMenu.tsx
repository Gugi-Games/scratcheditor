import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import ProfileMenu from "./ProfileMenu";

const content: { title: string; link: string }[] = [
  {
    title: "Play Game",
    link: "game",
  },
  {
    title: "Browse Maps",
    link: "browse",
  },
  {
    title: "Upload maps",
    link: "post",
  },
];

export default function AppNavMenu({ ...props }) {
  return (
    <NavigationMenu
      className="flex justify-between bg-sidebar w-full p-2 fixed top-0"
      {...props}
    >
      <div className="w-1/3 "></div>
      <NavigationMenuList className="w-1/3 gap-2">
        {content.map((item) => (
          <NavigationMenuItem key={item.link}>
            <Link href={item.link} passHref>
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

      <div className="flex justify-end w-1/3">
        <ProfileMenu />
      </div>
    </NavigationMenu>
  );
}
