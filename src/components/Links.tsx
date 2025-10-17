const ITEMS = [
   { 
      href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
      title: "Deploy now",
   },
   { 
      href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
      title: "Read our docs",
   },
]

export function Links() {
   return (
      <div className="flex gap-4 items-center flex-col sm:flex-row">
         {ITEMS.map(({ href, title }, index) => (
            <a
               className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
               href={href}
               target="_blank"
               rel="noopener noreferrer"
               key={href}
            >
               {title}
            </a>
         ))}
      </div>
   )
}
