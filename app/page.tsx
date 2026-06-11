import { ChevronRight } from "lucide-react";
import ExternalLink from "./components/ExternalLink";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center flex-1 bg-zinc-50 font-sans dark:bg-black">
      <div
        id="home"
        className="flex w-full min-h-dvh max-w-2xl items-center gap-6 px-8 justify-between sm:items-start sm:text-left flex-col py-20 sm:py-64"
      >
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Felipe Peláez Covatti
          </h1>
        </div>
        <div className="flex flex-col gap-6">
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I am a{" "}
            <span className="text-black dark:text-zinc-50">
              Frontend Developer
            </span>
            , based in Brazil.
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Here you can find some projects I developed for learning and
            showcase purposes.
          </p>
        </div>
        <div className="flex flex-col w-full gap-4 text-base font-medium sm:flex-row">
          <a className="button rounded-full" href="#projects">
            Projects
          </a>
          <ExternalLink
            to="https://github.com/felipepcovatti"
            mode="rounded-button"
          >
            GitHub
          </ExternalLink>
          <ExternalLink
            to="https://www.linkedin.com/in/felipepcovatti/"
            mode="rounded-button"
          >
            LinkedIn
          </ExternalLink>
        </div>
      </div>
      <div className="min-h-dvh w-full" id="projects">
        <div className="sticky top-0 bg-white w-full py-4 dark:bg-black border-b-foreground/20 border-b">
          <nav className="flex items-center gap-2 relative sm:w-2xl px-4 sm:px-8 mx-auto flex-wrap">
            <div className="flex gap-1 sm:gap-2 sm:absolute sm:-translate-x-full sm:left-0 items-center">
              <a href="#home">Felipe</a>
              <ChevronRight size={14} className="text-gray-400" />
            </div>
            <a href="#projects" className="text-blue-300 mr-auto">
              Projects
            </a>
            <div className="flex gap-3 sm:absolute sm:translate-x-full sm:right-0">
              <ExternalLink to="https://github.com/felipepcovatti">
                GitHub
              </ExternalLink>
              <ExternalLink to="https://www.linkedin.com/in/felipepcovatti/">
                LinkedIn
              </ExternalLink>
            </div>
          </nav>
        </div>
        <div className="max-w-2xl px-8 py-10 mx-auto flex gap-8 flex-col">
          <ProjectCard
            title="NuxtFlow"
            year={2026}
            sourceLink="https://github.com/felipepcovatti/nuxtflow"
            previewLink="https://nuxtflow.vercel.app/"
          >
            <p>
              Created based on a{" "}
              <ExternalLink to="https://www.figma.com/design/BwJpLnMEFPsqLDaSgylB0V/flowbite-pro-figma-v2.10.0?node-id=2465-181397">
                Figma file from Flowbite
              </ExternalLink>
              , this project consists of a dashboard that displays information
              for a particular fictional company website (or e-commerce),
              including revenue data, visits (accesses), and transactions.
            </p>
            <p>
              It was implemented using Nuxt (Vue), Tailwind and Reka UI and
              features responsive charts and a map, built with Unovis (D3.js).
            </p>
            <p>
              More details about the project can be found in its{" "}
              <ExternalLink to="https://github.com/felipepcovatti/nuxtflow#nuxtflow">
                README file
              </ExternalLink>
              .
            </p>
          </ProjectCard>
          <div className="flex flex-col gap-6">
            <p>
              The following two projects were selected from a range of smaller
              ones originated from online coding platforms where I have studied
              in the past.
            </p>
            <div className="flex flex-col gap-8">
              <ProjectCard
                title="WorldTrip"
                year={2021}
                sourceLink="https://github.com/felipepcovatti/ig-worldtrip-chakra"
                previewLink="https://fpc-worldtrip.vercel.app/"
              >
                <p>
                  This project was developed during my studies at{" "}
                  <ExternalLink to="https://www.rocketseat.com.br/">
                    Rocketseat
                  </ExternalLink>{" "}
                  and was created based on a provided Figma design of a
                  fictional travel guide website.
                </p>
                <p>It uses Next (React) and Chakra UI.</p>
              </ProjectCard>
              <ProjectCard
                title="Wepapp Dashboard"
                year={2018}
                sourceLink="https://github.com/felipepcovatti/td-webapp-dashboard"
                previewLink="https://felipepcovatti.github.io/td-webapp-dashboard/"
              >
                <p>
                  This project was developed during my studies at{" "}
                  <ExternalLink to="https://teamtreehouse.com/">
                    Treehouse
                  </ExternalLink>{" "}
                  and was created based on a provided design.
                </p>
                <p>
                  It was built using vanilla JavaScript and the Chart.js
                  library.
                </p>
              </ProjectCard>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center *:px-3 pb-4 divide-x divide-foreground/20 mt-12">
        <span>2026</span>
        <span>Felipe Peláez Covatti</span>
      </footer>
    </main>
  );
}
