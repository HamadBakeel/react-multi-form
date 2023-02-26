import Sidebar from "./components/Sidebar";
import InputsSection from "./components/InputsSection";
import {css} from "@emotion/css";
import {Text} from "./text.js";


const formStyles = css`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  gap: 50px;
  width: 75%;
  margin: auto;
  min-height: 70vh;
`



function Form() {
    return (
        <div className={formStyles}>
            <Sidebar/>
            <InputsSection
                // title={Text["Personal Info"].title}
                // subtitle={Text["Personal Info"].subTitle}
                // title={Text["Plan"].title}
                // subtitle={Text["Plan"].subTitle}
                // activeSection={"Plan"}
                title={Text["AddOns"].title}
                subtitle={Text["AddOns"].subTitle}
                activeSection={"AddOns"}
            />
        </div>
    )
}

export default Form
