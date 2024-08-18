"use client";
// import Image from "next/image";
import { NextUIProvider } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import NavBar from "@/components/NavBar";
import MainHeader from "@/components/MainHeader";
import Services from "@/components/Services";
import Solution from "@/components/Solution";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
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

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["about", "services", "solutions"];
  return (
    <NextUIProvider>
      {/* <NavBar /> */}
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

          <NavbarContent
            className="hidden sm:flex gap-4 uppercase"
            justify="center"
          >
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
      {/* <MainHeader /> */}
      <div className="flex items-center h-screen my-auto bg-[#FFF5E6]">
        <div className="p-5 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-3 ">
            <div className="p-5 flex md:justify-center md:items-center flex-col">
              <div className="text-start">
                <p className="text-2xl md:text-4xl font-medium md:mb-4">
                  Craftwarelab
                </p>
                <h2 className="text-6xl md:text-7xl font-extrabold text-wrap break-words md:mb-4">
                  Crafting the
                  <br /> Digital
                  <br /> Landscape
                </h2>
                <span className="md:mb-2 brak-words text-sm font-light block">
                  We build custom software, mobile apps, websites, and digital
                  products.
                </span>
                <a href="#contact">
                  <button className="p-2 bg-primary text-black font-semibold bg-[#feb400] break-words ">
                    Start a Project
                  </button>
                </a>
              </div>
            </div>
            <div>
              <img
                className="top-0 left-0 w-full object-cover md:p-16 p-5"
                src="/workmen.jpg"
                alt="hero"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Services /> */}
      <div className="min-h-screen my-auto p-12 " id="services">
        <p className="text-2xl md:text-4xl font-medium md:mb-4 py-5 break-words text-wrap text-center">
          Services We Provide
        </p>
        <div className="flex flex-col items-center justify-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-3 ">
            <div className="p-2 flex md:justify-center md:items-center flex-col border rounded-md shadow-xl ">
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">
                    Web Development
                  </p>
                  <small className="text-default-500 max-w-60">
                    Our team crafts user friendly websites tailored to your
                    needs, strengthening your brand, attracting your audience,
                    and driving better business results.
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
                  <p className="text-tiny uppercase font-bold">
                    App Development
                  </p>
                  <small className="text-default-500 max-w-60">
                    Developing innovative mobile applications that deliver
                    engaging and seamless user experiences across all devices
                    and platforms.
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
                    Building interconnected IoT systems to automate processes,
                    enhance efficiency, and provide real-time insights for
                    smarter operations.
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
                  <p className="text-tiny uppercase font-bold">
                    Artificial Intelligence
                  </p>
                  <small className="text-default-500 max-w-60">
                    Implementing AI-driven solutions to empower data analysis,
                    automate tasks, and enable smarter, competitive business
                    strategies.
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
                    Crafting unique brand identities that resonate with your
                    audience, ensuring consistent and memorable visual and
                    emotional impact.
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
                    Developing targeted marketing strategies that effectively
                    engage your audience, drive growth, and amplify your
                    brand&rsquo;s presence.
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
      {/* <Solution /> */}
      <div className="min-h-screen my-auto p-12 bg-[#FFF5E6]" id="solutions">
        <p className="text-2xl md:text-4xl font-medium md:mb-4 py-5 break-words text-wrap text-center">
          Solutions We Offer
        </p>
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-3 ">
            <div className="p-2 border rounded-md shadow-xl bg-white">
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 text-center flex flex-col justify-center items-center">
                  <p className="text-tiny uppercase font-bold">
                    Entrepreneur Solutions
                  </p>
                </CardHeader>
              </Card>
              <Card className="">
                <CardBody className="overflow-visible py-2 text-center flex flex-col justify-center items-center gap-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="https://i.postimg.cc/xTLXbnKd/Untitled-design-5.png"
                    width={270}
                  />
                </CardBody>
                <div className=" flex md:justify-center md:items-center flex-col mt-4">
                  <div className="px-4">
                    <p className="text-start text-default-500 max-w-80 mb-3">
                      From concept to product, we help entrepreneurs turn
                      visions into market-ready solutions:
                    </p>
                    <ol className="text-default-500 max-w-80 list-none">
                      <li className="flex items-start mb-2">
                        <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                        <span>
                          Create Minimum Viable Products (MVP) with flowcharts,
                          wireframes, and prototypes
                        </span>
                      </li>
                      <li className="flex items-start mb-2">
                        <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                        <span>
                          Custom UI/UX design to ensure a seamless user
                          experience
                        </span>
                      </li>
                      <li className="flex items-start mb-2">
                        <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                        <span>Strategic validation to ensure market fit</span>
                      </li>
                      <li className="flex items-start mb-2">
                        <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                        <span>
                          Coding, integration, and advanced IoT/AI
                          implementation
                        </span>
                      </li>
                      <li className="flex items-start mb-2">
                        <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                        <span>
                          App/Web publishing and deployment across platforms
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
              </Card>
            </div>

            <div className="p-2 border rounded-md shadow-xl bg-white">
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 text-center flex flex-col justify-center items-center">
                  <p className="text-tiny uppercase font-bold">
                    Startup/SME Tech Partnership
                  </p>
                </CardHeader>
              </Card>
              <Card className="">
                <CardBody className="overflow-visible py-2 text-center flex flex-col justify-center items-center gap-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="https://i.postimg.cc/XYk6R7Ct/tec.png"
                    width={270}
                  />
                </CardBody>
                <div className=" flex md:justify-center md:items-center flex-col mt-4">
                  <div className="px-4">
                    <p className="text-start text-default-500 max-w-80 mb-3">
                      Let us be your CTO, guiding your technology needs while
                      you concentrate on scaling your business:
                    </p>
                    <ol className="text-default-500 max-w-80 list-none">
                      <li className="flex items-start mb-2">
                        <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                        <span>
                          End-to-end guidance for new and existing products
                        </span>
                      </li>
                      <li className="flex items-start mb-2">
                        <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                        <span>
                          Build from scratch or enhance your current offering
                        </span>
                      </li>
                      <li className="flex items-start mb-2">
                        <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                        <span>
                          Attend client and investor meetings as your tech
                          expert
                        </span>
                      </li>
                      <li className="flex items-start mb-2">
                        <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                        <span>
                          Upskill your teams to be more tech-savvy and hands-on
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
              </Card>
            </div>

            <div className="p-2 border rounded-md shadow-xl bg-white">
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 text-center flex flex-col justify-center items-center">
                  <p className="text-tiny uppercase font-bold">
                    Enterprise Solutions
                  </p>
                </CardHeader>
              </Card>
              <Card className="">
                <CardBody className="overflow-visible py-2 text-center flex flex-col justify-center items-center">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="https://i.postimg.cc/Sx4QHPJ1/bussiness-1.png"
                    width={270}
                  />
                </CardBody>
                <div className="flex md:justify-center md:items-center flex-col mt-4">
                  <div className="px-4">
                    <p className="text-start text-default-500 max-w-80 mb-3">
                      Build bespoke software solutions designed to optimize your
                      business operations and drive success:
                    </p>
                    <ol className="text-default-500 max-w-80 list-none">
                      <li className="flex items-start mb-2">
                        <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                        <span>
                          Streamline business processes for greater efficiency
                        </span>
                      </li>
                      <li className="flex items-start mb-2">
                        <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                        <span>
                          Develop software to cut costs and increase profits
                        </span>
                      </li>
                      <li className="flex items-start mb-2">
                        <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                        <span>
                          Boost overall efficiency with tailored solutions
                        </span>
                      </li>
                      <li className="flex items-start mb-2">
                        <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                        <span>Improve team communication and engagement</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* <ContactUs /> */}
      <div id="contact" className="min-h-screen my-auto p-12">
        <p className="text-2xl md:text-4xl font-medium md:mb-4 py-5 break-words text-wrap text-center">
          Get in touch
        </p>
        <div className="flex flex-col items-center justify-center">
          <div className="my-6">
            <div className="grid sm:grid-cols-2 items-center gap-10 p-8 mx-auto max-w-6xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
              <div className="p-9">
                <h1 className="text-3xl font-extrabold">Let&apos;s Talk</h1>
                <p className="text-sm text-gray-400 mt-3 break-words">
                  We believe understanding you and your business will enable us
                  to provide you the best solutions.
                  <br />
                  Do you think we could be a good fit? Email us at
                  craftwarelab@gmail.com to set up a free, no-obligation
                  discovery call. Let&rsquo;s have a chat to see how we can
                  support you
                </p>
                <div className="mt-12">
                  <h2 className="text-lg font-extrabold">Email</h2>
                  <ul className="mt-3">
                    <li className="flex items-center">
                      <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="#007bff"
                          viewBox="0 0 479.058 479.058"
                        >
                          <path
                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                            data-original="#000000"
                          />
                        </svg>
                      </div>
                      <a
                        target="blank"
                        href="mailto:m.craftwarelab@gmail.com"
                        className="text-[#007bff] text-sm ml-3"
                      >
                        <small className="block">Mail</small>
                        <strong>craftwarelab@gmail.com</strong>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12">
                  <h2 className="text-lg font-extrabold">Socials</h2>
                  <ul className="flex mt-3 space-x-4">
                    <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <a href="https://www.facebook.com/profile.php?id=61559053660456">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="#007bff"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                            data-original="#000000"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <a href="https://www.linkedin.com/company/craftwarelab">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="#007bff"
                          viewBox="0 0 511 512"
                        >
                          <path
                            d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                            data-original="#000000"
                          />
                        </svg>
                      </a>
                    </li>
                    {/* <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                            <a href="javascript:void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                                                    </path>
                                                </svg>
                                            </a>
                                        </li> */}
                  </ul>
                </div>
              </div>

              <div
                className="p-2 overflow-x-auto"
                style={{
                  scrollbarWidth: "thin", // For Firefox
                  WebkitScrollbar: {
                    width: "6px", // For WebKit browsers (Chrome, Safari)
                  },
                  WebkitScrollbarThumb: {
                    backgroundColor: "#888",
                    borderRadius: "10px",
                  },
                }}
              >
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdikAwo2kwjNMmcVw_BKgecZBJPJ4bjTchGJaORRFQQrbrUUQ/viewform?embedded=true"
                  width="540"
                  height="615"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Google Form"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#888 #e0e0e0",
                    WebkitScrollbar: {
                      width: "6px",
                    },
                    WebkitScrollbarTrack: {
                      backgroundColor: "#e0e0e0",
                      borderRadius: "10px",
                    },
                    WebkitScrollbarThumb: {
                      backgroundColor: "#888",
                      borderRadius: "10px",
                      border: "2px solid #e0e0e0",
                    },
                  }}
                >
                  Loading...
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <main className="flex h-screen items-center justify-center my-auto bg-amber-500">
        <div className="flex justify-center p-5 ">
          <div>
            <div className="flex flex-col items-center text-center gap-4">
              <h2 className="text-3xl font-bold">We&rsquo;ll Be Right Back!</h2>
              <p>
                Our website is currently undergoing scheduled maintenance to
                bring you an even better experience. We apologize for any
                inconvenience and appreciate your patience.
              </p>
              <p>
                If you have any urgent inquiries, please feel free to contact us
                at{" "}
                <a
                  className="text-blue-500 hover:cursor-pointer"
                  href="https://www.linkedin.com/company/craftwarelab"
                  target="_blank"
                >
                  linkedin
                </a>
                .
                <br />
                Stay tuned for updates, and we&rsquo;ll be back online shortly!
              </p>
              <p>- The Craftwarelab Team</p>
            </div>
          </div>
        </div>
      </main> */}
      <Footer />
      {/* <footer className="footer footer-center  w-full p-4 bg-black text-white">
        <div className="text-center">
          <p>
            Digitally crafted with 🖤 by Team&nbsp;
            <a className="font-semibold" href="#">
              Craftwarelab
            </a>
          </p>
        </div>
      </footer> */}
    </NextUIProvider>
  );
}
