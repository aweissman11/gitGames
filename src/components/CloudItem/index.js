import React from 'react';

export const CloudItem = (props) => (
    <div { ...props } className="tag-item-wrapper">
        <div>
            { props.text }
        </div>
        <div className="tag-item-tooltip">
            {props.text}: {props.instances}
        </div>
    </div>
);

export default CloudItem;