import { useEffect } from "react";

const useBodyClass = (className) => {
    useEffect(() => {
        document.body.className = className;
        return () => {
            document.body.className = "";
        };
    }, [className]);
}
export default useBodyClass;