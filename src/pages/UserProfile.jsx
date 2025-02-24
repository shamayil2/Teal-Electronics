import Header from "../components/Header";
import {useState} from "react"
const UserProfile = ({addressArr,setAddressArr}) => {
    const [userProfileBar,setUserProfileBar] = useState(true)
    const [addressBar,setAddressBar] = useState(false)
    const [orderHistoryBar,setOrderHistoryBar] = useState(false)
    function addressBarBtn(){
        setAddressBar(true)
        setOrderHistoryBar(false)
        setUserProfileBar(false)
    }

    function orderHistoryBarBtn(){
        setAddressBar(false)
        setOrderHistoryBar(true)
        setUserProfileBar(false)

    }

    function userProfileBarBtn(){
        setAddressBar(false)
        setOrderHistoryBar(false)
        setUserProfileBar(true)
    }

  return (
    <>
      <Header />
      <main className="container">
        <div className="row py-4">
          <div className="col-md-3">
            <div class="card" >
              <ul class="list-group list-group-flush">
                <li class="list-group-item bg-dark "><button onClick={()=>userProfileBarBtn()} className="btn text-light">User Profile</button></li>
                <li class="list-group-item"><button onClick={()=>addressBarBtn()} className="btn ">Add Address</button></li>
                <li class="list-group-item "><button onClick={()=>orderHistoryBarBtn()} className="btn ">Order History</button></li>
              </ul>
            </div>
          </div>
          <div className="col-md-9 bg-light p-4">
          { userProfileBar &&  <>  <div className="row">
                <div className="col-md-3">
                    <img style={{borderRadius:"100px"}} src="https://placehold.co/200?text=Profile+Pic" alt="" />
                </div>
                <div className="col-md-9">
                 <h4 className="fw-normal">Personal Information</h4>
                    <p className="fw-light">Name: Shamayil Ahmad</p>
                    <p className="fw-light">Gender: Male</p>
                    <p className="fw-light">Email Address: shamayil.amd@gmail.com</p>
                    <p className="fw-light">Phone Number: +91 701723XXX4</p>
                    <hr/>
                    <h4 className="fw-normal">Saved Addresses :</h4>
                    <ul>
                    {addressArr.map((address)=>(
                        <li className="fw-light">{address}</li>
                    ))}
                    </ul>
                </div>
            </div> </>}
          </div>
        </div>
      </main>
    </>
  );
};

export default UserProfile;
