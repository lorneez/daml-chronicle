import React from 'react';
import { Card } from 'antd';

function ArticleCardComponent(props) {
    const { title, author, description, date } = props;
    return (
        <div className={"box"}>
            <p>{author}</p>
            <p>{date}</p>
            <p>{description}</p>
        </div>
    );
}

export default ArticleCardComponent;