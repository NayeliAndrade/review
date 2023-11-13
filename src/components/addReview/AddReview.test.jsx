import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import AddReview from "./AddReview"
import { Provider } from "react-redux"
import store from "../../store/store"


describe("testing component addReview", () => {
    beforeAll(() =>
        render(<Provider store={store}>
            <AddReview stuffId="stuffid" />
        </Provider>)
    )

    test("there is a button on the screen that have this text: Agregar una reseña", () => {
        const buttonElement = screen.getByRole('button', { name: 'Agregar una reseña' })
        expect(buttonElement).toBeInTheDocument()
    })

    /* test('there is a button on the screen that have this text: Cancelar', () => {
       const buttonElement = screen.getByRole('button', { name: 'Cancelar' })
       expect(buttonElement).toBeInTheDocument()
   }); */
    test("text of the input", () => {
        const buttonElement = screen.getByRole('button', { name: 'Agregar una reseña' })
        fireEvent.click(buttonElement);
        const inputElement = screen.getByPlaceholderText('Agrega tu reseña');
        fireEvent.change(inputElement, { target: { value: 'Texto de prueba' } });
        expect(inputElement.value).toBe('Texto de prueba');
    });
})