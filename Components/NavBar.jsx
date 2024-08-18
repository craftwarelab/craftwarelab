"use client";
import React from "react";
import Hello from "@/components/Hello";
import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from "@nextui-org/react";
import { Logo } from "@/components/Logo";


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "about",
        "services",
        "solutions",
    ];

    return (
        <div>
            {/* <Hello /> */}
            <Navbar
                isBordered
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                classNames={{
                    item: [
                        "flex",
                        "relative",
                        "h-full",
                        "items-center",
                        "data-[active=true]:after:content-['']",
                        "data-[active=true]:after:absolute",
                        "data-[active=true]:after:bottom-0",
                        "data-[active=true]:after:left-0",
                        "data-[active=true]:after:right-0",
                        "data-[active=true]:after:h-[2px]",
                        "data-[active=true]:after:rounded-[2px]",
                        "data-[active=true]:after:bg-primary",
                    ],
                }}
            >
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    />
                </NavbarContent>

                <NavbarContent className="sm:hidden pr-3" justify="center">
                    <NavbarBrand>
                        <a href="#">
                            <Logo />
                        </a>
                        {/* <p className="font-bold text-inherit">ACME</p> */}
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4 uppercase" justify="center">
                    <NavbarBrand>
                        <Logo />
                        {/* <p className="font-bold text-inherit">ACME</p> */}
                    </NavbarBrand>
                    <NavbarItem>
                        <Link color="foreground" href="#about">
                            About
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#services">
                            Services
                        </Link>
                    </NavbarItem>
                    {/* <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Customers
                        </Link>
                    </NavbarItem> */}
                    <NavbarItem>
                        <Link color="foreground" href="#solutions">
                            Solutions
                        </Link>
                    </NavbarItem>

                </NavbarContent>

                <NavbarContent justify="end" className="uppercase">
                    <NavbarItem>
                        <Button as={Link} color="warning" href="#contact" variant="flat">
                            CONTACT
                        </Button>
                    </NavbarItem>
                </NavbarContent>

                <NavbarMenu className="bg-white uppercase">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                color={
                                    index === 2
                                        ? "warning"
                                        : index === menuItems.length - 1
                                            ? "danger"
                                            : "foreground"
                                }
                                href={`#${item}`}
                                size="lg"
                                onPress={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
    );
}

export default NavBar;