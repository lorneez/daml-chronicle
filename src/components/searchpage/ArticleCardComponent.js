import React from 'react';
import { Card } from 'antd';

function ArticleCardComponent(props) {
    const { title, author, description, date } = props;
    return (
        <Card title={title} style={{ width: 300, margin: '2%' }}>
            <p>{author}</p>
            <p>{date}</p>
            <p>{description}</p>
        </Card>
    );
}

export default ArticleCardComponent;