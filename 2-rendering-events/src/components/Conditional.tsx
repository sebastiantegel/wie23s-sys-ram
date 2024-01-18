export const Conditional = () => {
  const showSpinner: boolean = false;

  //   let html = <p>Data fetched, should show it now</p>;
  //   if (showSpinner) {
  //     html = <div className="spinner">Loading...</div>;
  //   }

  //   const html = showSpinner ? (
  //     <div className="spinner">Loading...</div>
  //   ) : (
  //     <p>Data fetched, should show it now</p>
  //   );

  return (
    <>
      {/* {html} */}
      {/* {showSpinner ? (
        <div className="spinner">Loading...</div>
      ) : (
        <p>Data fetched, should show it now</p>
      )} */}

      {showSpinner && <div className="spinner">Loading...</div>}
    </>
  );
};
