<template>
<div>
   
    <q-toolbar class="bg-primary text-white">
        <q-toolbar-title class="mx-auto">
            Missional Communities
        </q-toolbar-title>
    </q-toolbar>
    <q-form @submit.prevent="submitForm">
        <div class="card">
            <q-card class="q-mt-lg" bordered>
                <div class="row q-ma-md">
                    <q-banner class="bg-primary col" dark>
                        <template v-slot:avatar>
                            <q-icon name="account_circle" color="black" />
                        </template>
                        Login to access the Missional Communities Application
                    </q-banner>
                </div>
                <div class="q-gutter-md q-ma-md" style="max-width: 400px">
                    <q-input
                        outlined
                        ref="groupName"
                        lazy-rules
                        v-model="formData.groupName"
                        class="col"
                        label="Group"
                        stack-label
                    />
                </div>

                <div
                  class="row q-ma-md q-gutter-md"
                  style="max-width: 390px">
                    <q-input
                        outlined
                        ref="password"
                        v-model="formData.password"
                        class="col"
                        :rules="[
                            (val) =>
                                val.length >= 6 ||
                                'Please use minimum 6 characters.',
                        ]"
                        lazy-rules
                        label="Password"
                        type="password"
                        stack-label
                    />
                </div>
                <div class="row q-ma-md">
                    <q-btn
                    color="primary"
                    label="Login"
                    type="submit" />
                </div>
            
            </q-card>
        </div>
    </q-form>
</div>    
</template>

<script>
import { mapActions } from "vuex";

export default {
    data() {
        return {
            formData: {
                groupName: "",
                password: "",
            },
            model: null
        };
    },
    methods: {
        ...mapActions(["loginGroup"]),
        // ...mapActions("meetings",["read"]),
        // ...mapGetters("groups", ["groups"]),
        submitForm() {
            if (!this.$refs.password.hasError) {
                let payload = {
                    groupName: this.$refs.groupName.modelValue,
                    password: this.$refs.password.modelValue,
                };
                console.log(payload)
                this.loginGroup(payload);
            }
        },
    },
    computed: {},
    actions:{

    }
};
</script>

<style>

.card {
    max-width: 500px;
    margin: 0 auto;
}
</style>
