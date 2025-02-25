import Header from "../components/Header";
import {useState} from "react"
const UserProfile = ({addressArr,setAddressArr}) => {
    const [userProfileBar,setUserProfileBar] = useState(true)
    const [addressBar,setAddressBar] = useState(false)
    const [orderHistoryBar,setOrderHistoryBar] = useState(false)
    const [addressTextarea,setAddressTextarea] = useState("")
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

    function addNewAddressFn(){
        setAddressArr([...addressArr,addressTextarea])
        setAddressTextarea("")
    }
    console.log(addressArr)
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

          {addressBar && <>
            <h4 className="fw-normal">All Addresses</h4>
            <ul>
              {addressArr.map((address)=> (
                <>
                <li>{address}</li>
                </>
              ))}
            </ul>
            <hr/>
            <h4 className="fw-normal">Add new Address</h4>
            <label htmlFor="">Enter New Address:</label><br/>
            <textarea value={addressTextarea} onChange={(event)=>setAddressTextarea(event.target.value)} style={{border:"4px solid #008080"}} className="my-2" cols="40" rows="5" name="" id=""></textarea>
              <br/>
              <button onClick={()=>addNewAddressFn()} style={{padding:"5px 20px",backgroundColor:"#008080",border:"1px solid #008080",color:"#F4F2DE"}}>Add Address</button>
          </>}
              {orderHistoryBar && <>
                <h4 className="fw-normal">Order History</h4>
              </>}

          </div>
        </div>
      </main>
    </>
  );
};

export default UserProfile;
