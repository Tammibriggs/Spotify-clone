export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //token: 'BQA57fryloAIyuISgxd-v4QqV9r-JMVaMJIARBPGxR_PkFJ8W5RLZemdpfDXT9qkLMoD1NSyu4s3FKDEU0bPkAL44wbdjyYlyZYEcNYF7D5-72fieQxgKphyytcp8OIwqRQXwItCvWs93XgeU1IUjsvY8OvF0lWmnTTZ1Vx6YWGox109'

}

const reducer = (state, action) => {
  switch(action.type){
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SET_TOKEN': 
      return{
        ...state,
        token: action.token
      }
    case 'SET_PLAYLISTS':
      return{
        ...state,
        playlists:action.playlists
      }
    case 'SET_DISCOVER_WEEKLY':
      return{
        ...state,
        discover_weekly: action.discover_weekly,
      }
    default:
      return{
        state
      }
  }
}

export default reducer