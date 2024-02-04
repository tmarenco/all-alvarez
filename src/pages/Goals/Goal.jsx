import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import teams from "/src/assets/data/teams.js";
import { setActiveGoal } from "../../store/goals/goalsSlice";
import Plyr from "plyr-react"
import "plyr-react/plyr.css"




export const Goal = () => {

  const { active, goals } = useSelector((state) => state.goals);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  console.log('ACTIVE: ', active)
  
  if(!active){
    return <Navigate to="/goals"/>;
  }

  const activeTeam = teams.find(team => team.name === active.team);

  const onSetActiveGoal = (operation) => {
    dispatch( setActiveGoal(goals.find(goal => goal.order === (operation === '+' ? active.order +  1 : active.order -  1))) );
  }

  const goBack = () => {
    navigate('/');
}

const plyrProps = {
  source: active.url, // https://github.com/sampotts/plyr#the-source-setter
  options: undefined, // https://github.com/sampotts/plyr#options
  // Direct props for inner video tag (mdn.io/video)
}

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
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-12 col-xxl-7 p-0 position-relative p-5" style={{ background: activeTeam?.primaryColor }}>
            <h1 className="text-center goal-title">Goal N° { active.order }</h1>
                 <Plyr  source={videoSrc} options={options} />
              <div className="text-center mt-5 d-flex justify-content-around">
                {
                  active.order !== 1 ? 
                  <button className="video-button" onClick={ () => onSetActiveGoal( '-' ) }>Previous Goal</button>
                  : null
                }
                {
                  goals.length !== active.order ?
                  <button className="video-button" onClick={ () => onSetActiveGoal( '+' ) }>Next Goal</button>
                  : null
                }
              </div>
          </div>
          <div className="col-12 col-xxl-5 d-flex p-5 justify-content-center align-items-center" style={{ background: activeTeam?.secondaryColor }} >
            <div className="data bg-white p-5">
              <div className="d-flex justify-content-between">
                <h1 className="pointer-event" onClick={ goBack }><span className="material-symbols-outlined fw-bold">arrow_back</span>GO BACK</h1>
                <h1 className="text-center" style={{color: activeTeam?.secondaryColor}}>Goal Data</h1>
              </div>
              <ul className="list-group" style={{ background: activeTeam?.primaryColor }}>
                <li className="list-group-item">
                  Team: { active.team }
                </li>
                <li className="list-group-item">
                  Rival: { active.rival }
                </li>
                <li className="list-group-item">
                  Result: { active.result }
                </li>
                <li className="list-group-item">
                  Competition: { active.competition }
                </li>
                <li className="list-group-item">
                  Season: { active.season }
                </li>
                <li className="list-group-item">
                  Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci itaque alias, similique et explicabo autem unde aut earum minus ex placeat modi, exercitationem debitis eum consequuntur, laborum nam voluptates aliquid?
                </li>
              </ul>
              <div className="d-flex mt-4">
                <div className="row justify-content-center">
                  <img src={ activeTeam.logo } className="w-25" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
