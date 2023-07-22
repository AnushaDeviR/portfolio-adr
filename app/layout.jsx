import "../styles/global.css";

export const metadata = {
  title: "AD - Portfolio",
  description:
    "Experienced software engineer with expertise in functional programming, ML, and NLP. Passionate about developing innovative solutions to complex problems. Full-stack dev with a focus on frontend and cybersecurity. Eager to take on new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main">{children}</body>
    </html>
  );
}
