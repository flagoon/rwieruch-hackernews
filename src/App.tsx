import * as React from 'react';
import Table from './components/table/Table';
import { articles } from './data/articles';

class App extends React.Component {
  public render() {
    return (
      <Table articlesList={articles} />
    );
  }
}

export default App;
