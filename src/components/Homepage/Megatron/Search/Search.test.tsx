import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from './Search'


describe("<Search />", () => {

    test("Search box contains placeholder", () => {
        render(<Search />);

        const searchBox = screen.getByPlaceholderText('What are you looking for...');
        expect(searchBox).toBeInTheDocument();
    });

    test("Search box contains text box", () => {
        render(<Search />);

        const searchBox = screen.getByTestId('search')
        expect(searchBox.children[0]).not.toBeNull();
    });

});