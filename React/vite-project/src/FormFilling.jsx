import React from "react";

function FormFilling() {
    const CheckNumber = (event) => {
        let num = event.target.value;
        // if (num >= 6000000000 && num <= 9999999999)

    }

    return (
        <div>
            <form action="" onSubmit={(event) => {
                event.preventDefault();
            }}>
                <label htmlFor="">
                    First Name:
                    <input type="text" required/><br />
                </label>
                <label htmlFor="">
                    Last Name:
                    <input type="text" required/><br />
                </label>
                <label htmlFor="">
                    Mobile No:
                    <input type="number" required onChange={(event) => CheckNumber(event.target.value)}/><br />
                </label>
                <label htmlFor="">
                    Email:
                    <input type="email" required/><br />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormFilling;