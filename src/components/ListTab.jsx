import { ReactComponent as IconHome} from '../assets/icon/home.svg';
import { ReactComponent as IconClose} from '../assets/icon/close.svg';
import { tab } from '@testing-library/user-event/dist/tab';
import { useState } from 'react';
export const ListTab = (props) => {
    let tabData = ['Tab1','Tab1','Tab1','Tab1' ]
    const [tabActive, setTabActive] = useState(0);
    return <div className="list-tab">
    <button className="tab-home"><IconHome></IconHome></button>
    {tabData?.map((tab, index) => <div key={index} className={`tab-item ${index === tabActive ? 'tab-item-active' : ''}`} onClick={() => setTabActive(index)}>
        <div className="tab-name">{tab}</div>
        <button className="btn-close"><IconClose></IconClose></button>
    </div>)}
    </div>
}