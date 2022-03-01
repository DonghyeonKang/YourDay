import { InfoProps } from "../../routes/MyPage";
import { UserInfo } from "../MyPage/UserInfo";
import { PeriodNav } from "./PeriodNav";
import { FriendInfo } from "./FriendInfo";

export function Info(prop: InfoProps) {
  if (prop.infoType === 0) {
    return (
      <>
        <UserInfo />
      </>
    );
  } else if (prop.infoType === 1) {
    return (
      <>
        <FriendInfo />
        <div className="qqq">
          <PeriodNav />
        </div>
      </>
    );
  } else {
    return <>{/* 에러 메세지 */}</>;
  }
}

export interface EditProps {
  type: string;
  name: string;
}
