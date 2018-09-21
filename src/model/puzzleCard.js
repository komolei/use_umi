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
    reducers: {
        addNewCard(state, { payload: newCard }) {
            const newCount = state.count++
            const newCardWithId = { ...newCard, id: newCount }
            const nextData = state.data.concat(newCardWithId)
            return {
                data: nextData,
                count: newCount
            }
        },
        // removeNewCard = (id) => {
        //     const index = this.state.cardList.findIndex(v => v.id == id);
        //     console.log('this.index', index)
        //     this.setState(prevState => {
        //         prevState.cardList.splice(index, 1);
        //         return {
        //             cardList: prevState.cardList
        //         }
        //     })
        // }
    }
}