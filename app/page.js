// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center my-auto">
      <div className="flex justify-center p-5 ">
        <div>
          <div className="flex flex-col items-center text-center gap-4">
            {/* <Image src="/logo4.png" alt="Logo" width={300} height={50} /> */}
            <h2 className="text-3xl font-bold">We&rsquo;ll Be Right Back!</h2>
            <p>
              Our website is currently undergoing scheduled maintenance to bring
              you an even better experience. We apologize for any inconvenience
              and appreciate your patience.
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
              Stay tuned for updates, and we'll be back online shortly!
            </p>
            <p>- The Craftwarelab Team</p>
          </div>
        </div>
      </div>
    </main>
  );
}
