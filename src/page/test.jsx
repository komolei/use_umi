import React, { Component } from 'react'
import { Card } from 'antd'
const { Meta } = Card;

export default class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            alias: 'test'
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return null
    }
    render() {
        const { alias } = this.state;
        const style={
            border:'1px solid red'
        }
        return (
            <Card style={style}>
                <Meta title={alias}></Meta>
            </Card>
        )
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                alias:'test more'
            })
        },  5000)
    }
}