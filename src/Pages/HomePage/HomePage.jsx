import { MainLayout } from "../../Layouts"
import {Calculator} from "../../Templates";

function HomePage() {
  return <MainLayout>
    <h1 className="text-6xl font-bold p-4">Calculator</h1>
    <Calculator />
  </MainLayout>
}

export default HomePage