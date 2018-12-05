<template>
    <div class="datatables">
        <section>
            <v-layout>
                <v-flex xs12>
                    <v-container>
                        <v-data-table :headers="headers" :items="desserts" class="elevation-1">
                            <template slot="items" slot-scope="props">
                            <td>{{ props.item.slno }}</td>
                            <td class="text-xs-left">{{ props.item.date }}</td>
                            <td class="text-xs-left">{{ props.item.supplier }}</td>
                            <td class="text-xs-left">{{ props.item.invoice }}</td>
                            <td class="text-xs-left">{{ props.item.remarks }}</td>
                            <td class="text-xs-center"><v-btn>Edit</v-btn></td>
                            <td class="text-xs-right">{{ props.item.amount }}</td>
                            </template>
                        </v-data-table>
                    </v-container>
                </v-flex>
            </v-layout>
        </section>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name:"Datatables",
    data () {
        return { 
            headers:[],
        }
    },
    created(){
        this.headers = this.$store.state.headers
    },
    mounted () {
        this.$store.dispatch('loadDesserts')
    },
    computed:{
        ...mapState([
            'desserts'
        ])
    }
}
</script>

