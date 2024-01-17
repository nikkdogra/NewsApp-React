import { useContext } from "react"
import ModeContext from "../context/ModeContext"

const Spinner = ({error}) => {

    const mode = useContext(ModeContext);

    const color = mode === 'light' ? 'danger' : 'light';
    return (
        <div className="text-center">
            
            <div className={`spinner spinner-border text-${color}`} role="status"></div>

            <p className={`error mt-2 text-${color} fw-bold`}>{error ? error : 'Please Wait!'}</p>

        </div>
    )
}

export default Spinner
