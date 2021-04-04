interface IUser {
    email: string
    email_verified: boolean
    family_name: string
    given_name: string
    locale: string
    name: string
    nickname: string
    picture: string
    sub: string
    updated_at: string
}

type UserState = {
    user: IUser
}

type UserAction = {
    type: string
    user: IUser
}

type DispatchType = (args: UserAction) => UserAction