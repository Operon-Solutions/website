import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Instrument_Serif, Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import { isValidLocale, getDictionary, locales } from "@/i18n";
import type { Locale } from "@/i18n";
import { I18nProvider } from "@/i18n/context";
import { ThemeProvider } from "@/components/ThemeProvider";
import ContactProvider from "@/components/ContactProvider";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif",
  display: "swap",
  weight: ["400", "700"],
});

const themeScript = `
  (function() {
    var t = localStorage.getItem('theme');
    if (t === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    function setFavicon(isDark) {
      var link = document.querySelector('link[rel="icon"]');
      if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
      link.href = isDark ? '/favicon-dark.png' : '/favicon-light.png';
    }
    setFavicon(t !== 'light');
    new MutationObserver(function() {
      setFavicon(document.documentElement.classList.contains('dark'));
    }).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  })();
`;

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale as Locale);

  return (
    <html
      lang={locale}
      className={`dark ${inter.variable} ${instrumentSerif.variable} ${notoSansTC.variable} ${notoSerifTC.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon-dark.png" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <I18nProvider dict={dict} locale={locale as Locale}>
            <ContactProvider>
              {children}
            </ContactProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
