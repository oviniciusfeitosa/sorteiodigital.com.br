<template>
    <v-app>
        <v-toolbar app dark color="blue darken-1">
            <v-toolbar-title class="headline text-uppercase">
                <span>{{titulo}}</span>
            </v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat>
                    <github-button href="https://github.com/vinnyfs89/sorteiodigital.com.br"
                                   data-size="large"
                                   data-show-count="true"
                                   aria-label="Star vinnyfs89/sorteiodigital.com.br on GitHub">Star
                    </github-button>
                </v-btn>
                <v-btn flat>
                    <github-button href="https://github.com/vinnyfs89/sorteiodigital.com.br/fork" data-size="large"
                                   data-show-count="true"
                                   aria-label="Fork vinnyfs89/sorteiodigital.com.br on GitHub">Fork
                    </github-button>
                </v-btn>
                <v-btn flat>
                    <!-- Place this tag where you want the button to render. -->
                    <github-button href="https://github.com/vinnyfs89" data-size="large" data-show-count="true"
                                   aria-label="Follow @vinnyfs89 on GitHub">Follow
                    </github-button>
                </v-btn>

            </v-toolbar-items>

        </v-toolbar>

        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
    import Home from './components/Home'
    import GithubButton from 'vue-github-button'

    export default {
        name: 'App',
        components: {
            Home,
            GithubButton
        },
        data() {
            return {
                titulo: 'Sorteio Digital'
            }
        }
    }
</script>
