import React from 'react';
import { shallow } from 'enzyme';
import CreateNewsItem from '../../../presentational/News/CreateNewsItem';

describe('CreateNewsItem Component:', () => { 
    test('renders correctly', () => {
      const wrapper = shallow(<CreateNewsItem />);
      expect(wrapper.html()).toMatchSnapshot();
    });
});