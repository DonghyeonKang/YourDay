import InfoNav from '../components/MyPage/InfoNav';

import PropTypes from 'prop-types';
import { FriendInfo } from '../components/MyPage/FriendInfo';
import { PeriodNav } from '../components/MyPage/PeriodNav';

function Edit() {
    
  return (
    <div className="container">
      <section className="main_section">
        <h1 className="main_section-header">소열님의 정보,</h1>
        <div className="main_section-inner">
          <InfoNav />
          <FriendInfo />
          <PeriodNav type="edit" name="친구 추가"/>
        </div>
      </section>
    </div>
  );

}

export interface EditProps {
    type: string,
    name: string
}

export default Edit;