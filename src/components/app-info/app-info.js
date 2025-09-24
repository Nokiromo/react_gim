import './app-info.css';


const AppInfo = ({memberCounter, increaced}) => {
  return (
    <div className="app-info">
      <h1>List of clients Rivne Gym: </h1>
      <h2>Total number of customers: {memberCounter}</h2>
      <h2>VIP subscription with towel: {increaced}</h2>
    </div>
  );
}

export default AppInfo;
