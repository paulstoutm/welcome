import React from 'react';

function Display(props) {
    let element = "Loading"
    if (props.state.data.category !== undefined) {
        element = (
            <div className="Info">
                <div className="Question">
                    Question:
                        <div className="QuestionData">
                        "{props.state.data.question}"
                        </div>
                </div>
                <div className="PointValue">
                    Point Value:
                        <div className="PointValueData">
                        {props.state.data.value}
                    </div>
                </div>
                <div className="Title">
                    Title:
                        <div className="TitleData">
                        {props.state.data.category.title}
                    </div>
                </div>
                <div className="Score">
                    Score
                    <div className="ScoreData">
                        {props.state.score}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            {element}
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="userAnswer">Answer</label>
                    <input className="Input"
                        type="text"
                        name="userAnswer"
                        value={props.state.formData.userAnswer}
                        onChange={props.handleChange}

                    />
                    <button>Submit Form</button>
                </div>



                

            </form>
        </div>


    );

}




export default Display;
