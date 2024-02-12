import styles from './home.module.css'
import { useSelector } from 'react-redux';
import { Teams } from '../../components/Teams/Teams';
import { useEffect, useState } from 'react';
import { Goals } from '../Goals/Goals';
import { getEnvVariables } from '../../helpers/getEnvVariables';

export const Home = () => {


    const { active } = useSelector((state) => state.teams);
    const [animate, setAnimate] = useState(false);


    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => {
            setAnimate(false);
        }, 1000);


        return () => {
            clearTimeout(timer);
          };

    }, [active])

    const containerClassName = `container-fluid ${animate ? 'animate__animated animate__fadeIn' : ''}`;

    


    return (
        <>
            <div className={ containerClassName }>
                <div className="row h-100">
                    <div className={`col-12 col-xxl-7 p-0 position-relative ${styles['image-container']}`}>
                        <img src={ active.backGroundImage } alt={ active.name } className='img-fluid w-100 h-100' />
                    </div>
                    {/* <div className="col-12 col-xxl-5 d-flex align-items-center justify-content-center position-relative" style={{background: active?.backGroundColor }}>
                        <p className='last-name float-end ms-5'>
                            <span className='first-name'>J. </span>
                            ALVAREZ
                        </p>
                    </div> */}

                    <div className={`col-12 col-xxl-5 d-flex flex-column justify-content-center align-items-center ${styles.name}`} style={{ background: active?.backGroundColor }}>
                        <p><span className={`${styles['first-letter']}`}>J. </span>ALVAREZ</p>
                        <p>{active.number}</p>
                        <p className={`${styles['sub-title']}`}>Choose your <span className="text-decoration-line-through text-light">team</span> theme!</p>
                        <Teams />
                    </div>
                </div>
            </div>
            <Goals />
        </>
    )
}
