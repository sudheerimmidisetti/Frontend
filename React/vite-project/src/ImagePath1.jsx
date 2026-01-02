import React, { useState } from "react";

export default function ImagePath1() {
    const [ImagePath, setImagePath] = useState(null);
    const GetData = (event) => {
        const file = event.target.files[0];
        const path = URL.createObjectURL(file);
        setImagePath(path);
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