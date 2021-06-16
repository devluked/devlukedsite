import ReactPlayer from 'react-player'
import './echo.css';
import { useEffect, useState } from 'react';
import { LiveDotText, TopBar } from './smallelements.js'
import StreamComponent from './streamcomponent.js'
import Images from './slidingimgs.js'

const recentEp = "https://soundcloud.com/echoradioshow/echo-radio-008"

function EchoRadio() {
  return (
    <div className="EchoRadio">
      <div className="top-components">
        <TopBar/>
        <ToggleStreamEpisodes/>
      </div>
        <Images/>

   </div>
  );
}


function ToggleStreamEpisodes() {
  const [displayVar, toggleDisplay] = useState(false)

  if (displayVar===false) {
    return (
      <div className="streambar">
        <div className="live-dot">
          <LiveDotText/>
        </div>
        <div className="streambtn">
        <StreamComponent title={"ALTERNATIVE HITS & GROOVY DEEP CUTS"} url={recentEp}/>
          {/* <button className="episodestogglebtn" onClick={toggleViewHandler}><h1 className="title">Episodes</h1></button> */}
        </div>

     </div>
    )
}}


export default EchoRadio;