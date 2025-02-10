"use client";

import Link from "next/link";
import { HomeIcon, PlaySquare, FlameIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

const items = [
  {
    title: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    title: "Subscriptions",
    href: "/feed/subscriptions",
    icon: PlaySquare,
    auth: true,
  },
  {
    title: "Trending",
    href: "/feed/trending",
    icon: FlameIcon,
  },
];

export const MainSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={false} // todo: change to pathname
                onClick={() => {}} // todo: something
              >
                <Link href={item.href} className="flex items-center gap-4">
                  <item.icon />
                  <span className="text-sm">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
