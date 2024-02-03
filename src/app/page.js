import Image from "next/image";
import Career from "@/components/Career";
import Intro from "@/components/Intro";
import Stack from "@/components/Stack";
import Project from "@/components/Project";
import Picture from "@/components/Picture";

export default function Home() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <Intro />
      <Stack />
      <Career />
      <Project />
      <Picture />
    </>
  );
}
