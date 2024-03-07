
const NumberButton = ({number, dispatch, customClasses}) => {
    return (
        <button
            className={`flex item-center justify-center bg-gray-200 hover:bg-gray-300 p-4 rounded-[10px] text-xl ${customClasses}`}>
            {number}
        </button>
    )
}

export default NumberButton
