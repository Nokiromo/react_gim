import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import ClientList from '../clients-list/client-list';
import ClientAddForm from '../client-add-form/client-add-form';
import './app.css';

function App() {
  return (
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
      </div>
      <ClientList/>
      <ClientAddForm/>
    </div>

  );
}

export default App;
