import request from '../util/request';

const delay=(millisecond)=>{
    return new Promise(resolve=>{
        setTimeout(resolve,millisecond)
    })
}

export default {
    namespace: 'puzzleCard',
    state: {
        data: [
            {
                id: 1,
                setup: 'Did you hear about the two silk worms in a race?',
                punchline: 'It ended in a tie',
            },
            {
                id: 2,
                setup: 'What happens to a frog\'s car when it breaks down?',
                punchline: 'It gets toad away',
            },
        ],
        count: 100
    },
    effects:{
        *queryInitCards(_,sagaEffect){
            const {call,put}=sagaEffect
            const endPointUrl='/dev/random_joke';
            const puzzle=yield call(request,endPointUrl);
            yield put({type:'addNewCard',payload:puzzle})
            yield call(delay,3000)
            const puzzle2 = yield call(request, endPointUrl);
            yield put({ type: 'addNewCard', payload: puzzle2 });
        }
    },
    reducers: {
        addNewCard(state, { payload: newCard }) {
            let newCount = state.count+1;
            const newCardWithId = { ...newCard, id: newCount }
            const nextData = state.data.concat(newCardWithId)
            return {
                data: nextData,
                count: newCount
            }
        },
        removeCard(state,{payload:delCard}){
            const newData=state.data.filter(item=>item.id!=delCard.id)
            return {
                data:newData,
                count:state.count
            }
            // this.setState(prevState => {
            //     prevState.cardList.splice(index, 1);
            //     return {
            //         cardList: prevState.cardList
            //     }
            // })
        },
    }
}