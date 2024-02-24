import React from 'react'
import Featureimg from "../../assets/images/Feature-image.png"
import "../../styles/Feature.css"
function Feature() {
  return (
    <div className='feature-wrapper'>
      <div className="feature">
        <div className="content-left">
          <div className="content">
            <div className="heading">School planner and organizer</div>
            <span className="detail">The Schedule Orgainzer planner app supports rotation schedules, as well as traditional weekly schedules. MSL allows you to enter your school subjects, organize your workload, and enter information about your classes – all so you can effortlessly keep on track of your school calendar.</span>
          </div>
          <div className="content">
            <div className="heading">Homework planner and task tracker</div>
            <span className="detail">Become a master of task management by tracking every single task with our online planner – no matter how big or small.</span>
          </div>
          <div className="content">
            <div className="heading">Reminders</div>
            <span className="detail">Stay on top of your workload by receiving notifications of upcoming classes, assignments or exams, as well as incomplete tasks, on all your devices.</span>
          </div>
        </div>
        <div className="content-right">
          <img className='image' src={Featureimg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Feature