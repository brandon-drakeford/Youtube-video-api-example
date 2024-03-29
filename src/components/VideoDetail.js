import React from 'react'

export default function VideoDetail ({ video }) {
    
    if (!video){
        return (
            <div className="ui segment">
                <div className="ui active inverted dimmer">
                    <div className="ui text loader">Loading</div>
                </div>
                <p></p>
            </div>)
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    
    return (<div>
                <div className="ui embed">
                    <iframe title={video.snippet.title} src={videoSrc} />
                </div>

                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div> 
            </div>)
}