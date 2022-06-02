import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <body className="bg-zinc-100 dark:bg-black dark:text-black">
      <Head>
        <title>Husna Ramadan</title>
      </Head>

      <div className="px-6 md:hiddaen">
        <div className="flex flex-col justify-center">
          <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 mx-auto pt-6 pb-2 text-gray-900">
            <div>
              <button
                className="visible md:hidden dark:text-white"
                aria-label="Toggle menu"
                type="button"
                // onclick="menuMobile()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                className="pt-4 mt-2 hidden w-full absolute bg-zinc-100 z-10 h-screen dark:bg-black dark:text-white"
                id="menu-mobile"
              >
                <ul className="flex flex-col">
                  <li
                    className="border-b border-gray-300 text-sm font-semibold dark:border-gray-500"
                    style={{transitionDelay: '150ms'}}
                  >
                    <a className="flex w-auto py-4" href="/">
                      Home
                    </a>
                  </li>
                  <li
                    className="border-b border-gray-300 text-sm font-semibold dark:border-gray-500"
                    style={{transitionDelay: '175ms'}}
                  >
                    <a className="flex w-auto py-4" href="/blog">
                      Blog
                    </a>
                  </li>
                  <li
                    className="border-b border-gray-300 text-sm font-semibold dark:border-gray-500"
                    style={{transitionDelay: '200ms'}}
                  >
                    <a className="flex w-auto py-4" href="/projects">
                      Projects
                    </a>
                  </li>
                  <li
                    className="border-b border-gray-300 text-sm font-semibold dark:border-gray-500"
                    style={{transitionDelay: '250ms'}}
                  >
                    <a className="flex w-auto py-4" href="/snippets">
                      Snippets
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button
              className="bg-stone-300 mr-2 p-1.5 rounded-lg focus:ring-2 focus:ring-emerald-400 dark:bg-gray-600"
              // onclick="darkMode()"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-stone-600 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    id="switcher-btn-mobile"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  ></path>
                </svg>
              </span>
            </button>
          </nav>
        </div>
      </div>

      <div className="px-6 md:px-4 max-w-2xl mx-auto py-10">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <h1 className="font-black text-4xl tracking-tight mb-1 dark:text-white">
              Husna Ramadan
            </h1>
            <h2 className="mb-4 dark:text-white">Backend Developer</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Writer of API web based with Node.js, Nest.js, or Adonis
              <br />
              on linux environment and not a fast learner.
            </p>
          </div>
          <div className="mb-6 order-first md:order-none w-[95px] grayscale flex-none">
            <Image
              src="https://husnaram.site/assets/img/profile.jpeg"
              alt="husna's profile photo"
              layout="fill"
              className="max-h-full max-w-full rounded-full"
            />
          </div>
        </div>
      </div>

    </body>
  );
}
