import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";
import TopSection from "~/components/TopSection";

export const meta: MetaFunction = () => {
  return [
    { title: "Teodoro Obando" },
    { name: "description", content: "Welcome to my portfolio website" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen flex flex-col items-center bg-dark text-light">
      <TopSection />
      <Navbar />
      <div className="w-full h-[50%] flex flex-col justify-center items-center text-3xl">
        Ooooppsss, Site in reconstruction 🤕
        <span className="text-lg mt-2 italic"> teo.obando09@gmail.com | +505 7532 8885</span>
        <a className="text-lg" href="https://github.com/teo009">my git</a>
      </div>
    </div>
  );
}
