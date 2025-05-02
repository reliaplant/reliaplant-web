import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Sobre AECM",
  },
  description: "Descripcion sobre ABOUT AECM",
};

export default function AboutPage() {
  return (
    <div className="max-w-prose m-auto space-y-3">
      <h1 className="text-3xl text-center font-bold">About</h1>
      <p>
        Welcome to the blog where words sometimes cooperate and form
        sentences... sometimes. I'm your guide through the jungle of jumbled
        thoughts, the maestro of misplaced commas, the captain of creative
        chaos. If you're looking for perfectly crafted prose, well, you might
        want to keep looking. But if you're up for a rollercoaster ride through
        the realm of semi-organized randomness, buckle up and join me on this
        linguistic adventure! Disclaimer: Expect puns, occasional wit (or
        attempted wit), and a whole lot of trial and error. Stick around, and
        together, we'll navigate this whirlwind of words!
      </p>
    </div>
  );
}
