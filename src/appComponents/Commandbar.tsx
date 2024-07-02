
import { CommandbarState } from "@/app/atoms/atoms";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import Link from "next/link";

import React, { useEffect } from "react";
import { CiSquareCheck } from "react-icons/ci";
import { GoGoal } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { PiBuildingsDuotone } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { useRecoilState } from "recoil";

export function Commandbar() {
  const [commandbarState, setCommandbarState] = useRecoilState(CommandbarState);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if(event.key==="Escape") setCommandbarState(false);
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        setCommandbarState(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className={`${commandbarState?"":"hidden"}`}>
      <div className="h-screen w-screen bg-black opacity-70 absolute"></div>
      <div className="w-full sm:w-[70%] absolute top-40 sm:left-56">
        <Command className="bg-zinc-300">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="CREATE">
              <CommandItem>
              <Link href="/pages/people">
                <div className="flex items-center gap-2 text-md font-semibold text-gray-700 my-1">
                  <CiSquareCheck className="text-lg" />
                  <span>Create Task</span>
                </div>
                </Link>
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="NAVIGATE">
              <CommandItem>
              <Link href="/pages/people">
                <div className="flex items-center gap-2 text-md font-semibold text-gray-700 my-1">
                  <VscAccount className="text-lg" />
                  <span>Go To People</span>
                </div>
                </Link>
              </CommandItem>
              <CommandItem>
              <Link href="/pages/people">
                <div className="flex items-center gap-2 text-md font-semibold text-gray-700 my-1">
                  <PiBuildingsDuotone className="text-lg" />
                  <span>Go To Companies</span>
                </div>
                </Link>
              </CommandItem>
              <CommandItem>
              <Link href="/pages/people">
                <div className="flex items-center gap-2 text-md font-semibold text-gray-700 my-1">
                  <GoGoal className="text-lg" />
                  <span>Go To Opportunities</span>
                </div>
                </Link>
              </CommandItem>
              <CommandItem>
              <Link href="/pages/settings">
                <div className="flex items-center gap-2 text-md font-semibold text-gray-700 my-1">
                  <IoSettingsOutline className="text-lg" />
                  <span>Go To Settings</span>
                </div>
                </Link>
              </CommandItem>
              <CommandItem>
              <Link href="/pages/people">
                <div className="flex items-center gap-2 text-md font-semibold text-gray-700 my-1">
                  <CiSquareCheck className="text-lg" />
                  <span>Go To Tasks</span>
                </div>
                </Link>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  );
}
