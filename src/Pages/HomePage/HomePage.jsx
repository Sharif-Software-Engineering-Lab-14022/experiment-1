import { MainLayout } from "../../Layouts"
import {Calculator} from "../../Templates";

function HomePage() {
  return <MainLayout>
    <h1 className="text-6xl font-bold p-4">SE Lab. Calculator</h1>
    <Calculator />
    <div className="flex items-center justify-center text-xs font-light p-2">
      <span className="mr-2">Copyright © 2024 - SE Lab. - Amir Mohammad Fakhimi - Mohammad Amin Lotfi - Mana Peiravian</span>
      <a href="https://github.com/Sharif-Software-Engineering-Lab-14022/experiment-1" target="_blank" rel="noreferrer">
        <img className="w-[25px] h-[25px]" src="/github-logo.svg" alt="Github Logo"/>
      </a>
    </div>
  </MainLayout>
}

export default HomePage