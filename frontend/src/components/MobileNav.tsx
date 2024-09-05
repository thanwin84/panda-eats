import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet" 
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export default function MobileNav(){
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent className="space-y-3 ">
                <SheetTitle className="pb-4 border-b">
                    <span>Welcome to PandaEats.com!</span>
                </SheetTitle>
                <SheetDescription className="pt-2">
                    <Button
                        className="w-full font-bold bg-orange-500"
                    >
                        Log in
                    </Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}