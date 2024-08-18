"use client";
import React from "react";
import Hello from "@/Components/Hello";
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
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Logo } from "@/Components/Logo";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
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
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="warning" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
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
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <div className="min-h-screen my-auto p-12 " id="services">
                <p className="text-2xl md:text-4xl font-medium md:mb-4 py-5 break-words text-wrap text-center">Services We Provide</p>
                <div className="flex flex-col items-center justify-center ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-3 ">
                        <div className="p-2 flex md:justify-center md:items-center flex-col border rounded-md shadow-xl ">
                            <Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <p className="text-tiny uppercase font-bold">Web Development</p>
                                    <small className="text-default-500 max-w-60">
                                        Our team crafts user friendly websites tailored to your needs, strengthening your brand, attracting your audience, and driving better business results.
                                    </small>
                                    {/* <h4 className="font-bold text-large">Frontend Radio</h4> */}
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src="https://i.postimg.cc/4NbxtFRg/web-1.png"
                                        width={270}
                                    />
                                </CardBody>
                                <div class="relative group hover:cursor-pointer overflow-hidden p-2 mx-3 rounded-md">
                                    <p class="relative z-10 text-center">Learn more</p>
                                    <div class="absolute inset-0 bg-[#feb400] transition-transform transform translate-y-full group-hover:translate-y-0 duration-100"></div>
                                </div>
                            </Card>
                        </div>
                        <div className="p-2 flex md:justify-center md:items-center flex-col border rounded-md shadow-xl ">
                            <Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <p className="text-tiny uppercase font-bold">App Development</p>
                                    <small className="text-default-500 max-w-60">
                                        Developing innovative mobile applications that deliver engaging and seamless user experiences across all devices and platforms.
                                    </small>
                                    {/* <h4 className="font-bold text-large">Frontend Radio</h4> */}
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src="https://i.postimg.cc/HLHMC70w/app-1.png"
                                        width={270}
                                    />
                                </CardBody>
                                <div class="relative group hover:cursor-pointer overflow-hidden p-2 mx-3 rounded-md">
                                    <p class="relative z-10 text-center">Learn more</p>
                                    <div class="absolute inset-0 bg-[#feb400] transition-transform transform translate-y-full group-hover:translate-y-0 duration-100"></div>
                                </div>
                            </Card>
                        </div>
                        <div className="p-2 flex md:justify-center md:items-center flex-col border rounded-md shadow-xl ">
                            <Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <p className="text-tiny uppercase font-bold">IoT Solutions</p>
                                    <small className="text-default-500 max-w-60">
                                        Building interconnected IoT systems to automate processes, enhance efficiency, and provide real-time insights for smarter operations.
                                    </small>
                                    {/* <h4 className="font-bold text-large">Frontend Radio</h4> */}
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src="https://i.postimg.cc/L6rqS0FK/IOT.png"
                                        width={270}
                                    />
                                </CardBody>
                                <div class="relative group hover:cursor-pointer overflow-hidden p-2 mx-3 rounded-md">
                                    <p class="relative z-10 text-center">Learn more</p>
                                    <div class="absolute inset-0 bg-[#feb400] transition-transform transform translate-y-full group-hover:translate-y-0 duration-100"></div>
                                </div>
                            </Card>
                        </div>
                        <div className="p-2 flex md:justify-center md:items-center flex-col border rounded-md shadow-xl ">
                            <Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <p className="text-tiny uppercase font-bold">Artificial Intelligence</p>
                                    <small className="text-default-500 max-w-60">
                                        Implementing AI-driven solutions to empower data analysis, automate tasks, and enable smarter, competitive business strategies.
                                    </small>
                                    {/* <h4 className="font-bold text-large">Frontend Radio</h4> */}
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src="https://i.postimg.cc/qRkhYhVN/AI-1.png"
                                        width={270}
                                    />
                                </CardBody>
                                <div class="relative group hover:cursor-pointer overflow-hidden p-2 mx-3 rounded-md">
                                    <p class="relative z-10 text-center">Learn more</p>
                                    <div class="absolute inset-0 bg-[#feb400] transition-transform transform translate-y-full group-hover:translate-y-0 duration-100"></div>
                                </div>
                            </Card>
                        </div>
                        <div className="p-2 flex md:justify-center md:items-center flex-col border rounded-md shadow-xl ">
                            <Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <p className="text-tiny uppercase font-bold ">Branding</p>
                                    <small className="text-default-500 max-w-60">
                                        Crafting unique brand identities that resonate with your audience, ensuring consistent and memorable visual and emotional impact.
                                    </small>
                                    {/* <h4 className="font-bold text-large">Frontend Radio</h4> */}
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src="https://i.postimg.cc/KcDFj3yq/branding2.png"
                                        width={270}
                                    />
                                </CardBody>
                                <div class="relative group hover:cursor-pointer overflow-hidden p-2 mx-3 rounded-md">
                                    <p class="relative z-10 text-center">Learn more</p>
                                    <div class="absolute inset-0 bg-[#feb400] transition-transform transform translate-y-full group-hover:translate-y-0 duration-100"></div>
                                </div>
                            </Card>
                        </div>
                        <div className="p-2 flex md:justify-center md:items-center flex-col border rounded-md shadow-xl ">
                            <Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <p className="text-tiny uppercase font-bold">Marketing</p>
                                    <small className="text-default-500 max-w-60">
                                        Developing targeted marketing strategies that effectively engage your audience, drive growth, and amplify your brand&rsquo;s presence.
                                    </small>
                                    {/* <h4 className="font-bold text-large">Frontend Radio</h4> */}
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src="https://i.postimg.cc/3NTLzZrg/marketing-2.png"
                                        width={270}
                                    />
                                </CardBody>
                                <div class="relative group hover:cursor-pointer overflow-hidden p-2 mx-3 rounded-md">
                                    <p class="relative z-10 text-center">Learn more</p>
                                    <div class="absolute inset-0 bg-[#feb400] transition-transform transform translate-y-full group-hover:translate-y-0 duration-100"></div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}
