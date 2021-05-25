import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get } from '../person/personSlice';

const Display = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get());
    }, [dispatch]);

    const {data, status} = useSelector((state) => state.person);

    if(status === 'loading') return <></>;

    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    data &&
                    data.map((person, index) => {
                        const {fullName, email, contactNumber, details} = person;
                        return <tr key={index}>
                            <td>{fullName}</td>
                            <td>{email}</td>
                            <td>{contactNumber}</td>
                            <td>{details}</td>
                            {/* <td><button onClick={(e) => dispatch(deletePerson(id))}>Delete Person</button></td> */}
                        </tr>;
                    })
                }
            </tbody>
        </table>
    );
}

export default Display;