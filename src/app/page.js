/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Rup3o8ogRzV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-500 to-indigo-600 text-white">
      <header className="py-4 md:py-6">
        <div className="container flex items-center justify-between px-4 md:px-6">
          <Link className="flex space-x-2 font-bold" href="#">
            <span className="text-pink-300">Do</span>
            <span className="text-blue-300">Ku</span>
          </Link>
          <nav className="hidden space-x-4 text-sm font-medium lg:flex">
            <Link
              className="text-white hover:text-pink-300 dark:text-gray-100 dark:hover:text-gray-300"
              href="#"
            >
              Home
            </Link>
            <Link
              className="text-white hover:text-pink-300 dark:text-gray-100 dark:hover:text-gray-300"
              href="#"
            >
              Celebrities
            </Link>
            <Link
              className="text-white hover:text-pink-300 dark:text-gray-100 dark:hover:text-gray-300"
              href="#"
            >
              Reality Shows
            </Link>
            <Link
              className="text-white hover:text-pink-300 dark:text-gray-100 dark:hover:text-gray-300"
              href="#"
            >
              Music
            </Link>
            <Link
              className="text-white hover:text-pink-300 dark:text-gray-100 dark:hover:text-gray-300"
              href="#"
            >
              TV/Cinema
            </Link>
            <Link
              className="text-white hover:text-pink-300 dark:text-gray-100 dark:hover:text-gray-300"
              href="#"
            >
              About
            </Link>
            <Link
              className="text-white hover:text-pink-300 dark:text-gray-100 dark:hover:text-gray-300"
              href="#"
            >
              Contact
            </Link>
          </nav>
          <button className="flex lg:hidden">
            <MenuIcon className="w-6 h-6 text-white" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6 space-y-6 md:py-10 md:space-y-10 lg:space-y-16">
          <div className="flex flex-col gap-4 px-4 text-center md:gap-10 md:px-6 lg:gap-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/line-tight md:leading-[3.5]">
              Hot Gossip
            </h1>
            <p className="mx-auto max-w-3xl text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Your source for the latest celebrity news, juicy gossip, and
              scandals.
            </p>
          </div>
          <div className="grid gap-6 px-4 md:grid-cols-3 md:gap-10 md:px-6">
            <div className="space-y-4 bg-white rounded-lg p-4">
              <div className="rounded-lg overflow-hidden aspect-[16/9]">
                <img
                  alt="Cover image"
                  className="object-cover object-center"
                  height="360"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "640/360",
                    objectFit: "cover",
                  }}
                  width="640"
                />
              </div>
              <h2 className="text-2xl font-bold tracking-tighter">
                Gossip of the Moment
              </h2>
              <p className="text-gray-900">
                The latest scoop on Hollywood's hottest couples.
              </p>
              <Link
                className="inline-flex items-center underline hover:text-purple-500"
                href="#"
              >
                Read more
                <ChevronRightIcon className="w-4 h-4 ml-1 inline-block" />
              </Link>
            </div>
            <div className="space-y-4 bg-white rounded-lg p-4">
              <div className="rounded-lg overflow-hidden aspect-[16/9]">
                <img
                  alt="Cover image"
                  className="object-cover object-center"
                  height="360"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "640/360",
                    objectFit: "cover",
                  }}
                  width="640"
                />
              </div>
              <h2 className="text-2xl font-bold tracking-tighter">
                DoKu Exclusive
              </h2>
              <p className="text-gray-900">
                Behind the scenes of the biggest reality shows.
              </p>
              <Link
                className="inline-flex items-center underline hover:text-purple-500"
                href="#"
              >
                Read more
                <ChevronRightIcon className="w-4 h-4 ml-1 inline-block" />
              </Link>
            </div>
            <div className="space-y-4 bg-white rounded-lg p-4">
              <div className="rounded-lg overflow-hidden aspect-[16/9]">
                <img
                  alt="Cover image"
                  className="object-cover object-center"
                  height="360"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "640/360",
                    objectFit: "cover",
                  }}
                  width="640"
                />
              </div>
              <h2 className="text-2xl font-bold tracking-tighter">
                Who Up/Down
              </h2>
              <p className="text-gray-900">
                Which stars are on the rise and who's losing fans?
              </p>
              <Link
                className="inline-flex items-center underline hover:text-purple-500"
                href="#"
              >
                Read more
                <ChevronRightIcon className="w-4 h-4 ml-1 inline-block" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-gray-400">
        <div className="container flex flex-col gap-4 py-6 md:py-10 lg:gap-10 xl:gap-4 xl:flex-row xl:justify-between">
          <div className="text-center md:text-left">
            <Link className="flex font-bold text-white" href="#">
              <span className="text-pink-300">Do</span>
              <span className="text-blue-300">Ku</span>
            </Link>
            <p className="text-sm text-gray-100">
              Your source for the latest celebrity news, juicy gossip, and
              scandals.
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm md:flex-row md:gap-4 lg:flex-row lg:gap-4">
            <Link className="underline hover:text-pink-300" href="#">
              Home
            </Link>
            <Link className="underline hover:text-pink-300" href="#">
              Celebrities
            </Link>
            <Link className="underline hover:text-pink-300" href="#">
              Reality Shows
            </Link>
            <Link className="underline hover:text-pink-300" href="#">
              Music
            </Link>
            <Link className="underline hover:text-pink-300" href="#">
              TV/Cinema
            </Link>
            <Link className="underline hover:text-pink-300" href="#">
              About
            </Link>
            <Link className="underline hover:text-pink-300" href="#">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4 text-sm md:space-x-2 lg:space-x-4">
            <span className="mr-2 text-sm text-gray-100">Follow us</span>
            <div className="flex items-center space-x-2">
              <Link
                className="rounded-full w-6 h-6 overflow-hidden border-2 border-gray-200 shadow-sm"
                href="#"
              >
                <img
                  alt="Avatar"
                  className="object-cover rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </Link>
              <Link
                className="rounded-full w-6 h-6 overflow-hidden border-2 border-gray-200 shadow-sm"
                href="#"
              >
                <img
                  alt="Avatar"
                  className="object-cover rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </Link>
              <Link
                className="rounded-full w-6 h-6 overflow-hidden border-2 border-gray-200 shadow-sm"
                href="#"
              >
                <img
                  alt="Avatar"
                  className="object-cover rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
