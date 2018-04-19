import React, {Component} from 'react';
const withClass = (WrappedComponent, className) => {
    // one way using function
    // return (props) => (
    //     <div className={className}>
    //         <WrappedComponent {...props}/>
    //     </div>
    // )

    //return anonymous class -> 2 way is not much different
    return class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    }
}

export default withClass;