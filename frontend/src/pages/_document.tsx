import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
      </Head>
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
