

type ButtonPropType = {
    btnText: String;
    handleClick: () => void
}

function Button({btnText, handleClick}: ButtonPropType) {
  return (
    <div className=' p-2 bg-black text-white text-center text-xs xsm:text-sm md:text-base rounded-full' onClick={handleClick}>
        {btnText}
    </div>
  )
}

export default Button