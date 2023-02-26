import {css} from "@emotion/css";
import Step from "./Step.jsx";
const sidebarStyles = css`
  background-image: url("/public/assets/images/bg-sidebar-desktop.svg");
  background-size: cover;
  border-radius: 10px;
  padding-block: 20px;
  
`

export default function Sidebar(){
    return(
        <div className={sidebarStyles}>
            <Step/>
            <Step/>
            <Step/>
            <Step/>
        </div>
    )
}