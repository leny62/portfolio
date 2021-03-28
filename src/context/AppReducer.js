// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
      case 'SEND_INQUIRY':
          return {
              ...state,
              inquiry: [action.payload, ...state.inquiry]
          }    
      default:
          return state;  
    }
}