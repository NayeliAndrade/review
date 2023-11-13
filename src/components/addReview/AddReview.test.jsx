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

})