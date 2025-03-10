import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import ProfileMenu from "./ProfileMenu";

export default function AppNavMenu({ ...props }) {
  return (
    <NavigationMenu className="flex justify-between bg-sidebar w-full p-2 fixed top-0" {...props}>
      <div className="w-1/3 ">
      </div>
      <NavigationMenuList className="w-1/3 gap-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Play Game</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Browse Maps</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Lonk</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Upload Maps</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Lenk</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <div className="flex justify-end w-1/3">
        <ProfileMenu />
      </div>
    </NavigationMenu>
  );
}
