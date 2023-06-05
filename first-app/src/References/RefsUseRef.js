import React, {useRef} from "react";

const RefsUseRef = () => {
    const input = useRef();
    const focusInput = () => {
        input.current.focus();
    }
        return (
            <div className="App">
                <input type="text" ref={input} />
                <input type="button" value="Wciśnij mnie!!!" onClick={focusInput} />
            </div>
        )
}
export default RefsUseRef;