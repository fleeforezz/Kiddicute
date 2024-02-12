"use client"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { Heart } from "@phosphor-icons/react"
import { ShoppingBag } from "@phosphor-icons/react"
import { CaretDown } from "@phosphor-icons/react"
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function Header() {
    return (
        <main className="w-[100%]">
            <header className="bg-[#faedea] py-1">
                <div className="max-w-full w-[95%] m-auto flex justify-between">
                    <p className="text-[#176560] text-[0.9rem] font-semibold">
                        Miễn phí vận chuyển cho đơn trên 120$
                    </p>

                    <div className="flex items-center gap-5 text-[#176560] text-[0.85rem] font-semibold">
                        <a href="">
                            DS Shop
                        </a>
                        <a href="">
                            Hỗ Trợ
                        </a>
                        <a href="">
                            Tham Gia
                        </a>
                        <a href="" className="">
                            Đăng Nhập
                        </a>
                        <Dropdown>
                            <DropdownTrigger>
                                <Button
                                    variant="bordered"
                                    className="flex items-center gap-1"
                                >
                                    VN
                                    <CaretDown size={14} weight="bold" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions" className="bg-white rounded-xl">
                                <DropdownItem key="new">
                                    <a href="">English</a>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </header>

            <nav className="py-2 top-0 fixed w-[95%] m-[25px] z-50">
                <div className="max-w-full w-[95%] m-auto flex items-center justify-between">
                    <a href="" className="flex items-center">
                        <img src="/Icon.png" className="w-[64px]" />
                        <span className="font-semibold text-[2rem] text-[#176560]">
                            Kiddicute
                        </span>
                    </a>

                    <div className="flex gap-7 font-medium">
                        <a href="" className="relative new">
                            Mới & Nỗi bật
                        </a>
                        <a href="" className="relative new">
                            Bé Gái
                        </a>
                        <a href="" className="relative new">
                            Bé Trai
                        </a>
                        <a href="" className="relative new">
                            Bộ Sưu Tập
                        </a>
                        <a href="" className="relative new">
                            Sale
                        </a>
                        <a href="" className="relative new">
                            Shop
                        </a>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="flex bg-slate-100 px-2 py-1 rounded-full gap-1">
                            <a href="">
                                <MagnifyingGlass size={32} className="p-1 bg-slate-100 rounded-full hover:bg-slate-300" />
                            </a>
                            <input placeholder="Search" className="bg-slate-100 outline-none w-[10rem]" />
                        </div>

                        <a href="">
                            <Heart size={28} />
                        </a>
                        <a href="">
                            <ShoppingBag size={28} />
                        </a>
                    </div>
                </div>
            </nav>
        </main>
    )
}

