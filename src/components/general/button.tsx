

type ButtonPropType = {
    btnText: String,
    handleClick: () => void
}

function Button({btnText, handleClick}: ButtonPropType) {
  return (
    <div className=' p-2 bg-black text-white font-semibold text-center text-xs xsm:text-sm md:text-base rounded-sm transform duration-300 ease-in-out hover:scale-105 cursor-pointer min-w-[100px]' onClick={handleClick}>
        {btnText}
    </div>
  )
}

export default Button