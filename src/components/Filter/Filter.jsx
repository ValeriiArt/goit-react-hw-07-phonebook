import { useSelector, useDispatch } from "react-redux";
import {getFilterContact}  from '../../store/contactsAPI';
import s from './Filter.module.css'

const Filter = () => {
    const filterValue = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();
    const findContact = (e) => dispatch(getFilterContact(e.currentTarget.value));
        
    return (
        <div>
            <label>
            Find contacts by name
                <input
                    className={s.formInput}
                    type="text"
                    value={filterValue}
                    onChange={findContact}
                />
            </label>
        </div>
    );
}


export default Filter;
