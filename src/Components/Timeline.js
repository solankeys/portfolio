import './Timeline.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Timeline = () => {
    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
    return (
            <div className="container">
            <div className="bloc-tabs">
                <button type="button"
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
                >
                 My Experince
                </button>
                <button type="button"
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
                >
                 My Education
                </button>
            </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
        
        </div>
      </div>
        </div>
    )
}
