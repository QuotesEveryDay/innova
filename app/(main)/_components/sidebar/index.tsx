import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Bold, Goal, Home, Menu, PersonStanding, Presentation, Store, Superscript } from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-green-300 h-full w-[210px] flex p-3 flex-col gap-y text-black border border-black">
      <div className="flex items-center gap-x-2">
        <Image
          src="/download.png"
          alt="Logo"
          height={60}
          width={60}
        />
        <span className="font-extrabold text-3xl text-logo-color">
          InNova
        </span>
      </div>
      <Separator className="bg-logo-color"/>
      <Separator className="bg-logo-color"/>
      <div className="space-y-1 w-full font-bold">
        <Button
          variant={"ghost"}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link href="/">
            <Home className="h-4 w-4 mr-2" />
            Home
          </Link>
        </Button>
        <Separator className="bg-logo-color" />
        <Button
          variant={"ghost"}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link href="/store">
           <Store className="h-4 w-4 mr-2" />
            Store
          </Link>
        </Button>
        <Separator className="bg-logo-color" />
        <Button
          variant={"ghost"}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link href="/goals">
           <Goal className="h-4 w-4 mr-2" />
            Goals
          </Link>
        </Button>
        <Separator className="bg-logo-color" />
        <Button
          variant={"ghost"}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link href="/summary">
            <Superscript className="h-4 w-4 mr-2" />
            Summary
          </Link>
        </Button>
        <Separator className="bg-logo-color" />
        <Button
          variant={"ghost"}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link href="/team">
           <Presentation className="h-4 w-4 mr-2" />
            Our Team
          </Link>
        </Button>
        <Separator className="bg-logo-color" />
      </div>  
    </aside>
  );
};