import BasicLayout from './basic'
import CmsLayout from './cms'
import LoginAndSignOut from './login'

export default function (props) {
    console.log('this.props.location', props.location.pathname)
    if (props.location.pathname.includes('/login')) {
        return <LoginAndSignOut> {props.children} </LoginAndSignOut>
    }
    if (props.location.pathname.includes('/cms')) {
        return <CmsLayout> {props.children} </CmsLayout>
    }
    return (
        <BasicLayout>{props.children}</BasicLayout>
    )
}

