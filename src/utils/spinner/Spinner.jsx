import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner mx-auto">
      Loading...
      <div className="spinnerSector spinnerSectorRed "></div>
      <div className="spinnerSector spinnerSectorBlue "></div>
      <div className="spinnerSector spinnerSectorGreen "></div>
    </div>
  );
};

export default Spinner;
