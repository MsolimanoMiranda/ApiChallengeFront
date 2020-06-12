import React, {useState} from 'react';
import './styles.scss';

export const Tab = (props: any) => {
  const [active, setActive] = useState(props.activeTab);

  const handleClick = (e:any) => {
    const elem:any = e.currentTarget,
      tab:any = elem.closest(".tab"),
      key = parseInt(elem.getAttribute('data-key')),
      currContent:any = tab.querySelector('.tab__content.is-active'),
      thisContent:any = tab.querySelector('.tab__content[data-key="' + key + '"]');

    currContent.classList.remove('is-active');
    thisContent.classList.add('is-active');
    setActive(key);
    renderTabs();
  }

  const renderTabs = () => {
    const titles:any = props.options.split('|'),
      html:any = [];

    titles.forEach((elem:any, i:any) => {      
      html.push(<div className={"tab__option" + (active === i ? ' is-active' : '')} onClick={handleClick} key={i} data-key={i}>{elem}</div>)
    }); 
    
    return html;
  }
  
  return (     
    <div className="tab">
      <div className="tab__wrapper">
        <div className="tab__options">
          {renderTabs()}
        </div>
      </div>
      
      <div className="tab__contents">
        {props.contents}
      </div>
    </div>
  )
}
