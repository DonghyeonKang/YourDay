import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { PeriodNavProps } from './PeriodNav';
import { useState } from 'react';


export function OptionBox(prop: PeriodNavProps) {
    const [ friendName, setFriendName ] = useState("");
    
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const { 
        value: name 
      } = e.target;
      setFriendName(name);
    }

    return (
      <div className="optionBox">
        <h2 className="optionBox_title"> {prop.name} </h2>
        {prop.type === "edit" ? (
          <form>
            <div className="optionBox_inner">
              <input value={friendName} onChange={onChange} name="name"></input>
              <FontAwesomeIcon type="submit" icon={faSearch} className="search" />
            </div>
          </form>
        ) : (
          <></>
        )}
      </div>
    );
  }