import React, {useState} from 'react';
import PropTypes from 'react/prop-types';


export default function Card({value, onChange, pos, onChangePos}) {
    const [drag, setDrag] = useState({
        dragging: false,
        fromX: 0,
        fromY: 0,
    });

    const startDrag = e => setDrag({dragging: true, fromX: e.pageX, fromY: e.pageY});
    const moveDrag = e => {
        if (drag.dragging) {
            e.preventDefault();
            onChangePos({x: pos.x + e.pageX - drag.fromX, y: pos.y + e.pageY - drag.fromY});
            startDrag(e);
        }
    };
    const endDrag = () => setDrag({dragging: false, fromX: 0, fromY: 0});

    return (
        <div style={{top: pos.y, left: pos.x, zIndex: pos.order}}
             onMouseDown={startDrag}
             onMouseMove={moveDrag}
             onMouseUp={endDrag}>
            <textarea onChange={e => onChange(e.target.value)} value={value} />

            <style jsx>{`
                div {
                    position: fixed;
                }
                textarea {
                    border: 1px solid gray;
                    border-radius: 5px;
                    padding: 6px 8px;
                    background-color: snow;
                    width: 300px;
                    height: 200px;
                }
                textarea:focus {
                    box-shadow: 1px 1px 3px gray;
                    outline: none;
                }
                textarea:active {
                    box-shadow: 5px 5px 3px gray;
                }
            `}</style>
        </div>
    )
}


Card.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    pos: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
        order: PropTypes.number,
    }),
    onChangePos: PropTypes.func,

};
