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
    <NavigationMenu className="flex bg-sidebar w-full p-2" {...props}>
      <NavigationMenuList className="flex justify- gap-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Lonk</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Item Three</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Lenk</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <div className="absolute right-4">
        <ProfileMenu />
      </div>
    </NavigationMenu>
  );
}
