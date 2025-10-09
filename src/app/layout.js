import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zeta Solutions - Digital Solutions for Modern Business",
  description:
    "Founded in 2015, Zeta Solutions enables businesses to start and thrive in the digital world. Complete turnkey solutions from server management to payment processing, SMS services, and third-party integrations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'en,es,fr,de,it,pt,ru,ja,ko,zh-CN,zh-TW,ar,hi,th,vi',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                  autoDisplay: false,
                  multilanguagePage: true
                }, 'google_translate_element');

                // Hide the Google Translate widget immediately after initialization
                setTimeout(() => {
                  const googleElement = document.getElementById('google_translate_element');
                  if (googleElement) {
                    googleElement.style.display = 'none';
                  }
                }, 100);
              }
            `,
          }}
        />
        <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          async
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Hide Google Translate banner and elements */
              .goog-te-banner-frame { display: none !important; }
              .goog-te-gadget { display: none !important; }
              .goog-te-combo { display: none !important; }
              .goog-te-gadget-simple { display: none !important; }
              .goog-te-gadget-icon { display: none !important; }
              body { top: 0px !important; }
              #google_translate_element { display: none !important; }
              .skiptranslate { display: none !important; }

              /* Prevent translation of notranslate class */
              .notranslate {
                color: inherit !important;
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
