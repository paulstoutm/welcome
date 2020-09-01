import React from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
import Display from '../display/Display';




class Jeopardy extends React.Component {
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {},
            score: 0,
            formData: { userAnswer: "" },
            category:[]
        }
    }






    handleChange = (event) => {
        let formData = { ...this.state.formData }
        formData[event.target.name] = event.target.value;

        this.setState({ formData });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.formData.userAnswer === this.state.data.answer) {
            this.setState((prevState) => {
                return {
                    score: prevState.score + prevState.data.value
                }
            })

        } else {
            this.setState((prevState) => {
                return {
                    score: prevState.score - prevState.data.value
                }

            })
        }
        this.setState({
            submitted: true
        })
        this.getNewQuestion()
    }


    getNewCategory(id) {
        return this.client.getCategory(id).then(result => {
            console.log(result.data)
            this.setState((prevState) =>{
                return{
                    category: [...prevState.category, result.data]
                }
            })
        })
    }

    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            // console.log(result)
            this.setState({
                data: result.data[0]
            })
        })
    }

    componentDidMount() {
        this.getNewQuestion();
        this.getNewCategory(Math.round(Math.random()*20));
        this.getNewCategory(Math.round(Math.random()*20));
        this.getNewCategory(Math.round(Math.random()*20));
    }




    render() {
        return <Display
            state={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            // getNewCategory={this.}
           />
        


    }

    
}
export default Jeopardy;