import Plyr from "plyr-react"
import "plyr-react/plyr.css"

export const Prueba = () => {

    const plyrProps = {
        source: 'https://www.youtube.com/watch?v=Sua7n4rfkL0&ab_channel=RiverPlate', // https://github.com/sampotts/plyr#the-source-setter
        options: undefined, // https://github.com/sampotts/plyr#options
        // Direct props for inner video tag (mdn.io/video)
      }
      
      const options = {
        ratio: '4:1'
      }
      
      const videoSrc = {
        type: "video",
        sources: [
          {
            src: "https://www.youtube.com/watch?v=Sua7n4rfkL0&ab_channel=RiverPlate",
            provider: "youtube"
          }
        ]
      };


  return (
    <>
        <div className="w-50">
            <Plyr  source={videoSrc} options={options} />

        </div>

    </>
  )
}
