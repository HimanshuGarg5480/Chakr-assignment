"use client";
import React, { useState } from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { TbTimelineEvent } from "react-icons/tb";
import { CiSquareCheck } from "react-icons/ci";
import { CgNotes } from "react-icons/cg";
import {
  RiAttachment2,
  RiCalendarEventLine,
  RiDeleteBin6Line,
} from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const Page = () => {
  const [data, setData] = useState<any>([]);
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  return (
    <div className="w-full bg-zinc-800">
      <div className="border-b-2 border-gray-600 w-full">
        <Menubar className="bg-zinc-800 border-none text-slate-300 overflow-auto">
          <MenubarMenu>
            <MenubarTrigger>
              <div className="flex items-center gap-1">
                <TbTimelineEvent className="text-lg" />
                <span>Timeline</span>
              </div>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <div className="flex items-center gap-1">
                <CiSquareCheck className="text-lg" />
                <span>Tasks</span>
              </div>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <div className="flex items-center gap-1">
                <CgNotes className="text-lg" />
                <span>Notes</span>
              </div>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <div className="flex items-center gap-1">
                <RiAttachment2 className="text-lg" />
                <span>Files</span>
              </div>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <div className="flex items-center gap-1">
                <MdMailOutline className="text-lg" />
                <span>Emails</span>
              </div>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <div className="flex items-center gap-1">
                <RiCalendarEventLine className="text-lg" />
                <span>Calender</span>
              </div>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="flex justify-between items-center mt-8 ml-7 mr-10">
        <div className="text-lg text-white font-semibold">
          Unscheduled <span className="text-neutral-500 ml-1">{2}</span>
        </div>
        <div>
          <Dialog>
            <DialogTrigger>
              <div className="bg-zinc-800 text-white outline flex gap-1 items-center p-1 rounded-md hover:bg-slate-300 hover:text-slate-950">
                <FaPlus className="mr-2" />
                Add Task
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Task</DialogTitle>
                <DialogDescription>
                  <div className="flex flex-col gap-2">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="task">Task</Label>
                      <Input
                        onChange={(e) => {
                          setTask(e.target.value);
                        }}
                        type="text"
                        id="task"
                        placeholder="Task"
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="name">name</Label>
                      <Input
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        type="text"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        onChange={(e) => {
                          setDate(e.target.value);
                        }}
                        type="date"
                        id="date"
                        placeholder="Date"
                      />
                    </div>
                    <Button
                      onClick={() => {
                        setData([...data, { task, name, date }]);
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-2 ml-7 mr-10 rounded-md bg-zinc-700">
        {data.map((task: any, ind: any) => {
          return (
            <div
              className={`flex justify-between h-9 ${
                ind == data.length - 1 ? "" : "border-b-[1px] border-gray-500"
              }`}
              key={ind}
            >
              <div className="flex items-center space-x-2 text-slate-400 ml-1">
                <Checkbox id="terms2" disabled />
                <label
                  htmlFor="terms2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {task.task}
                </label>
              </div>
              <div className="flex gap-1 items-center text-slate-400 mr-3">
                <Avatar className="h-7 w-7">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>{" "}
                <span className="bg-neutral-800 h-fit rounded-md text-sm p-1">
                  {task.name}
                </span>
                <RiDeleteBin6Line
                  onClick={() => {
                    setData(data.filter((i: any) => i.name == task.task));
                  }}
                  className="text-xl text-red-400 ml-2 cursor-pointer"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
