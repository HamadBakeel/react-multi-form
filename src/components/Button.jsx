import { Button } from 'antd';
import {css} from "@emotion/css";

const btnStyle = css`
  &.ant-btn-primary{
    background-color: var(--marine-blue) !important;
  }
  padding: 7px 12px;

  :where(.css-dev-only-do-not-override-1km3mtt).ant-btn {
    height: initial; 
  }
  
`

export default function FormButton({text, type}){
    return(
        <Button  className={btnStyle} type={type}>
            {text}
        </Button>
    )
}