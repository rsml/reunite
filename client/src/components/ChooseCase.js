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
                    <h4><span className="lightgrey">Child:</span> Rhoades, Robert (M, 14)</h4>
                    <h4><span className="lightgrey">Mother:</span> Smith, Candice</h4>
                </div>

                <div className='individual-case' onClick={(() => browserHistory.push("choose-date"))}>
                    <h4><span className="lightgrey">Child:</span> O'Riley, Baba (M, 14)</h4>
                    <h4><span className="lightgrey">Mother:</span> Peters, Jill</h4>
                </div>

                <div className='individual-case' onClick={(() => browserHistory.push("choose-date"))}>
                    <h4><span className="lightgrey">Child:</span> Roberto, José (M, 14)</h4>
                    <h4><span className="lightgrey">Mother:</span> Roberto, María</h4>
                </div>
    		</div>
    	</div>
    )
  }
}
