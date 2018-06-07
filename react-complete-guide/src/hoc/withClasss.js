import React from 'react'

// const witClasss = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }

const witClasss = (WrappedComponent, className) => {
    return class extends React.Component {
        render(){
            return(
                <div className={className}>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
        
       
}

export default witClasss;