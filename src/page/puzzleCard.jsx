import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva'


const namespace = 'puzzleCard'
const mapStateToProps = state => {
    const cardList = state[namespace].data
    return {
        cardList,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onClickAdd: (newCard) => {
            const action = {
                type: `${namespace}/addNewCard`,
                payload: newCard,
            }
            dispatch(action);
        },
        onClickRemove:(card)=>{
            const action={
                type:`${namespace}/removeCard`,
                payload:card
            }
            dispatch(action)
        },
        onDidMount:()=>{
            dispatch({
                type:`${namespace}/queryInitCards`,
            })
        }
        
    }
}
@connect(mapStateToProps, mapDispatchToProps)

export default class PuzzleCardsPage extends Component {

    render() {
        return (<div>
            {
                this.props.cardList.map(card => {
                    return (
                        <Card key={card.id}>
                            <div>Q: {card.setup}</div>
                            <div>
                                <strong>A: {card.punchline}</strong>
                            </div>
                            <Button onClick={()=>this.props.onClickRemove(card)}>del</Button>
                        </Card>
                    );
                })
            }
            <div>
                <Button onClick={() => this.props.onClickAdd({
                    setup: 'xadafda',
                    punchline: 'dfqaefqw'
                })}>add new card</Button>
            </div>
        </div>
        );
    }
    componentDidMount(){
        this.props.onDidMount()
    }
}