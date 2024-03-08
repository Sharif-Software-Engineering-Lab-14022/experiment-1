const NumberButton = ({number, currentOperand, setCurrentOperand, customClasses}) => {
    return (
        <button
            onClick={() => {
                const currentOperandString = currentOperand?.toString()
                if (currentOperand) {
                    if (number === 0 && currentOperandString === '0' || currentOperand === 0)
                        return
                    if (number === '.' && currentOperandString.includes('.'))
                        return
                }

                setCurrentOperand(prev => prev === undefined ? number : prev + '' + number)
            }}
            className={`flex item-center justify-center bg-gray-200 hover:bg-gray-300 p-4 rounded-[10px] text-xl ${customClasses}`}>
            {number}
        </button>
    )
}

export default NumberButton
