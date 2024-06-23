/* eslint-disable react/prop-types */



const Btn = ({text}) => {
    return (
        <button
            className="rounded-sm text-xl btn_primary hover:bg-blue-700 duration-500"
          >
            {text}
          </button>
    );
};

export default Btn;