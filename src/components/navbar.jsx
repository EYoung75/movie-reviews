import React from "react";
import { Link } from 'react-router-dom'




class Navbar extends React.Component {
    render() {
        return (
            <div className="nav">
                <Link to="/"><p className="navLinks">Home</p></Link>
                <Link to="/movies"><p className="navLinks" onClick={this.props.reset}>Reviewed Movies</p></Link>
            </div>

        )
    }
}

export default Navbar;