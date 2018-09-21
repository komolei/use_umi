import { Modal,Button } from 'antd'
import { Component } from 'react';

export default class LoginAndSignOut extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div>
            <Button type="primary" onClick={()=>{}}>
                Open Modal
            </Button>
            <Modal
                title="Basic Modal"
                visible={true}
                onOk={()=>{}}
                onCancel={()=>{}}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>)
    }
}