function showDateTime() {
  let dateObj = new Date();

  return (
    <div className="timeDate">
      <p>
        This is current Time : {dateObj.getDate()}/{dateObj.getMonth()}/
        {dateObj.getFullYear()} - {dateObj.getHours()}:{dateObj.getMinutes()}:
        {dateObj.getSeconds()}
      </p>
    </div>
  );
}

export default showDateTime;
