import React from "react";
import "./FormInSingleComponent.css"

const FormInSingleComponent = () => {
    const details = {
        "FirstName": "",
        "LastName": "",
        "EmailId": "",
        "RollNo": "",
        "CollegeName": "",
        "BranchName": "",
        "Codechef": "",
        "HackerRank": "",
        "Geeksforgeeks": "",
        "Leetcode": "",
        "Codeforces": ""
    }
    const FormDetails = (event) => {
        // console.log(`${event.target.name}` + " " + `${event.target.value}`);
        let name = event.target.name
        details.name = event.target.value;
    }

    const FormSubmit = (event) => {
        event.preventDefault();
        console.log(details);
    }
    return (
        <>
            <form onSubmit={FormSubmit}>
                <label htmlFor="FirstName">First Name: </label>
                <input type="text" name="FirstName" placeholder="First name" onChange={(event) => {FormDetails(event)}} /><br /><br />

                <label htmlFor="LastName">Last Name: </label>
                <input type="text" name="LastName" placeholder="Last name" onChange={(event) => {FormDetails(event)}}/><br /><br />

                <label htmlFor="EmailId">Email ID: </label>
                <input type="text" name="EmailId" placeholder="Email id" onChange={(event) => {FormDetails(event)}}/><br /><br />
                
                <label htmlFor="RollNo">Roll No: </label>
                <input type="text" name="RollNo" placeholder="Roll No" onChange={(event) => {FormDetails(event)}} /><br /><br />
                
                <label htmlFor="CollegeName">College Name: </label>
                <input type="text" name="CollegeName" placeholder="College name" onChange={(event) => {FormDetails(event)}} /><br /><br />
                
                <label htmlFor="BranchName">Branch Name: </label>
                <input type="text" name="BranchName" placeholder="Branch name" onChange={(event) => {FormDetails(event)}} /><br /><br />
                
                <label htmlFor="Codechef">Codechef Profile Link: </label>
                <input type="text" name="Codechef" placeholder="Codechef profile" onChange={(event) => {FormDetails(event)}} /><br /><br />
                
                <label htmlFor="HackerRank">Hacker Rank Profile Link: </label>
                <input type="text" name="HackerRank" placeholder="Hacker Rank profile" onChange={(event) => {FormDetails(event)}} /><br /><br />
                
                <label htmlFor="Geeksforgeeks">Geeksforgeeks Profile Link: </label>
                <input type="text" name="Geeksforgeeks" placeholder="Geeksforgeeks profile" onChange={(event) => {FormDetails(event)}} /><br /><br />
                
                <label htmlFor="Leetcode">Leetcode Profile Link: </label>
                <input type="text" name="Leetcode" placeholder="Leetcode profile" onChange={(event) => {FormDetails(event)}} /><br /><br />
                
                <label htmlFor="Codeforces">Codeforces Profile Link: </label>
                <input type="text" name="Codeforces" placeholder="Codeforces profile" onChange={(event) => {FormDetails(event)}} /><br /><br />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default FormInSingleComponent;