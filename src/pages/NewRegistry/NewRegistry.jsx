import './newRegistry.css'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addNewGoal } from '../../store/goals/goalsSlice';


export const NewRegistry = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
          order: '',
          team: '',
          rival: '',
          season: '',
          competition: '',
          url: '',
          result: ''

        },
        onSubmit: values => {
            dispatch(addNewGoal( values ))
            formik.resetForm();
        }
      });

      return (
        <div className='d-flex align-items-center justify-content-center form-wrapper vh-100'>
            <div className="form">
                <form onSubmit={formik.handleSubmit}>
                    <h2 className='form-title'>New</h2>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="order">Order</label>
                        <input
                            className="form-control" 
                            id="order"
                            name="order"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.order}
                        />
                
                        <label className="form-label" htmlFor="team">Team</label>
                        <input
                            className="form-control" 
                            id="team"
                            name="team"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.team}
                        />
                
                        <label className="form-label" htmlFor="rival">Rival</label>
                        <input
                            className="form-control" 
                            id="rival"
                            name="rival"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.rival}
                        />

                        <label className="form-label" htmlFor="season">Season</label>
                        <input
                            className="form-control" 
                            id="season"
                            name="season"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.season}
                        />

                        <label className="form-label" htmlFor="competition">Competition</label>
                        <input
                            className="form-control" 
                            id="competition"
                            name="competition"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.competition}
                        />

                        <label className="form-label" htmlFor="result">Result</label>
                        <input
                            className="form-control" 
                            id="result"
                            name="result"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.result}
                        />

                        <label className="form-label" htmlFor="url">URL</label>
                        <input
                            className="form-control" 
                            id="url"
                            name="url"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.url}
                        />

                
                        <button type="submit" className="mt-3 btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

        </div>
      );
}
