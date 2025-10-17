export const metadata = {
   title: { default: 'About', template: '%s | サイト名' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {children}
    </section>
  )
}