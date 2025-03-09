import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback as Fallback } from "../ui/avatar";
import {
  DropdownMenu as Menu,
  DropdownMenuContent as Content,
  DropdownMenuItem as Item,
  DropdownMenuLabel as Label,
  DropdownMenuSeparator as Separator,
  DropdownMenuTrigger as Trigger,
} from "../ui/dropdown-menu";

export default function ProfileMenu({ ...props }) {
  return (
    <div {...props}>
      <Menu>
        <Trigger>
          <Avatar className="size-10">
            <Fallback>HI</Fallback>
          </Avatar>
        </Trigger>
        <Content>
          <Label>My Account</Label>
          <Separator />
          <Item>Profile</Item>
          <Item>Billing</Item>
          <Separator />
          <Item className="text-red-700">
            <LogOut color="oklch(0.505 0.213 27.518)" />
            Log Out
          </Item>
        </Content>
      </Menu>
    </div>
  );
}
