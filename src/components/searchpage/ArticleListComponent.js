import React, { useState } from 'react';
import { Col, Pagination, Row } from "antd";
import articles from "./SampleArticleData";
import ArticleCardComponent from "./ArticleCardComponent";

function ArticleListComponent() {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(6);

    function updatePagination(value) {
        if (value <= 1) {
            setMinValue(0);
            setMaxValue(6);
        } else {
            setMinValue((value - 1) * 2);
            setMaxValue((value - 1) * 2 + 2);
        }
    };

    function renderArticles() {
        return (
            <Col>
                <Row
                    style={{
                        'justifyContent': 'center'
                    }}
                >
                    {articles &&
                        articles.length > 0 &&
                        articles.slice(minValue, maxValue).map(article => {
                            const { title, author, date, description } = article;
                            return (
                                <ArticleCardComponent
                                    title={title}
                                    author={author}
                                    date={date}
                                    description={description}
                                    key={title}
                                />
                            );
                        })}
                </Row>
                <Row
                    style={{
                        'justifyContent': 'center'
                    }}
                >
                    <Pagination
                        defaultCurrent={1}
                        defaultPageSize={2}
                        onChange={(value) => updatePagination(value)}
                        total={articles.length}
                    />
                </Row>
            </Col>
        );
    };

    return (
        <div>
            {renderArticles()}
        </div>
    );
}

export default ArticleListComponent;