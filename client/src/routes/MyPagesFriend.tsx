import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./css/MyPagesFriend.css";

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

                    <div className="info_middleLine">
                        
                    </div>



                    <div className="info_detail">
                        <ul className="user_name">
                            <li>소열</li>
                            <li>동현</li>
                        </ul>
                    </div>

                    


                    <div className="side_Box"> 
                        <div className="side_search-text"> 
                            <span>친구 추가</span>
                        </div>
                        <div className="side_search-line"> 
                        </div>
                        <div className="side_search-box"> 
                            <FontAwesomeIcon 
                            icon ={faSearch} 
                            onClick={ ()=> console.log("친구 찾기") }
                            className="side_search-button"/>
                        </div>
                    </div>
                
                </div>

                
                

                
               
            </div>
            
            
            

        </div>
    )
}

export default Main;