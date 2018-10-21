import 'jest-dom/extend-expect'
import * as React from 'react';
import { render } from 'react-testing-library';

import Article from '../Article'

describe('test', () => {
    it('should', () => {
        const mockedChildren = <div>test</div>;
        const { getByText } = render(<Article url='test'>{mockedChildren}</Article>);
        expect(getByText('test')).toMatchSnapshot();
    })

})