// Button Component
function Button({btnTxt, onClick}) {
    return (
      <button className="cursor-pointer bg-sky-500 hover:bg-sky-600 text-white w-20 h-10 rounded-sm text-center" onClick={onClick}>
        {btnTxt}
      </button>
    );
  }

  export default Button