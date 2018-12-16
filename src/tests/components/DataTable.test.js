import React from 'react';
import ReactDOM from 'react-dom';
import DataTable from '../../components/DataTable';
import renderer from 'react-test-renderer';
import data from '../fixtures/table';


it('should render DataTable without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DataTable data={data} />, div); 
  ReactDOM.unmountComponentAtNode(div);
});

it('should render DataTable correctly', () => {
  const tree = renderer
    .create(<DataTable data={data}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

