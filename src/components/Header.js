import React from 'react'

const Header = () => {

    return (
            <div style={{borderRadius: '0'}} className="ui red inverted pointing top segment menu">
                <div className="ui container">
                    <a className="header item" href='/'>
                      <i className="youtube square large icon" style={{paddingRight: '10px'}}></i> Youtube API Example       
                    </a>
                </div>
            </div>
    )
}

export default Header