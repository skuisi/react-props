
import PropTypes from 'prop-types' 
import Photo from './image'

const Data = props => {
    const handleName = () => {
        alert(props.fullName)
    }
    const styleBtn = {backgroundColor: "white", fontSize:25, borderRadius: 8}
    return (
        <>
            <Photo>User Image</Photo>

            <h1> {props.fullName}</h1>
            <h4> {props.bio}</h4>
            <h4> {props.profession}</h4>
            <button style={styleBtn} onClick={handleName}>User's Name</button>
           
        </>
    )
}

Data.defaultProps = {
    fullName : "Full name",
    bio :"BEEPLE is my sensai",
    profession : "Soon to be a 3D artist"
}


Data.propTypes ={
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
}


export default Data