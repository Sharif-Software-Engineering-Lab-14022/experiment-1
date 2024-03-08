import CalculatorMonitor from "../../Components/CalculatorMonitor";
import NumberButton from "../../Components/NumberButton";
import OperationButton from "../../Components/OperationButton";
import {useState} from "react";


const Calculator = () => {
    const [currentOperand, setCurrentOperand] = useState(undefined)
    const [prevOperand, setPrevOperand] = useState(undefined)
    const [operation, setOperation] = useState(undefined)

    return <div className="flex items-center justify-center w-full h-[calc(100vh-165px)]">
        <div
            className="flex flex-col items-center justify-start p-4 bg-white rounded-xl w-full max-w-[500px] select-none ">
            <CalculatorMonitor/>
            <div className="grid grid-cols-4 gap-4 w-full">
                <button
                    className="col-span-2 flex item-center justify-center bg-gray-300 hover:bg-gray-400 p-4 rounded-[10px] text-xl">
                    AC
                </button>
                <button
                    className="flex item-center justify-center bg-gray-300 hover:bg-gray-400 p-4 rounded-[10px] text-xl">
                    C
                </button>
                {['/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+'].map(el =>
                    typeof el === 'number'
                        ? <NumberButton key={el} number={el}/>
                        : <OperationButton key={el} operation={el}/>
                )}
                <NumberButton customClasses={'col-span-2'} number={0}/>
                <NumberButton number={'.'}/>
                <button
                    className="flex item-center justify-center bg-green-500 hover:bg-green-600 p-4 rounded-[10px] text-xl">
                    =
                </button>
            </div>

        </div>
    </div>
}

export default Calculator;