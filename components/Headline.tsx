import Image from "next/image";
import styles from "@/app/page.module.css";

export function Headline(props) {
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
         <h1 className={styles.title}>{props.page} page</h1>
         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
            <li className="mb-2 tracking-[-.01em]">
               Get started by editing{" "}
               <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
               app/{props.page}.tsx
               </code>
               .
            </li>
            <li className="tracking-[-.01em]">
               Save and see your changes instantly.
            </li>
         </ol>
      </div>
   );
}
