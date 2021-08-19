import { ref } from 'vue'
import axios from 'axios'
import store from '../store'

const getGroupMembers = () => {
    const groupMembers = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const groupId = store.state.loggedInGroupId
            console.log("groupId", groupId)
            let data = await axios.get(`http://localhost:3000/groupMembers/` + groupId) 
            groupMembers.value = await data.data.members
            console.log("groupMembers", groupMembers.value)
        }
        catch {
            console.log('Myerror')
        }
    }
    return {groupMembers, error, load}
}
export default getGroupMembers