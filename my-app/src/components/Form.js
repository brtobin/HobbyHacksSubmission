import React from 'react'
import Other from './Other'

export const Form = () => {
    return(
        <form class="form-signin">
            <div class="checkbox mb-3"></div>
            <button class="btn btn-lg btn-primary btn-block default-primary-color" type="button">Random</button>
            <button class="btn btn-lg btn-primary btn-block default-primary-color" type="button">Curated</button>
            <div class="dropdown">
                <Other></Other>
            </div>

        </form>
    )
}



