import Sidebar from "./components/Sidebar";
import InputsSection from "./components/InputsSection";
import {css} from "@emotion/css";

const formStyles = css`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  gap: 50px;
  width: 75%;
  /*position: absolute;*/
  /*transform: translate(50%, 50%);*/
  margin: auto;
  min-height: 70vh;
`

function Form() {
    return (
        <div className={formStyles}>
            <Sidebar/>
            <InputsSection/>
        </div>
    )
}

export default Form
