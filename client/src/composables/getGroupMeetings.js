import { ref } from 'vue'
import axios from 'axios'
import store from '../store'

const getGroupMeetings = () => {
    const groupMeetings = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const groupId = store.state.loggedInGroupId
            console.log("groupId", groupId)
            let data = await axios.get(`http://localhost:3000/meetings/` + groupId) 
            groupMeetings.value = await data.data.meetings
            console.log("groupMeetings", groupMeetings.value)
        }
        catch {
            console.log('Myerror')
        }
    }
    return {groupMeetings, error, load}
}
export default getGroupMeetings