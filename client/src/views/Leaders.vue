<template>
    <div>
        
        <q-toolbar class = "bg-primary text-white">
            <q-toolbar-title class="absolute-center">Missional Communities</q-toolbar-title>
            <q-space></q-space>
            <q-btn
                v-if="loggedIn"
                to="/"
                @click="logoutGroup"
                flat
                icon-right="account_circle"
                label="logout"
                class="absolute-right"
            />
        </q-toolbar>
       
        <div class="q-pa-md">
            <div class="row q-mt-md justify-center">
                <div class="col-xs-12 col-md-4">
                        <div class="q-pa-md" >
                            <q-toolbar  class="bg-blue-4">
                                <q-toolbar-title>
                                {{loggedInGroup}}    Members
                                </q-toolbar-title>
                            </q-toolbar>    
                                <groupMembers />
                            <q-btn class="q-mt-sm  bg-green-3">
                            Add Member
                            </q-btn>    
                        </div>
                </div>
                <div class="col-xs-12 col-md-4">
                    <div class="q-pa-md" >
                        <q-list bordered separator>
                            <q-toolbar  class="bg-blue-4">
                                <q-toolbar-title>
                                    Community Meetings
                                </q-toolbar-title>
                            </q-toolbar>
                            <groupMeetings />
                        </q-list>                      
                    </div>
                </div>
                <div class="col-xs-12 col-md-3">
                    <div class="q-pa-md  xs-12" >
                        <q-list bordered separator>
                            <q-toolbar class="bg-blue-3">                                 
                                <q-toolbar-title>
                                    Attendance
                                </q-toolbar-title>
                            </q-toolbar>

                            <attends />
                            
                        </q-list>
                    </div>
                </div>
            </div>
        </div>    
    </div> 
    
 
</template>

<script>
    import groupMembers from '../components/Members/groupMembers.vue'
    import groupMeetings from '../components/Meetings/groupMeetings.vue'
    import { mapGetters, mapActions} from 'vuex'

    export default {

        data() {
            return {
               
            }
        },
        methods:{
            ...mapActions(["logoutGroup"])
        },
       
        components:{ groupMembers, groupMeetings },
        computed:{
            ...mapGetters(["loggedInGroup", "loggedIn"])
        }
        
       
    } 
 

</script>
