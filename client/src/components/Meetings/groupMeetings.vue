<template>
<div>  
   <q-list bordered separator>

            <q-item v-for="meeting in groupMeetings" :key="meeting.id" :id="meeting.id">
                <q-item-section>{{meeting.dateMeeting}} {{meeting.type}}</q-item-section>
                
                <q-item-section top side> 
                    <div>
                      <q-btn
                        @click.stop="showEditMeeting = true"
                        flat
                        dense
                        color="black"
                        icon="edit"
                        class="gt-xs"
                        size="12px" />
                     <q-btn
                        flat
                        dense
                        color="red"
                        icon="delete"
                        class="gt-xs"
                        size="12px" />
                    </div>
                </q-item-section>
            </q-item>
                    
     

        <!-- <q-dialog v-model="confirm" persistent>
            <q-card>
                <q-card-section class="row items-center">
                <q-avatar icon="cancel" color="white" text-color="red"></q-avatar>
                <span class="q-ml-sm">You are about to delete this member </span>
                </q-card-section>

                <q-card-actions align="right">
                <q-btn flat label="Return" color="primary" v-close-popup></q-btn>
                <q-btn @click="deleteGroupMember(id)" flat label="Delete Member" color="primary" v-close-popup></q-btn>
                </q-card-actions>
            </q-card>
        </q-dialog> -->

    </q-list> 
     
</div>  
</template>

<script>
    import getGroupMeetings from '../../composables/getGroupMeetings'
    export default {
        setup(){
            const { groupMeetings, error, load } = getGroupMeetings()
            load()
            return  { groupMeetings, error }
        },  
    }   
       
</script>

<style>
   
</style>