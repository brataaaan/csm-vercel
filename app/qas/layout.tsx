export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto my-auto px-2 prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg prose-h6:text-base prose-a:underline prose-a:underline-offset-4 dark:prose-headings:text-white dark:prose-p:text-white dark:prose-strong:text-white dark:prose-li:text-white dark:prose-code:text-slate-300 dark:prose-a:text-white">
      {children}
    </div>
  );
}
