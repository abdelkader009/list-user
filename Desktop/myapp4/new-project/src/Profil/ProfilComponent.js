import React from 'react'
import{PropTypes} from 'prop-types'
const ProfilComponent = (props) => {
    return (
        <div>
            {props.name}
           <p> {props.job}</p>
           <p>{props.bi}</p>
           {props.children}
           {props.alertFct()}
        </div>
    )
}
ProfilComponent.defaultProps = {
    name:'kader',
}
ProfilComponent.defaultProps = {
    bi:'sed do eiusmod tempor incididunt ut',
}
ProfilComponent.defaultProps = {
    job:'dev',
}
ProfilComponent.propTypes ={
    name: PropTypes.string,
}
ProfilComponent.propTypes ={
    bi: PropTypes.string,
}
ProfilComponent.propTypes ={
    job: PropTypes.string,
}
export default ProfilComponent
