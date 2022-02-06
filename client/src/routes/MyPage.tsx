import React from "react";
import "./MyPage.css";

function Main() {
    return (
        <div className="myPage">
            
            <div className="mainImage">
                <img className="backgroundImage" alt="sky" src="img/sky.png" />
            </div>

            <div className="select_Box">
                <div className="select_Box-list">
                    <span>목록</span>
                    <div className="selectBox_line"></div>
                </div>
                <div className="select_Box-edit">
                    <span>편집</span>
                    <div className="selectBox_line"></div>
                </div>
            </div>
            
            <div className = "info_box"> 
                <div className= "info_title">
                        <span>양소열님의 정보,</span>
                </div>
                
                <div className = "info_detail-box"> 
                    

                    <div className="info_select">

                        <div className="profile"> 
                            <span> 프로필 </span>
                        </div>

                        <div className="friendList"> 
                            <span> 친구 조회 </span>
                        </div>

                    </div>

                    <div className="info_middleLine"></div>

                    <div className="info_detail">
                        
                        <div className="user">    
                            <span>이름</span>
                            <span className="user_name">
                                양소열
                            </span>
                        </div>


                        <div className="alert">
                            <span className="alert_name">알림 설정</span>      

                            <span className="alert_on">ON</span>
                            <span>/</span>
                            <span className="alert_off">OFF</span>
                        </div>

                    </div>


                    


                    <div className="side_Box">
                        <div className="side_search-text"> 
                            <span>요청 목록</span>
                        </div>
                        <div className="side_search-line"> 
                        </div>
                    </div>

                </div>

            </div>

            
            

        </div>
    )
}

export default Main;