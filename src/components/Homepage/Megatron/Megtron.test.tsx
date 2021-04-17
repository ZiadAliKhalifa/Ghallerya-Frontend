import React from "react";
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Megatron from './Megatron'


describe("<Megatron />", () => {

    test("Header contains correct text", () => {
        render(<Megatron />);

        const text = screen.getByText("Find the perfect image");
        expect(text).toBeInTheDocument();
    });

    test("Subtext contains correct text", () => {
        render(<Megatron />);

        const text = screen.getByText("The largest middle eastern oriented stock gallery");
        expect(text).toBeInTheDocument();
    });

    test("Megatron contaons a search bar", () => {
        render(<Megatron />);

        const { getAllByTestId } = render(<Megatron />);
        const megatron = getAllByTestId('megatron');
        const search = within(megatron[0]).getByTestId('search');
        expect(search).not.toBeNull();
    });

});