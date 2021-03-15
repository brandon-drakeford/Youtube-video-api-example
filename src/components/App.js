import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import Header from './Header'
import Footer from './Footer'
import useVideos from '../hooks/useVideos'

export default function App () {
    const [selectedVideo, setSelected] = useState(null)
    const [videos, search] = useVideos('buildings')

    useEffect (() => {
        setSelected(videos[0])
    }, [videos])

    return (
        <div>
            <Header />

            <div className="ui container" style={{ marginTop: '20px', paddingBottom: '90px' }}>
                <SearchBar onFormSubmit={search}/>

                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={selectedVideo} />
                        </div>

                        <div className="five wide column">
                            <VideoList onVideoSelect={setSelected} videos={videos} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}