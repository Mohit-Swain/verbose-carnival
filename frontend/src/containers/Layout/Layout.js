import React,{Component} from 'react';

import TopBar from '../TopBar/TopBar';

class Layout extends Component {

    render(){
        const styles = {
            height: '120vh',
            width : '96px',
            backgroundColor : '#aaa'
        };
        const downIcon = (<svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>)
        return (
            <>
                <TopBar />
                <div className="bg-blue-200"> TopBar, Memes </div>
                <div style={styles}>div</div>
                {downIcon}
            </>
        )
    }
}

export default Layout;