import { userState } from './index';

const NAME = 'user/NAME' as const;

export const name = () => ({
    type: NAME
})

type UserAction =  
    | ReturnType<typeof name>;




type UserState = {
    userInfo: string;
}

const initialState: UserState = {
    userInfo: "김윤수"
};


function user(state: UserState=initialState, action: UserAction): any {
    
    if(action.type === NAME) {
        return { userInfo: "정윤수"}
    }
    else{ 
        return state;
    }
}

export default user;