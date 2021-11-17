// "rafce" Membuat Class dengan Instan
 

import React from "react";

class Hello extends React.Component {
    render() {
        const {alumni, name} = this.props

        return(
            <div>
                <h3>Kalau bukan Alumni {alumni}, Jangan begitu yah lengkali {name}, Waterpark men.</h3>
            </div>

        );
    }
}


// function Hello (props){
//     return(
//         <div>
//             <h3>Kalau bukan Alumni {props.alumni}, Jangan begitu yah lengkali {props.name}, Waterpark men.</h3>
//         </div>
//     );
// }


export default Hello;