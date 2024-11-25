import React, { useState } from 'react';
import { Wrapper, Prev, Next, Bar, PageNum } from './styled';

const Pagination = (props) => {
  // const max = Number.isInteger(props.total / props.posts_per_page)
  //   ? props.max - 1
  //   : props.max;
  const max = Math.ceil(props.total / props.posts_per_page);
  const pageArray = [];
  let parentPage = Math.floor(props.current / 5);

  for (let i = 0; i < 5 && i + 1 + 5 * parentPage <= max; i += 1) {
    pageArray.push(
      <li
        onClick={(e) => props.onPaging(e.currentTarget.dataset.id)}
        data-id={i + 1 + 5 * parentPage}
        key={i}
      >
        <a
          className={
            i + 1 + 5 * parentPage == Number(props.current)
              ? 'active'
              : 'pageNum'
          }
        >
          {i + 1 + 5 * parentPage}
        </a>
      </li>,
    );
  }

  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <Wrapper>
      <div className="pagenum">
        {parseInt(props.current) > 5 ? (
          <Prev
            className="button"
            onClick={(e) => props.onPaging(parseInt(props.current) - 1)}
          ></Prev>
        ) : (
          <Prev className="button disable"></Prev>
        )}
        {!props.hidden_nums ? (
          <div className="page-number">
            <ul>
              {pageArray.length ? pageArray : <li className="active">1</li>}
            </ul>
          </div>
        ) : (
          <div className="gap"></div>
        )}
        {(Math.floor(props.current / 5) + 1) * 5 < max ? (
          <Next
            className="button"
            onClick={(e) => props.onPaging(parseInt(props.current) + 1)}
          ></Next>
        ) : (
          <Next className="button disable"></Next>
        )}
        {/* <PageNum>
        <div>{props.current ? parseInt(props.current) : 1}</div>
        <div>/</div>
        <div>
          {props.total > props.posts_per_page
            ? Math.ceil(
                props.total / (props.posts_per_page ? props.posts_per_page : 1)
              )
            : 1}
        </div>
      </PageNum> */}
      </div>
    </Wrapper>
  );
};

export default Pagination;
