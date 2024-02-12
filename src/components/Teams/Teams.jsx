import styles from './teams.module.css';
import { useDispatch, useSelector } from "react-redux";
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
                            className={`col-4 ${styles.teams}`} 
                            key={ team.name } 
                            onClick={ () => onSetActive(team) }
                        >
                            <img 
                                src={ team.logo } 
                                alt={ team.name } 
                                className={`${styles['team-image']} ${team.name === active.name ? "" : styles['team-grey']}`}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )
}
