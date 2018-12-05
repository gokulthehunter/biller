<template>
    <div>
        <v-navigation-drawer v-model="drawer" fixed app>
            <v-list dense>
                <v-list-tile to="/">
                    <v-list-tile-action >
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile  to="/">
                    <v-list-tile-action>
                        <v-icon>input</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Sign In</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile  to="/">
                    <v-list-tile-action>
                        <v-icon>open_in_new</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Sign Up</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            </v-navigation-drawer>
        <v-toolbar class="light-blue" dark fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>BILLER</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items right>
                <v-btn flat to="/">Home</v-btn>
                <v-btn flat to="/about">About</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    data: () => ({
      drawer: false
    }),
    props: {
      source: String
    }
  }
</script>

