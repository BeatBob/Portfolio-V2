import PageLayout from "@/components/layout/PageLayout";
import { getDictionary } from "../../lib/dictionaries";

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dictPage = await getDictionary(lang, "page");

  return (
    <main className="relative min-h-max min-w-max">
      <PageLayout dictPage={dictPage} lang={lang} />
    </main>
  );
}
