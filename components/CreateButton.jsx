import React from 'react';
import PropTypes from 'react/prop-types';


export default function CreateButton({onClick}) {
    return (
        <div>
            <button onClick={() => onClick()}>+</button>

            <style jsx>{`
                button {
                    position: fixed;
                    bottom: 32px;
                    right: 48px;
                    background-color: indigo;
                    color: white;
                    font-size: 48px;
                    width: 54px;
                    height: 54px;
                    border: none;
                    border-radius: 54px;
                    box-shadow: 5px 5px 3px gray;
                }
                button:active {
                    box-shadow: 3px 3px 3px gray;
                }
            `}</style>
        </div>
    )
}


CreateButton.propTypes = {
    onClick: PropTypes.func
};
