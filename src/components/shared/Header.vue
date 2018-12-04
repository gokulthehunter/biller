<template>
    <div>
        <v-app id="inspire">
            <v-navigation-drawer v-model="drawer" fixed app>
                <v-list dense>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>home</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Home</v-list-tile-title>
                        </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>contact_mail</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Contact</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
                </v-navigation-drawer>
            <v-toolbar class="light-blue" dark fixed app>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <!-- <v-toolbar-title>Application</v-toolbar-title> -->
                <v-spacer></v-spacer>
                <v-toolbar-items right>
                    <v-btn flat to="/">Home</v-btn>
                    <v-btn flat to="/about">About</v-btn>
                </v-toolbar-items>
            </v-toolbar>
        </v-app>
    </div>
</template>

<script>
export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>

