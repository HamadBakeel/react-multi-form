import {css} from "@emotion/css";
import { Checkbox, Form, Input } from 'antd';
import UserInfo from "./Form Sections/UserInfo";
import FormButton from "./Button.jsx";


const InputsSectionStyle = css`
  padding: 4% 6%;
  
  .header{
    margin-bottom: 1rem;
  }
  .title{
    
  }
  .subtitle{
    font-size: 14px;
    color: #aaa
  }
  
  .navigationButtons{
    display: flex;
    justify-content: space-between;
  }
`

export default function InputsSection(){
    return(
        <div className={InputsSectionStyle}>
            <header className="header">
                <h2 className="title">Personal Info</h2>
                <p className="subtitle">Please provide your name, email address, and phone number.</p>
            </header>

            <section className="body">
                <UserInfo/>
            </section>

            <div className="navigationButtons">
                <FormButton type="secondary" text={"Go Back"}/>
                <FormButton type="primary" text={"Next Step"}/>
            </div>
        </div>
    )
}
