
const OperationButton = ({operation, dispatch}) => {
    return (
        <button
            className="flex item-center justify-center bg-orange-400 hover:bg-orange-500 p-4 rounded-[10px] text-xl">
            {operation}
        </button>
    )
}

export default OperationButton
