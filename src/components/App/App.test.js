import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('APP', () => {
  it.skip('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should fetchMovies', async () => {
    const wrapper = shallow(<App />);
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () =>
          Promise.resolve({
            status: 200,
            movies: []
          })
      })
    );
   

  });
});
