const TimeContainer = ({ timeTaken }: { timeTaken: number[] }) => {
  return (
    <div className="timeContainer">
      <div className="table_container">
        <h2>
          Time taken ={" "}
          {timeTaken.length === 0 ? (
            <span>0</span>
          ) : (
            <span className="timeSpan">
              {timeTaken.reduce((a, b) => a + b, 0)}
            </span>
          )}
        </h2>
        {/* {loadingVehicles ? <Loader /> : <Table vehicles={vehicles} />} */}
      </div>
    </div>
  );
};

export default TimeContainer;
