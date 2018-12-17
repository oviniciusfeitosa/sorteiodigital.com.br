<template>
    <v-container>
        <v-layout
                text-xs-center
                wrap>
            <v-flex xs12>
                <v-text-field
                        type="number"
                        label="De?"
                        box
                        v-model="numeroInicial"
                ></v-text-field>
                 -
                <v-text-field
                        type="number"
                        label="Até?"
                        box
                        v-model="numeroFinal"
                ></v-text-field>
                    {{randomNumber()}}
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data() {
      return {
        numeroInicial: '',
        numeroFinal: '',
      };
    },
    methods : {
      randomNumber : function(){
        if(this.numeroInicial != '' && this.numeroFinal != '') {
            if(this.numeroInicial > this.numeroFinal) {
                return Math.floor(Math.random() * (this.numeroFinal - this.numeroInicial + this.numeroInicial)) + this.numeroInicial;
            }
            return Math.floor(Math.random() * (this.numeroInicial - this.numeroFinal + this.numeroFinal)) + this.numeroFinal;
        }
      }
    }
  }
</script>

<style>

</style>
