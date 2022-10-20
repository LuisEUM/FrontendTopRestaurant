import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getRestaurant, getRestaurantSettings } from "../../../services/top-restaurant-service";
import moment from "moment";
import { useParams } from "react-router-dom";
import DatePicker from "react-date-picker";
import SelectList from "../../ui/select-list/SelectList";
import SelectNumber from "../../ui/select-list/SelectNumber";
import TitleBar from "../../ui/title-bar/TitleBar";

const tabContentVariant = {
  active: {
    display: "block",
    transition: {
      staggerChildren: 0.2
    }
  },
  inactive: {
    display: "none"
  }
};

const cardVariant = {
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  inactive: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.5
    }
  }
};



function FormContent({ id : newId, active }) {
  const [requestedDate, onChange] = useState(new Date());
  const [today, setToday] = useState();
  const [maxMonth, setMaxMonth] = useState();
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantSettings, setRestaurantSettings] = useState(null);

  useEffect(()=>{
    const d = new Date();
    setToday(d)

    getRestaurantSettings(id).then((settings) => {
      const  settingMaxMonth = (moment().add(settings.maximumMonthBookings, 'months')._d)
      setMaxMonth(settingMaxMonth)
      setRestaurantSettings(settings)
    });

    getRestaurant(id).then((restaurant) => {
      setRestaurant(restaurant);
    });

  }, [id]);
    


  if (!restaurant) {
    return (
      <>
        <TitleBar to={`/restaurants/${id}`} title="Loading..." />
        <div className="full-height d-flex justify-content-center align-items-center bg-primary ">
          <p className="text-white">loading...</p>
        </div>
      </>
    );
  }



return(
  <motion.div
  role="tabpanel"
  id={newId}
  className="tab-content"
  variants={tabContentVariant}
  animate={active ? "active" : "inactive"}
  initial="inactive"
  >
      <div>
      <div className='d-flex row m-0 justify-content-center text-center '>
        <div className='col-10 d-flex justify-content-center align-items-center flex-column '>

          <p><strong> Welcome to {restaurant.name}!</strong> <br/> Do you want a date with us, rigth? 😉 <br/>  Follow the next steps and we will meet us soon 🎉!  </p>

          <div class="circle-around fs-6 p-0 d-flex justify-content-center align-items-center align-content-center border-primary bg-primary mt-3">
            <p className='m-0 text-white'>1</p>
          </div>
          <p>Pick your favorite date:</p>
          <DatePicker className={'rounded d-flex justify-content-center align-items-center '} onChange={onChange} value={requestedDate} calendarIcon={<i className="fa fa-calendar fa-fw "/>} clearIcon={<i className="fa fa-close fa-fw text-secondary "/>}   minDate={today} maxDate={maxMonth}  closeCalendar={false} />
        </div>


        <div className='col-10 d-flex justify-content-center align-items-center flex-column mt-5 mt-3'>
          <div class="circle-around fs-6 p-0 d-flex justify-content-center align-items-center align-content-center border-primary bg-primary mt-3">
              <p className='m-0 text-white'>2</p>
          </div>
          <p>Wich zone do you prefer?</p>
          <SelectList id={id} style={{zIndex:'100'}}/>
        </div>

        <div className='col-10 d-flex justify-content-center align-items-center flex-column mt-5 mt-3 '>
          <div class="circle-around fs-6 p-0 d-flex justify-content-center align-items-center align-content-center border-primary bg-primary mt-3">
              <p className='m-0 text-white'>3</p>
          </div>
          <p>How big is your group?</p>
          <SelectNumber id={id} {...restaurantSettings} />
        </div>

      </div>
    </div>


  </motion.div>
)




  if(false) return (
    <motion.div
    role="tabpanel"
    id={newId}
    className="tab-content"
    variants={tabContentVariant}
    animate={active ? "active" : "inactive"}
    initial="inactive"
  >
    <div className="cards">
    <motion.div variants={cardVariant} className="content-card">
          <div className="info">
            <h3>From $800</h3>
          </div>
        </motion.div>
    </div>
  </motion.div>
  )
}

export default FormContent