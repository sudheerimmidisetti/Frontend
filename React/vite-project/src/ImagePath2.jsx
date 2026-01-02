import React, { useState } from "react";

export default function ImagePath2() {
    const [ImagePath, setImagePath] = useState(null);
    const GetData = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImagePath(reader.result);
        }
    }

    return (
        <>
            <input type="file" onChange={(event) => GetData(event)} />
            {
                ImagePath ? <img className="myImage" src={ImagePath} alt="Image Crashed" /> : <></>
            }
        </>
    )
}