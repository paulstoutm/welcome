import React from "react";

class NotFoundPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="fourOhFour">
                404 Page - Ooops !
                <div className="instruction">
                    Please be sure you type the correct URL and try again.
    </div>
            </div>

        );
    }

};





export default NotFoundPage;