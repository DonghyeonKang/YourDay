import { google } from "googleapis";

const { OAuth2 } = google.auth

const oAuth2Client = new OAuth2(
    '854410560304-tug0lkbv0ql78dk0p4i71pbf49o9smti.apps.googleusercontent.com',
    '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'
)

oAuth2Client.setCredentials({
    refresh_token : '1//04vY1H947alplCgYIARAAGAQSNwF-L9Irv7Fz5ck10FOIBUOu9evsR3G3MXM-rJsuTTS4AC3p7j23tiZDtogtytNrJ3KMreHxaKY',    
})

const calandar = google.calendar({version: 'v3', auth: oAuth2Client })

const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDate() + 2)

const eventEndTime = new Date()
eventEndTime.setDate(eventEndTime.getDate() + 2)