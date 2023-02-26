import {css} from "@emotion/css";

const stepStyles = css`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  
  &.active{
    .number{
      background-color: var(--light-blue);
      color: var(--marine-blue)
    }
  }
  .text{
    display: flex;
    flex-direction: column;
    width: 8rem;
  }
  .number{
    padding: 4px 11px;
    border-radius: 50%;
    border: 1px solid var(--pastel-blue);
    font-size: 14px;
    font-weight: bold; 
  }
  .step-number{
    font-size: 14px;
    color: var(--pastel-blue)
  }
`


export default function Step(){
    return(
        <div className={stepStyles}>
            <div className="number">1</div>
            <div className="text">
                <span className="step-number">step 1</span>
                <h4 className="step-title">your info</h4>
            </div>
        </div>
    )
}