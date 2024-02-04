import PropTypes from 'prop-types'
import './goals.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveGoal } from '../../store/goals/goalsSlice';

export const GoalCard = ( { goal } ) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { active } = useSelector((state) => state.teams);



    const onSetActiveGoal = () => {
        dispatch( setActiveGoal(goal) );
        navigate('/goals/goal');
    }

    return (
        <>
            <div className="col-12 col-lg-6 col-xl-4 col-xxl-3 gy-3 goal-card mx-2" style={{ background: active?.primaryColor, border: `solid 3px ${active?.secondaryColor}`  }}  onClick={ () => onSetActiveGoal( goal ) }>
                <div className="row">
                    <div className='col-6'>
                        <h5>N°{ goal.order }</h5>
                    </div>
                    <div className='col-6 text-end'>
                        <h5>Season { goal.season }</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 align-self-center">
                        <img src="/src/assets/teams/argentina.png" alt="arg"  className='w-50'/>
                    </div>
                    <div className="col-6 align-self-center">
                        <h5 className='text-center'>vs</h5>
                        <h1 className='text-center rival'>{ goal.rival }</h1>
                    </div>
                    <div className='col-3 align-self-center'>
                        <h2 className='text-end'>{ goal.result }</h2>
                    </div>
                </div>
                <div className="row">

                </div>
            </div>
        </>
    )
}


GoalCard.propTypes = {
    competition: PropTypes.string,
    order: PropTypes.number,
    result: PropTypes.string,
    rival: PropTypes.string,
    season: PropTypes.string,
    team: PropTypes.string,
    url: PropTypes.string
  }
