import { useState, useEffect } from "react";

import "./FilteringCards.css"
function FilteringCards() {
    const [CompleteData, setCompleteData] = useState([
        {
            "RollNo": "23P31A0519"
        },
        {
            "RollNo": "23P31A0508"
        },
        {
            "RollNo": "23A91A0416"
        },
        {
            "RollNo": "23MH1A4291"
        },
        {
            "RollNo": "23P31A0597"
        }
    ]);

    const [QueryResult, setQueryResult] = useState([])

    const [UserQuery, setUserQuery] = useState("");
    useEffect(() => {
        if (UserQuery != "") {
            var arr = CompleteData.filter(ele => ele.RollNo.includes(UserQuery));
            setQueryResult(arr);
        } else {
            setQueryResult(CompleteData);
        }
    }, [UserQuery])

    const Capture = (event) => {
        setUserQuery(event.target.value);
    }

    return (
        <>
            <div className="parent">
                <input type="text" placeholder="Search" onChange={(event) => Capture(event)} />
                {
                    QueryResult.map((ele, i) => {
                        return (
                            <div key={i} className="child">
                                {ele.RollNo}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default FilteringCards;