import CalculatorMonitor from "../../Components/CalculatorMonitor";
import NumberButton from "../../Components/NumberButton";
import OperationButton from "../../Components/OperationButton";
import {useState} from "react";

const Calculator = () => {
    const [currentOperand, setCurrentOperand] = useState(undefined)
    const [prevOperand, setPrevOperand] = useState(undefined)
    const [operation, setOperation] = useState(undefined)

    function calculate() {
        switch (operation) {
            case '+':
                return parseFloat(prevOperand) + parseFloat(currentOperand)
            case '-':
                return parseFloat(prevOperand) - parseFloat(currentOperand)
            case '*':
                return parseFloat(prevOperand) * parseFloat(currentOperand)
            case '/':
                return parseFloat(prevOperand) / parseFloat(currentOperand)
            default:
                return currentOperand
        }
    }


    return <div className="flex items-center justify-center w-full h-[calc(100vh-165px)]">
        <div
            className="flex flex-col items-center justify-start p-4 bg-white rounded-xl w-full max-w-[500px] select-none ">
            <CalculatorMonitor currentOperand={currentOperand} prevOperand={prevOperand} operation={operation}/>
            <div className="grid grid-cols-4 gap-4 w-full">
                <button
                    onClick={() => {
                        setCurrentOperand(undefined)
                        setPrevOperand(undefined)
                        setOperation(undefined)
                    }}
                    className="col-span-2 flex item-center justify-center bg-gray-300 hover:bg-gray-400 p-4 rounded-[10px] text-xl">
                    AC
                </button>
                <button
                    onClick={() => {
                        if (currentOperand === undefined)
                            return


                        const currentOperandString = currentOperand.toString()
                        if (currentOperandString.length === 1)
                            setCurrentOperand('0')
                        else
                            setCurrentOperand(currentOperandString.slice(0, -1))
                    }}
                    className="flex item-center justify-center bg-gray-300 hover:bg-gray-400 p-4 rounded-[10px] text-xl">
                    C
                </button>
                {['/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+'].map(el =>
                    typeof el === 'number'
                        ? <NumberButton key={el} number={el} currentOperandSetter={setCurrentOperand}/>
                        : <OperationButton key={el} operation={el} currentOperand={currentOperand}
                                           setPrevOperand={setPrevOperand} setCurrentOperand={setCurrentOperand}
                                           setOperation={setOperation} calculate={calculate}/>
                )}
                <NumberButton customClasses={'col-span-2'} number={0} currentOperandSetter={setCurrentOperand}/>
                <NumberButton number={'.'} currentOperandSetter={setCurrentOperand}/>
                <button
                    onClick={() => {
                        if (currentOperand === undefined || prevOperand === undefined || operation === undefined)
                            return

                        setCurrentOperand(calculate())
                        setPrevOperand(undefined)
                        setOperation(undefined)
                    }}
                    className="flex item-center justify-center bg-green-500 hover:bg-green-600 p-4 rounded-[10px] text-xl">
                    =
                </button>
            </div>

        </div>
    </div>
}

export default Calculator;