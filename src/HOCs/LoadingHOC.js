import React from 'react'

export function LoadingHOC(WrappedComponent) {
    return (
        class LoadingHOC extends React.Component {
           
            isLoaded = () => {
                return this.props.parks.length
            }
            render() {
                return this.isLoaded() ? <WrappedComponent {...this.props} /> : <div className="container"><h1> Content Loading...</h1></div>
            }
        }
    )
}

export default LoadingHOC