import React from "react";
import { browserHistory } from "react-router";

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
    	<div className='page-choose-case'>
            <img className="logo" src={require('../images/logo.png')} />

    		<h2>Select A Case</h2>
    		<div className='foster-cases'>
    			<div className='individual-case' onClick={(() => browserHistory.push("choose-date"))}>
    				<h4>LastName <span>NO. 23765772</span></h4>
    			</div>
    			<div className='individual-case' onClick={(() => browserHistory.push("choose-date"))}>
    				<h4>LastName <span>NO. 23765772</span></h4>
    			</div>
    			<div className='individual-case' onClick={(() => browserHistory.push("choose-date"))}>
    				<h4>LastName <span>NO. 23765772</span></h4>
    			</div>
    			<div className='individual-case' onClick={(() => browserHistory.push("choose-date"))}>
    				<h4>LastName <span>NO. 23765772</span></h4>
    			</div>
    			<div className='individual-case' onClick={(() => browserHistory.push("choose-date"))}>
                    <h4>LastName <span>NO. 23765772</span></h4>
                </div>
                <div className='individual-case' onClick={(() => browserHistory.push("choose-date"))}>
                    <h4>LastName <span>NO. 23765772</span></h4>
                </div>
                <div className='individual-case' onClick={(() => browserHistory.push("choose-date"))}>
                    <h4>LastName <span>NO. 23765772</span></h4>
                </div>
                <div className='individual-case' onClick={(() => browserHistory.push("choose-date"))}>
                    <h4>LastName <span>NO. 23765772</span></h4>
                </div>
                <div className='individual-case' onClick={(() => browserHistory.push("choose-date"))}>
    				<h4>LastName <span>NO. 23765772</span></h4>
    			</div>
    		</div>
    	</div>
    )
  }
}
