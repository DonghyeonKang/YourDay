import { PassportStrategy } from "@nestjs/passport";
import {Strategy, VerifyCallback} from 'passport-google-oauth20'
import { Injectable } from '@nestjs/common';

@Injectable()

export class GoogleStrategy extends PassportStrategy (Strategy, 'google'){
    constructor(){
        super({
            clientID : '854410560304-c0nh8b9ina8jrji9gmsn6pjlnpu0pvqj.apps.googleusercontent.com',
            clientSecret : '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',
            callbackURL : 'http://localhost:3001/mypage/auth/google/callback',
            scope : ['email','profile','https://www.googleapis.com/auth/calendar.readonly','https://www.googleapis.com/auth/calendar'],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback) : Promise<any>{
        const { name, emails, photos, } = profile;
        const user = {
            email: emails[0].value,
            firstname : name.givenName,
            lastname : name.familyName,
            picture : photos[0].value,
            accessToken
        }
        done(null, user);
    }
}