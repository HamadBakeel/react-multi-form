import {Checkbox, Form, Input, Switch} from "antd";
import {css} from "@emotion/css";

const plansContainerStyles = css`
  .addOnsContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    * {
      transition: .3s all;
      margin: 0;
    }

    .addOn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      //gap: 30px;
      border: 1.5px solid #ccc;
      border-radius: 7px;
      padding: 10px;
      cursor: pointer;
      
      &:hover {
        border-color: var(--purblish-blue);
      }

      &.selected {
        background-color: #f8f9fe;
        border-color: var(--purblish-blue);
      }
      
      .addOn-details{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }
      
      .addOn-price{
        color: var(--purblish-blue);
        font-size: 12px;
        font-weight: 500;
      }
      
      .ant-checkbox+span{
        width: 100%;
      }
      .ant-checkbox{
        margin-inline: 10px;
      }
      .ant-checkbox-checked:after{
      }
      .ant-checkbox-checked .ant-checkbox-inner{
        border-color: var(--purblish-blue) !important;
        background-color: var(--purblish-blue) !important;
      }
    }

  }
`

export default function AddsOnSection() {

    return (
        <Form
            name="basic"
            initialValues={{remember: true}}
            autoComplete="off"
            layout={"vertical"}
            className={plansContainerStyles}
        >
            <div className="addOnsContainer">
                <Checkbox className="addOn">
                    <div className="addOn-details">
                        <div className="text">
                            <h5 className="addOn-title">Online Services</h5>
                            <span className="addOn-subtitle">Access to multiplayer games</span>
                        </div>
                        <span className="addOn-price">+$1/mo</span>
                    </div>
                </Checkbox>
                <Checkbox className="addOn">
                    <div className="addOn-details">
                        <div className="text">
                            <h5 className="addOn-title">Larger Storage</h5>
                            <span className="addOn-subtitle">Extra 1TB of cloud save</span>
                        </div>
                        <span className="addOn-price">+$2/mo</span>
                    </div>
                </Checkbox>
                <Checkbox className="addOn">
                    <div className="addOn-details">
                        <div className="text">
                            <h5 className="addOn-title">Customizable Profile</h5>
                            <span className="addOn-subtitle">Customize theme on your profile</span>
                        </div>
                        <span className="addOn-price">+$2/mo</span>
                    </div>
                </Checkbox>
            </div>
        </Form>
    )
}