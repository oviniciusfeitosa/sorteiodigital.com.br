<template>
    <v-container>
        <v-layout text-xs-center>
            <v-flex xs12>
                <v-layout align-center justify-center row fill-height>
                    <v-flex md12
                            :key="plataforma.title"
                            :v-for="grupoNome in this.grupoNomes">
                        <v-text-field type="text"
                                      label="Nome"
                                      v-model="grupoNome.nome"
                                      box></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout align-center justify-center row fill-height>
                    <v-btn @click="adicionarElemento()"></v-btn>
                </v-layout>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data() {
      return {
        grupoNomes: [{
          nome: '',
        }],
      };
    },
    methods() {
      adicionarElemento() {
        this.grupoNomes.push({
          nome: ''
        });
      },

    },
    mounted() {

    }
  }
</script>

<style>

</style>
