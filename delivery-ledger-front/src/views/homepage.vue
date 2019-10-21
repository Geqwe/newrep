<template>
    <v-app id="inspire" dark>
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-bottom justify-center>
                    <v-flex xs10 sm10 md10 lg10 xl10>
                        <v-card class="elevation-24">
                            <v-toolbar dark color="success">
                                <v-toolbar-title>ΔΕΛΤΙΟ ΑΠΟΣΤΟΛΗΣ</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field prepend-icon="person" type="text" name="company_name" v-model="company_name" placeholder="ΕΠΩΝΥΜΙΑ" />
                                    <v-layout row wrap>
                                        <v-flex xs6 sm6 md6 lg6 xl6>
                                            <v-text-field prepend-icon="work" type="text" name="job" v-model="job" placeholder="ΕΠΑΓΓΕΛΜΑ" />
                                            <v-text-field prepend-icon="home" type="text" name="address" v-model="address" placeholder="ΔΙΕΥΘΥΝΣΗ" />
                                            <v-text-field prepend-icon="open_in_browser" type="text" name="place_of_loading" v-model="place_of_loading" placeholder="ΤΟΠΟΣ ΦΟΡΤΩΣΗΣ" />
                                            <v-text-field prepend-icon="room" type="text" name="destination" v-model="destination" placeholder="ΠΡΟΟΡΙΣΜΟΣ" />
                                        </v-flex>
                                        <v-flex xs6 sm6 md6 lg6 xl6>
                                            <v-text-field prepend-icon="description" type="text" name="afm" v-model="afm" placeholder="ΑΦΜ" />
                                            <v-text-field prepend-icon="store" type="text" name="city" v-model="city" placeholder="ΠΟΛΗ" />
                                            <v-text-field prepend-icon="assignment" type="text" name="doy" v-model="doy" placeholder="ΔΟΥ" />
                                        </v-flex>
                                        <v-flex xs6 sm6 md6 lg12 xl6>
                                            <v-data-table flat :headers="headers" :items="details">
                                                <template flat slot="headerCell" slot-scope="props">
                                                    <span>{{ props.header.text }}</span>
                                                </template>
                                                <template slot="items" slot-scope="props">
                                                    <td><v-text-field type="text" placholder="1" hide-details v-model="props.item[0]"></v-text-field></td>
                                                    <td><v-text-field type="text" placholder="2" hide-details v-model="props.item[1]"></v-text-field></td>
                                                    <td><v-text-field type="text" placholder="3" hide-details v-model="props.item[2]"></v-text-field></td>
                                                    <td><v-text-field type="text" placholder="4" hide-details v-model="props.item[3]"></v-text-field></td>
                                                    <td><v-text-field type="text" placholder="5" hide-details v-model="props.item[4]"></v-text-field></td>
                                                </template>
                                            </v-data-table>
                                        </v-flex>
                                    </v-layout>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="success" @click="submit()">SUBMIT</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>
<script>
export default {
    name: 'Homepage',
    data() {
        return {
            company_name: "",
            job: "",
            address: "",
            place_of_loading: "",
            destination: "",
            afm: "",
            city: "",
            doy: "",
            headers: [
                {
                    text: "ΠΕΡΙΓΡΑΦΗ ΑΓΑΘΩΝ",
                    align: "center",
                    sortable: true,
                    value: "name",
                    width: "600px"
                },
                {
                    text: "Μ.Μ",
                    value: "min",
                    sortable: true,
                    align: "center"
                },
                {
                    text: "ΠΟΣΟΤΗΣ",
                    value: "mean",
                    sortable: true,
                    align: "center"
                },
                {
                    text: "ΤΙΜΗ ΜΟΝΑΔΑΣ",
                    value: "max",
                    sortable: true,
                    align: "center"
                },
                {
                    text: "ΦΠΑ",
                    value: "max",
                    sortable: true,
                    align: "center"
                }
            ],
            details: [
                {

                },
                {

                },
                {

                },
                {

                },
                {

                }
            ]
        };
    },
    methods: {
        submit() {
            console.log(this.details);
        }
    }
}
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>
