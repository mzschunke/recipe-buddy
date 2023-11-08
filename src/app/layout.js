import "./globals.css";
import { Oswald } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import Provider from "../../components/Provider";

const oswald = Oswald({ subsets: ["latin"] });
const dancing_script = Dancing_Script({ subsets: ["latin"] });

export const metadata = {
  title: "Recipe App",
  description: "Find and create recipes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className={dancing_script.className}>{children}</body>
      </Provider>
    </html>
  );
}
