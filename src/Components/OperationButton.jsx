const OperationButton = ({operation, currentOperand, setPrevOperand, setCurrentOperand, setOperation, calculate}) => {
    return (
        <button
            onClick={() => {
                if (currentOperand === undefined) {
                    setOperation(operation)
                    return
                }

                if (operation === undefined)
                    setPrevOperand(currentOperand)
                else
                    setPrevOperand(calculate())

                setCurrentOperand(undefined)
                    setOperation(operation)
            }}
            className="flex item-center justify-center bg-orange-400 hover:bg-orange-500 p-4 rounded-[10px] text-xl">
            {operation}
        </button>
    )
}

export default OperationButton
