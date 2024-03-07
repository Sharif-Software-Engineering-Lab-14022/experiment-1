import CalculatorMonitor from "../../Components/CalculatorMonitor";


const Calculator = () => {

    return <div className="flex items-center justify-center w-full h-[calc(100vh-165px)]">
        <div className="flex flex-col items-center justify-start p-4 bg-white rounded-xl w-full max-w-[500px] select-none ">
            <CalculatorMonitor />
        </div>
    </div>
}

export default Calculator;