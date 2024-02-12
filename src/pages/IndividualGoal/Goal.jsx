import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "plyr-react/plyr.css"
import { VideoScreen } from '../../components/IndividualGoal/VideoScreen';
import { GoalInformation } from '../../components/IndividualGoal/GoalInformation';


export const Goal = () => {

  const { active, goals } = useSelector((state) => state.goals);
  
  if(!active){
    return <Navigate to="/goals"/>;
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-12 col-xxl-7 p-0 position-relative p-5" style={{ background: '#2E3981' }}>
          {/* <div className="col-12 col-xxl-7 p-0 position-relative p-5" style={{ background: activeTeam?.primaryColor }}> */}
            <VideoScreen active={ active } totalGoals={ goals.length }/>
          </div>
          <div className="col-12 col-xxl-5 d-flex p-5 justify-content-center align-items-center" style={{ background: "rgba(102,88,191,1)" }} >
          {/* <div className="col-12 col-xxl-5 d-flex p-5 justify-content-center align-items-center" style={{ background: activeTeam?.secondaryColor }} > */}
            <GoalInformation active={ active } />
          </div>
        </div>
      </div>
    </>
  )
}
