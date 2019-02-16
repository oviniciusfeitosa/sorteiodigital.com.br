<template>
    <v-container fluid>
        <v-card>
            <v-card-text>
                <v-tabs slot="extension"
                        dark
                        v-model="model"
                        centered
                        color="blue"
                        fixed-tabs
                        grow>
                    <v-tabs-slider color="yellow"></v-tabs-slider>
                    <v-tab v-for="i in tabItems"
                           :key="i.menuName"
                           :to="`${i.menuLink}`">{{i.menuName}}
                    </v-tab>
                </v-tabs>

                <router-view/>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
  export default {
    data() {
      return {
        bottomNav: '/sortear-numeros',
        model: 'tab-1',
        tabItems:
          [
            {
              menuName: 'Sortear Números',
              menuLink: '/sortear-numeros',
            },
            {
              menuName: 'Sortear Nomes',
              menuLink: '/sortear-nomes',
            },
            {
              menuName: 'Sortear Amigo Secreto',
              menuLink: '/sortear-amigo-secreto',
            },
          ]
      }
    },
  }
</script>
