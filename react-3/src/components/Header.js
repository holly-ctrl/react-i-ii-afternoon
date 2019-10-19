import React from 'react'

const headerStyle = {
    display: 'flex',
    background: 'rgb(52,165,218)',
    height: '100px',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center'
}

const headerText = {
    fontWeight: '700', 
    fontSize: '1.6rem',
    marginLeft: '4rem',
}

const Header = (props) => {
    return (
        <div style={headerStyle}>
            <div style={headerText}>Home</div>
        </div>
    )
}


export default Header 
