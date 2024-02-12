import styles from './goals.module.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setGoals } from "../../store/goals/goalsSlice";
import { GoalCard } from "../../components/Goals/GoalCard";


export const Goals = () => {


    const { goals } = useSelector((state) => state.goals);
    const { active } = useSelector((state) => state.teams);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch( setGoals() );
    }, [])
    
    return (
        <>
            <h1 className={`text-center ${styles.title}`} style={{ color: active?.primaryColor }}>GOAL COUNT: <span style={{ color: active?.secondaryColor }}>{goals.length}</span></h1>
            <div>
                <div className="row justify-content-center w-100 ">
                    {       
                        goals?.map(goal => (
                            <GoalCard key={ goal.order }goal={ goal }/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
