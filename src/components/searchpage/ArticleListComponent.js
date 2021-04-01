import React, { useState } from 'react';
import { Col, Pagination, Row } from "antd";
import articles from "./SampleArticleData";
import ArticleCardComponent from "./ArticleCardComponent";

function ArticleListComponent() {
    const articlesPerPage = 6

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(articlesPerPage);


    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(Math.round(articles.length / articlesPerPage)-1);
    const [current, setCurrent] = useState(0);

    function updatePagination(value) {
        if (value <= 1) {
            setMinValue(0);
            setMaxValue(articlesPerPage);
        } else {
            setMinValue((value - 1) * 2);
            setMaxValue((value - 1) * 2 + 2);
        }
    };

    function renderPaginationNav() {
        if(current == start) {
            return (
                <ul className="pagination-list">
                    <li><a className="pagination-link is-current" aria-label="Page current"
                           aria-current="page" onClick={() => goToPage(current+1)}>{current + 1}</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li>
                        <a className="pagination-link" aria-label="Goto page end"
                           onClick={() => goToPage(end+1)}>{end + 1}
                        </a>
                    </li>
                </ul>
            )
        }
        else if(current == end) {
            return (
                <ul className="pagination-list">
                    <li>
                        <a className="pagination-link" aria-label="Goto page 1"
                            onClick={() => goToPage(start+1)}>
                            {start + 1}
                        </a>
                    </li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link is-current" aria-label="Page 46"
                           aria-current="page" onClick={() => goToPage(current+1)}>{current + 1}</a></li>
                </ul>
            )
        }
        else {
            return (
                <ul className="pagination-list">
                    <li><a className="pagination-link" aria-label="Goto page 1" onClick={() => goToPage(start+1)}>{start + 1}</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link is-current" aria-label="Page 46"
                           aria-current="page" onClick={() => goToPage(current+1)}>{current + 1}</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" aria-label="Goto page 86" onClick={() => goToPage(end+1)}>{end + 1}</a></li>
                </ul>
            )
        }
    }

    function goToPage(page) {
        setCurrent(page-1)
        setMinValue((page-1) * articlesPerPage)
        setMaxValue((page) * articlesPerPage)
    }

    function nextPage() {
        setCurrent(current + 1)
        setMinValue(minValue + articlesPerPage)
        setMaxValue(maxValue + articlesPerPage)
    }

    function previousPage() {
        setCurrent(current - 1)
        setMinValue(minValue - articlesPerPage)
        setMaxValue(maxValue - articlesPerPage)
    }

    function renderPreviousPage() {
        if(current > start) {
            return <a className="pagination-previous" onClick={() => previousPage()}>Previous</a>
        }
        else {
            return <a className="pagination-previous" disabled onClick={() => previousPage()}>Previous</a>
        }
    }

    function renderNextPage() {
        if(current < end) {
            return <a className="pagination-next" onClick={() => nextPage()}>Next page</a>
        }
        else {
            return <a className="pagination-next" disabled onClick={() => nextPage()}>Next page</a>
        }
    }

    function renderArticles() {
        return (
            <div className={"container"}>
                {/*<Row*/}
                {/*    style={{*/}
                {/*        'justifyContent': 'center'*/}
                {/*    }}*/}
                {/*>*/}
                {/*    {articles &&*/}
                {/*        articles.length > 0 &&*/}
                {/*        articles.slice(minValue, maxValue).map(article => {*/}
                {/*            const { title, author, date, description } = article;*/}
                {/*            return (*/}
                {/*                <ArticleCardComponent*/}
                {/*                    title={title}*/}
                {/*                    author={author}*/}
                {/*                    date={date}*/}
                {/*                    description={description}*/}
                {/*                    key={title}*/}
                {/*                />*/}
                {/*            );*/}
                {/*        })}*/}
                {/*</Row>*/}
                <div className={"section"}>
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
                </div>
                <div className={"section"}>
                    <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                        {renderNextPage()}
                        {renderPreviousPage()}
                        {renderPaginationNav()}
                        {current}
                        {minValue}
                        {maxValue}
                    </nav>
                </div>
            </div>
        );
    };

    return (
        <div>
            {renderArticles()}
        </div>
    );
}

export default ArticleListComponent;