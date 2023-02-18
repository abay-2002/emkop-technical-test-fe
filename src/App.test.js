import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'

import ReadDeleteUpdateSearch from "./pages/ReadDeleteUpdateSearch";
import Home from "./pages/Home";

// React Testing Library (RTL) is a library for testing React applications. React Testing Library focuses on testing components from the end-user's experience rather than testing the implementation and logic of the underlying React components.
// src: https://www.codecademy.com/learn/learn-react-testing/modules/react-testing-library/cheatsheet#:~:text=React%20Testing%20Library%20(RTL)%20is,of%20the%20underlying%20React%20components.


test('read dari emkop_technical_test.karyawan pada route: /read-delete-update-search', () => {
    render(<ReadDeleteUpdateSearch />);
    // Check bila ada data
    const elementsTitle = screen.getByText(/read, delete, update and search/i);
    expect(elementsTitle).toBeVisible();
});

test('read dari emkop_technical_test.karyawan pada route: /', () => {
    render(<Home />);
    // Check bila ada data
    const elementsTitle = screen.getByText(/create/i);
    expect(elementsTitle).toBeVisible();
});