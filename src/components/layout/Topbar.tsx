import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconNotification, IconSearch } from "../icon";

const Topbar = () => {
    return (
        <div className="bg-grayfc h-[70px] px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-[82px] flex-1">
                <Logo />
                <Search />
            </div>
            <User />
        </div>
    );
};

function Logo({}) {
    return (
        <Link href="/" className="flex items-center gap-3">
            <Image width={173} height={35} src="/logoGariya.png" alt="Yariga" />
        </Link>
    );
}

function Search({}) {
    return (
        <div className="px-[10px] rounded-lg bg-grayf4 flex items-center gap-2 flex-1 max-w-[405px] h-[38px]">
            <IconSearch />
            <input
                type="text"
                placeholder="Search Property, Customer etc"
                className="bg-transparent text-xs font-normal text-gray80 outline-none w-full text-primaryText placeholder:text-gray80"
            />
        </div>
    );
}

function User({}) {
    return (
        <div className="flex items-center gap-5 flex-shrink-0">
            <span className="flex-shrink-0">
                <IconNotification />
            </span>
            <div className="flex items-center flex-shrink-0 gap-[10px] ">
                <Image
                    src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                    alt="mac"
                    width={40}
                    height={40}
                    className="rounded-full object-cover h-10 w-10"
                ></Image>
                <div className="flex flex-col">
                    <span className="font-semibold">Hawkins Maru</span>
                    <span className="text-gray80">Company Manager</span>
                </div>
            </div>
        </div>
    );
}
export default Topbar;
