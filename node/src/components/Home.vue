<template>
    <v-container fluid>
        <v-card>
            <v-toolbar light>
                <v-bottom-nav
                        :active.sync="bottomNav"
                        :color="color"
                        :value="true">
                    <v-btn dark value="/sortear-numeros" to="/sortear-numeros">
                        <span>Sortear Números</span>
                        <v-icon>devices</v-icon>
                    </v-btn>

                    <v-btn dark value="/sortear-nomes" to="/sortear-nomes">
                        <span>Sortear Nomes</span>
                        <v-icon>settings_system_daydream</v-icon>
                    </v-btn>

                    <v-btn dark value="/sortear-amigo-secreto" to="/sortear-amigo-secreto">
                        <span>Sortear Amigo Secreto</span>
                        <v-icon>chat</v-icon>
                    </v-btn>

                </v-bottom-nav>
            </v-toolbar>
            <v-card-text heigth="300px">
                <router-view />
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                bottomNav: '/sortear-numeros'
            }
        },

        computed: {
            color() {
              console.log(this.bottomNav)
                switch (this.bottomNav) {
                    case '/sortear-nomes':
                        return 'brown'
                    case '/sortear-amigo-secreto':
                        return 'teal'
                    case '/sortear-numeros':
                        return 'blue-grey'
                    default:
                        return 'blue-grey'
                }
            }
        }
    }
</script>
