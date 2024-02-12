import PropTypes from 'prop-types'
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import styles from './../../pages/IndividualGoal/individual-goal.module.css';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { setActiveGoal } from '../../store/goals/goalsSlice';


export const VideoScreen = ({ active, totalGoals }) => {


    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const onSetActiveGoal = (operation) => {
    //     dispatch( setActiveGoal(goals.find(goal => goal.order === (operation === '+' ? active.order +  1 : active.order -  1))) );
    //   }


    // const plyrProps = {
    //     source: active.url, // https://github.com/sampotts/plyr#the-source-setter
    //     options: undefined, // https://github.com/sampotts/plyr#options
    //   }
      
      const options = {
        ratio: '2:1'
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
            <h1 className="text-center">Goal N° { active.order }</h1>
              <div className={styles['video-border']}>
                  <Plyr  source={videoSrc} options={options} />
              </div>
              <div className="text-center mt-5 d-flex justify-content-around">
              {
                  active.order !== 1 
                  // ? <button className={`${styles['video-button']}`} onClick={ () => onSetActiveGoal( '-' ) }>Previous Goal</button>
                  ? <button className={`${styles['video-button']}`}>Previous Goal</button>
                  : null
              }
              {
                  totalGoals.length !== active.order ?
                  <button className={`${styles['video-button']}`}>Next Goal</button>
                  // <button className={`${styles['video-button']}`} onClick={ () => onSetActiveGoal( '+' ) }>Next Goal</button>
                  : null
              }
          </div>
        </>
    )
}


VideoScreen.propTypes = {
    active: {
        competition: PropTypes.string,
        order: PropTypes.number,
        result: PropTypes.string,
        rival: PropTypes.string,
        season: PropTypes.string,
        team: PropTypes.string,
        url: PropTypes.string,
    },
    totalGoals: PropTypes.number
  }
