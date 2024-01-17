import { forwardRef, useContext } from "react"
import ModeContext from "../context/ModeContext"

const Footer = forwardRef(({children},ref) => {
  const mode = useContext(ModeContext);
  return (
    <div className={`fw-bolder bg-${mode === 'light' ? 'danger' : 'dark'} text-center py-3 text-light`} ref={ref}>
        {children}
    </div>
  )
})

export default Footer
