import Image from "next/image";
import styles from "./Headline.module.css";

type HeadlineProps = {
   page: "page" | "about";
   children?: React.ReactNode;
};

export function Headline({
   page, 
   children: Children,
}: HeadlineProps) {
   console.log(page);
   return (
      <div>
         <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
         />
         <h1 className={styles.title}>{page} page</h1>
         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
            <li className="mb-2 tracking-[-.01em]">
               Get started by editing{" "}
               {Children}
               .
            </li>
            <li className="tracking-[-.01em]">
               Save and see your changes instantly.
            </li>
         </ol>
      </div>
   );
}
