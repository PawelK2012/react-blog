import React from 'react';
import { shallow } from 'enzyme';
import NewsItemMasterDetail from '../../../presentational/News/NewsItemMasterDetail';

describe('NewsItemMasterDetail Component:', () => { 
    test('renders correctly', () => {
      const wrapper = shallow(<NewsItemMasterDetail />);
      expect(wrapper.html()).toMatchSnapshot();
    });
});