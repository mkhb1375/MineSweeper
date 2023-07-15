import React from "react";

export default function Forms(props) {
    const difficulties = [
        { text: "Eazy", color: "green" },
        { text: "Normal", color: "blue" },
        { text: "Hard", color: "yellow" },
        { text: "Very Hard", color: "red" },
    ];

    function handleSubmit(e) {
        e.preventDefault();

        switch (e.target.innerHTML) {
            case "Eazy":
                props.updateForm(3, 2);
                break;

            case "Normal":
                props.updateForm(4, 5);
                break;

            case "Hard":
                props.updateForm(5, 10);
                break;

            case "Very Hard":
                props.updateForm(6, 18);
                break;

            default:
                break;
        }
    }

    return (
        <div className="flex">
            {difficulties.map((ele, index) => (
                <button
                    key={index}
                    className="block border p-1 m-1 lg:m-5 lg:p-5 hover:font-bold"
                    style={{ "--hover-color": ele.color }}
                    onClick={handleSubmit}
                >
                    {ele.text}
                </button>

            ))}
        </div>
    );
}
