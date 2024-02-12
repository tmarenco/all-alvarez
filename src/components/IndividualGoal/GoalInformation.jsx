import PropTypes from 'prop-types';
import styles from './../../pages/IndividualGoal/individual-goal.module.css';
import teams from "/src/assets/data/teams.js";
import { useNavigate } from 'react-router-dom';


export const GoalInformation = ({ active }) => {

    const navigate = useNavigate();
    const activeTeam = teams.find(team => team.name === active.team);
    const goBack = () => {
        navigate('/');
    }


    return (
        <>
        
            <div className={`${styles.data} bg-white p-5`}>
                <div className="d-flex justify-content-between">
                    <h1 className="pointer-event" onClick={ goBack }><span className="material-symbols-outlined fw-bold">arrow_back</span>GO BACK</h1>
                    {/* <h1 className="text-center" style={{color: activeTeam?.secondaryColor}}>Goal Data</h1> */}
                    <h1 className="text-center" style={{color: "rgba(102,88,191,1)"}}>Goal Data</h1>
                </div>
                <ul className="list-group" style={{ background: "#2E3981" }}>
                {/* <ul className="list-group" style={{ background: activeTeam?.primaryColor }}> */}
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
        
        
        </>
    )
}


GoalInformation.propTypes = {
    active: {
        competition: PropTypes.string,
        order: PropTypes.number,
        result: PropTypes.string,
        rival: PropTypes.string,
        season: PropTypes.string,
        team: PropTypes.string,
        url: PropTypes.string,
    }
  }