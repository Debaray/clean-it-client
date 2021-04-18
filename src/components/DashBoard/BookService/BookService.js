import React ,{useContext} from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import { UserContext } from '../../../App';
const BookService = () => {
    const { loggedUser, selectedService } = useContext(UserContext);
    const  [loggedInUser, setLoggedInUser] = loggedUser;
    const [selectService, setSelectService] = selectedService;
    return (
        <div>
            {console.log(selectService)}
            <NavBar></NavBar>
            <div className="row">
                <div className="col-lg-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-lg-9">
                    <h1>{selectService.title}</h1>
                </div>
            </div>
        </div>
    );
};

export default BookService;