import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Experience from './Experience';

describe('Experience', () => {
    it('should render without crashing', () => {
        render(<Experience />);

        expect(screen.getByText('Companies')).toBeVisible();
    });
});