import HTMLFlipBook from "react-pageflip";
import React, { useRef, useState, useEffect } from 'react';

const PageCover = React.forwardRef((props, ref) => {
    return (
      <div className="page page-cover" ref={ref} data-density="hard">
        <div className="page-content">
          <h2>{props.children}</h2>
        </div>
      </div>
    );
  });

  const Page = React.forwardRef((props, ref) => {
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <h2 className="page-header">Page header - {props.number}</h2>
          <div className="page-image"></div>
          <div className="page-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis magni soluta rerum cumque error laboriosam sunt eius eum quibusdam temporibus adipisci excepturi eos, sint voluptate nobis beatae sequi ducimus. Debitis dolores dolorem ea error iste, voluptas possimus. Consequuntur mollitia cum, adipisci sed praesentium quia expedita voluptatem nemo? Cumque, cupiditate. Officia cupiditate, a nesciunt sapiente quo magnam tempora delectus necessitatibus beatae nisi nostrum eos labore et illum dicta, eveniet eligendi asperiores unde ipsa harum. Aliquid iste cumque vero doloremque eos facere pariatur, consequuntur illum, iusto modi assumenda nostrum sunt? Eaque voluptate error quo commodi possimus! Consequatur perspiciatis ipsa, fuga unde officiis voluptas laboriosam. Nesciunt, alias cupiditate ipsum animi reiciendis cumque! Laborum obcaecati ad molestias suscipit eius accusamus quaerat necessitatibus enim numquam, nesciunt temporibus architecto maiores animi, doloremque consequatur hic nisi. Praesentium, deserunt dignissimos. Nulla debitis sunt commodi exercitationem reprehenderit molestiae soluta neque in pariatur tempore nesciunt cum deleniti a ad eos illo odio unde delectus, magnam id rem, optio laboriosam natus suscipit. Repellendus illum iste nisi vel provident, necessitatibus deleniti labore ducimus nihil explicabo quis, velit illo, cupiditate quidem nesciunt quisquam? Omnis, repellat saepe optio eius laudantium voluptate quisquam dolorum eos vero facilis reiciendis aut porro culpa esse eaque labore nihil.</p>
          </div>
          <div className="page-footer">{props.number + 1}</div>
        </div>
      </div>
    );
  });

const FlipBook = () => {
    const flipBookRef = useRef(null);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const nextButtonClick = () => {
    if (flipBookRef.current && flipBookRef.current.getPageFlip) {
      flipBookRef.current.getPageFlip().flipNext();
    }
  };

  const prevButtonClick = () => {
    if (flipBookRef.current && flipBookRef.current.getPageFlip) {
      flipBookRef.current.getPageFlip().flipPrev();
    }
  };

  const onPage = (e) => {
    setPage(e.data);
  };

  useEffect(() => {
    if (flipBookRef.current && flipBookRef.current.getPageFlip) {
      setTotalPage(flipBookRef.current.getPageFlip().getPageCount());
    }
  }, []);
  return (
    <div className="my-10">
      <HTMLFlipBook
         width={550}
         height={500}
         size="stretch"
         minWidth={315}
         maxWidth={1000}
         minHeight={400}
         maxHeight={500}
         maxShadowOpacity={0.5}
         showCover={true}
         mobileScrollSupport={true}
         onFlip={onPage}
        className="demo-book"
        ref={flipBookRef}
      >
        <PageCover>BOOK TITLE</PageCover>
        <Page number={1}>Lorem ipsum...</Page>
        <Page number={2}>Lorem ipsum...</Page>
        <Page number={2}>Lorem ipsum...</Page>
        <Page number={2}>Lorem ipsum...</Page>
        <Page number={2}>Lorem ipsum...</Page>
        {/* ... */}
        <PageCover>THE END</PageCover>
      </HTMLFlipBook>
      <div>
        <div>
          <button type="button" onClick={prevButtonClick}>
            Previous page
          </button>
          [<span>{page}</span> of <span>{totalPage}</span>]
          <button type="button" onClick={nextButtonClick}>
            Next page
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlipBook;
