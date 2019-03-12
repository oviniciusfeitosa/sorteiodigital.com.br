<template>
    <v-container>
        <v-layout text-xs-center>
            <v-flex xs12>
                <v-layout align-center justify-center row fill-height>
                    <v-flex md12
                            :v-for="(elemento) in this.grupoNomes">
                        {{elemento.nome}}
                    </v-flex>
                    <v-flex md12>
                        <v-btn @click="adicionarElemento()">Adicionar Nome</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data() {
      return {
        grupoNomes: [],
      };
    },
    methods: {
      adicionarElemento() {
        this.grupoNomes.push({
          nome: ''
        });
      },
      removerElemento(elemento) {
        var indice = this.grupoNomes.indexOf(elemento);
        this.grupoNomes.splice(indice, 1);
      },
    },
    mounted() {
      this.adicionarElemento();
    }
  }
</script>

<style>

</style>
