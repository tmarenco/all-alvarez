import { useDispatch, useSelector } from "react-redux";
import "./teams.css";
import { setActiveTeam } from "../../store/teams/teamsSlice";

export const Teams = () => {
    
    const { teams, active } = useSelector((state) => state.teams);
    const dispatch = useDispatch();

    const onSetActive = (team) => {
        dispatch(setActiveTeam(team))
    }


    return (
        <>
            <div className="d-flex text-center align-items-center">
                {
                    teams?.map(team => (
                        <div 
                            className="col-4 team" 
                            key={ team.name } 
                            onClick={ () => onSetActive(team) }
                        >
                            <img 
                                src={ team.logo } 
                                alt={ team.name } 
                                className={`team-image ${team.name === active.name ? "" : "team-grey"}`}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )
}
