import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const Solution = () => {

    return (
        <>
            <div className="min-h-screen my-auto p-12 bg-[#FFF5E6]" id="solutions">
                <p className="text-2xl md:text-4xl font-medium md:mb-4 py-5 break-words text-wrap text-center">Solutions We Offer</p>
                <div className="flex flex-col items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-3 ">
                        <div className="p-2 border rounded-md shadow-xl bg-white">
                            <Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-4 text-center flex flex-col justify-center items-center">
                                    <p className="text-tiny uppercase font-bold">Entrepreneur Solutions</p>
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
                                            From concept to product, we help entrepreneurs turn visions into market-ready solutions:
                                        </p>
                                        <ol className="text-default-500 max-w-80 list-none">
                                            <li className="flex items-start mb-2">
                                                <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                                                <span>Create Minimum Viable Products (MVP) with flowcharts, wireframes, and prototypes</span>
                                            </li>
                                            <li className="flex items-start mb-2">
                                                <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                                                <span>Custom UI/UX design to ensure a seamless user experience</span>
                                            </li>
                                            <li className="flex items-start mb-2">
                                                <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                                                <span>Strategic validation to ensure market fit</span>
                                            </li>
                                            <li className="flex items-start mb-2">
                                                <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                                                <span>Coding, integration, and advanced IoT/AI implementation</span>
                                            </li>
                                            <li className="flex items-start mb-2">
                                                <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                                                <span>App/Web publishing and deployment across platforms</span>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </Card>
                        </div>


                        <div className="p-2 border rounded-md shadow-xl bg-white">
                            <Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-4 text-center flex flex-col justify-center items-center">
                                    <p className="text-tiny uppercase font-bold">Startup/SME Tech Partnership</p>
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
                                            Let us be your CTO, guiding your technology needs while you concentrate on scaling your business:
                                        </p>
                                        <ol className="text-default-500 max-w-80 list-none">
                                            <li className="flex items-start mb-2">
                                                <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                                                <span>End-to-end guidance for new and existing products</span>
                                            </li>
                                            <li className="flex items-start mb-2">
                                                <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                                                <span>Build from scratch or enhance your current offering</span>
                                            </li>
                                            <li className="flex items-start mb-2">
                                                <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                                                <span>Attend client and investor meetings as your tech expert</span>
                                            </li>
                                            <li className="flex items-start mb-2">
                                                <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                                                <span>Upskill your teams to be more tech-savvy and hands-on</span>
                                            </li>

                                        </ol>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div className="p-2 border rounded-md shadow-xl bg-white">
                            <Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-4 text-center flex flex-col justify-center items-center">
                                    <p className="text-tiny uppercase font-bold">Enterprise Solutions</p>
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
                                            Build bespoke software solutions designed to optimize your business operations and drive success:
                                        </p>
                                        <ol className="text-default-500 max-w-80 list-none">
                                            <li className="flex items-start mb-2">
                                                <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                                                <span>Streamline business processes for greater efficiency</span>
                                            </li>
                                            <li className="flex items-start mb-2">
                                                <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                                                <span>Develop software to cut costs and increase profits</span>
                                            </li>
                                            <li className="flex items-start mb-2">
                                                <span className="before:content-['\2022'] before:mr-2 before:text-black"></span>
                                                <span>Boost overall efficiency with tailored solutions</span>
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
        </>
    );

}

export default Solution;