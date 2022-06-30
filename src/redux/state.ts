type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
type PostType = {
    id: number
    message: string
    likesCount: number
}
type PostsType = Array<PostType>
type ProfilePageType = {
    posts: PostsType
}
type DialogsPageType = {
    dialogs: DialogsType
    messages: MessagesType
}
type DialogsType = Array<DialogType>
type DialogType = {
    id: number
    name: string
}
type MessagesType = Array<MessageType>
type MessageType = {
    id: number
    messageBody: string
}
type SidebarType = {}

export let state:RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'HI', likesCount: 11},
            {id: 2, message: 'i\'m in incubator', likesCount: 100200},
            {id: 3, message: 'now i know a lot of staff', likesCount: 2},
            {id: 4, message: 'bye!', likesCount: 0},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Oliver'},
            {id: 3, name: 'Paul'},
            {id: 4, name: 'Flake'},
            {id: 5, name: 'Kristof'},
            {id: 6, name: 'Michael'},
            {id: 7, name: 'Olivia'},
        ],
        messages: [
            {id: 1, messageBody: 'hi..'},
            {id: 2, messageBody: 'how are you today'},
            {id: 3, messageBody: 'what y doing??'},
            {id: 4, messageBody: 'i wanna meet you'},
            {id: 5, messageBody: 'lets walk tomorrow ...?'},
        ]
    },
    sidebar: {}
}