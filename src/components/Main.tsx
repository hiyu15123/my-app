import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline/Page";
import { Button } from "@/components/Button";

type MainProps = {
   page: "page" | "about";
   onClick?: () => void;
};

export function Main({ page }: MainProps) {
   return (
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
         <Headline
            page={page}
         >
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
               app/{page}.tsx
            </code>
         </Headline>
         <Button />
         <Links />
      </main>
   );
}
