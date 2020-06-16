import React from 'react'

export default function LoaderHOC(WrappedComponent) {
        return (
    class LoaderHOC extends React.Component{
        isLoaded=()=>{
            return this.props.user
        }
        render(){
            return this.isLoaded()? <WrappedComponent {...this.props}/>:<h1> Content Loading...</h1>
        }
    }
    )
}