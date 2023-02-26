import {Form, Input, Switch} from "antd";
import {css} from "@emotion/css";

const plansContainerStyles= css`
  .plansContainer{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    column-gap: 20px;
    width: 100%;
    
    *{
      transition: .3s all;
    }
    
    .plan{
      display: flex;
      flex-direction: column;
      gap: 30px;
      border: 1.5px solid #ccc;
      border-radius: 7px;
      padding: 10px;
      cursor: pointer;
      
      &:hover{
        border-color: var(--purblish-blue);
      }
      &.selected{
        background-color: #f8f9fe;
        border-color: var(--purblish-blue);
      }
      
      img{
        width: 30px;
      }
      
      .plan-details{
        display: flex;
        flex-direction: column;
        
        .plan-title{
          font-weight: bold;
          font-size: 1.1rem;
        }
        .plan-price{
          font-size: .8rem;
          font-weight: 500;
          color: #a8a7ab;
        }
      }
    }
    
  }

  .plan-switcher {
    display: flex;
    justify-content: center;
    gap: 25px;
    font-weight: 500;
    width: 100%;
    background-color: #f8f9fe;
    border-radius: 7px;
    padding: 10px;
    margin-top: 30px;
    color: var(--marine-blue);

    .ant-switch {
      background: var(--marine-blue) !important;
    }
  }
`

export default function PlanSection(){

    return(
        <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            layout={"vertical"}
            className={plansContainerStyles}
        >
           <div className="plansContainer">
               <div className="plan">
                   <img src="public/assets/images/icon-arcade.svg" alt=""/>
                   <span className="plan-details">
                       <span className="plan-title">Arcade</span>
                       <span className="plan-price">$9/mo</span>
                   </span>
               </div>
               <div className="plan">
                   <img src="public/assets/images/icon-advanced.svg" alt=""/>
                   <span className="plan-details">
                       <span className="plan-title">Advanced</span>
                       <span className="plan-price">$12/mo</span>
                   </span>
               </div>
               <div className="plan">
                   <img src="public/assets/images/icon-pro.svg" alt=""/>
                   <span className="plan-details">
                       <span className="plan-title">Pro</span>
                       <span className="plan-price">$15/mo</span>
                   </span>
               </div>
           </div>

            <div className="plan-switcher">
                <span>Monthly</span>
                <Switch defaultChecked />
                <span>Yearly</span>
            </div>
        </Form>
    )
}