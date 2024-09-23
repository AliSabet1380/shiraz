"use client";

import Link from "next/link";
import { useState } from "react";
import { useMedia } from "react-use";
import { useRouter, usePathname } from "next/navigation";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTitle } from "../ui/sheet";
import { Menu } from "lucide-react";

const routes = [
  {
    href: "/",
    label: "خانه",
  },
  {
    href: "/goats",
    label: "بزرگان",
  },
  {
    href: "/foods",
    label: "غذا",
  },
  {
    href: "/famous-places",
    label: "اماکن دیدنی",
  },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useMedia("(max-width: 1024px)", false);

  const handleClick = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  if (isMobile)
    return (
      <Sheet open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <Button
          onClick={() => setIsOpen(true)}
          size={"sm"}
          variant={"ghost"}
          className="bg-white/20 hover:bg-white/30"
        >
          <Menu className="size-4 text-white" />
        </Button>
        <SheetContent side={"left"}>
          <nav className="w-full flex flex-col items-center space-y-2 pt-8">
            {routes.map((route) => (
              <Button
                className="w-full font-semibold"
                key={route.href}
                variant={pathname === route.href ? "default" : "ghost"}
                onClick={() => handleClick(route.href)}
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );

  return (
    <nav className="hidden lg:flex flex-row-reverse items-center gap-x-3">
      {routes.map((route) => (
        <Button
          variant={"ghost"}
          className={cn(
            "text-white hover:text-white hover:bg-white/30",
            pathname === route.href && "bg-white/20"
          )}
          key={route.href}
        >
          <Link className="text-lg font-medium" href={route.href}>
            {route.label}
          </Link>
        </Button>
      ))}
    </nav>
  );
};
