const ProgressBar = ({ left, total }) => {
  let per = `${left / total}` * 100;

  const style = {
    width: `${per}%`,
    height: "8px",
    backgroundColor: "#F6CA2E",
    borderRadius: "5px",
  };

  const style2 = {
    marginBottom: "5px",
    color: "#828282",
  };

  return (
    <div className="sale-status">
      <p style={style2}>
        {left}/{total} Left
      </p>
      <div className="progress">
        <div style={style} className=""></div>
      </div>
    </div>
  );
};

export default ProgressBar;
