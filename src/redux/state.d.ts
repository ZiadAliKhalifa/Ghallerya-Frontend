interface IRootState {
    user: UserState
}

// User related types and interfaces
interface IUserAction {
    type: string
    payload: IUser
}

type User = {
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

