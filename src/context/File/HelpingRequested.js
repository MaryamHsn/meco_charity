import React, { useEffect } from 'react'
import { Checkbox, ShowForm , ShowCard ,ShowCardPrice } from '../Utils';

export default function HelpingRequested() {
  const [cureCostChk, setCureCostChk] = React.useState(false);
  const [livingCostChk, setLivingCostChk] = React.useState(false);
  const [homeCostChk, setHomeCostChk] = React.useState(false);
  const [educationCostChk, setEducationCostChk] = React.useState(false);
  const [makeJobChk, setMakeJobChk] = React.useState(false);
  const [debtChk, setDebtChk] = React.useState(false);
  const [loanChk, setLoanChk] = React.useState(false);

  var handleCureCostChk = () => {
     alert(cureCostChk)
      setCureCostChk(!cureCostChk);
  };

  const handleLivingCostChk = () => {
    setLivingCostChk(!livingCostChk); 
  };
  const handleHomeCostChk = () => {
    setHomeCostChk(!homeCostChk); 
  };
  const handleEducationCostChk = () => {
    setEducationCostChk(!educationCostChk);
  };
  const handleMakeJobChk = () => {
    setMakeJobChk(!makeJobChk); 
  };
  const handleDebtChk = () => {
    setDebtChk(!debtChk); 
  };
  const handleLoanChk = () => {
    setLoanChk(!loanChk); 
  }; 

  return (
    <div className='card-form' style={{'flex-direction': 'column'}}>
      <Checkbox label="تامین هزینه های درمانی" value={cureCostChk} onChange={handleCureCostChk}/>
      {cureCostChk && <ShowForm context="نوع بیماری، هزینه ماهیانه، نام بینارستان، پزشک، مدت بیماری و روند درمانی را بنویسید" />}
      <Checkbox label="تامین  مخارج ضروری زندگی" value={livingCostChk} onChange={handleLivingCostChk}/>
      <Checkbox label="تامین هزینه مسکن" value={homeCostChk} onChange={handleHomeCostChk}/>
      {homeCostChk && <ShowCardPrice value="نیاز به پول رهن منزل به مبلغ:" />}
      {homeCostChk && <ShowCardPrice value="کرایه ماهیانه به مبلغ:" />}
      <Checkbox label="تامین هزینه تحصیل " value={educationCostChk} onChange={handleEducationCostChk}/>
      <Checkbox label="ایجاد اشتغال سرپرست یا اعضای خانواده" value={makeJobChk} onChange={handleMakeJobChk}/>
      {makeJobChk && <ShowForm context="نوع تخصص را بنویسید" />}           
      <Checkbox label="پرداخت بدهی" value={debtChk} onChange={handleDebtChk}/>
      {debtChk && <ShowCardPrice value="مبلغ بدهی" />}           
      {debtChk && <ShowForm context="نام و شماره تلفن همراه طلبکار" />}                 
      <Checkbox label="پرداخت اقساط وام" value={loanChk} onChange={handleLoanChk}/>
      {loanChk && <ShowCardPrice value="مبلغ وام" />}           
      {loanChk && <ShowCardPrice value="مبلغ اقساط ماهیانه" />}           
      {loanChk && <ShowCard value="تعداد اقساط معوقه/مانده" />}           
      
    </div>
  )
}

