<template>
    <v-container>
        <v-card-text>
            <v-layout
                    text-xs-center
                    class="text-xs-center"
                    wrap>
                <v-flex md1>
                    De
                    <v-text-field
                            type="number"
                            label="De?"
                            box
                            v-model="numeroInicial"></v-text-field>
                </v-flex>
                <v-divider class="mx-3"
                           inset
                           vertical></v-divider>
                <v-flex md1>
                    Até
                    <v-text-field type="number"
                                  label="Até?"
                                  box
                                  v-model="numeroFinal"></v-text-field>
                </v-flex>
            </v-layout>
            <v-flex md3>
                <v-card-title primary-title v-if="numeroSorteado != '' && numeroSorteado != null">
                    <div class="headline">O número sorteado foi: <b>{{numeroSorteado}}</b></div>
                </v-card-title>
            </v-flex>
        </v-card-text>
    </v-container>
</template>

<script>
  export default {
    data() {
      return {
        numeroInicial: '',
        numeroFinal: '',
        numeroSorteado: '',
      };
    },
    watch: {
      numeroInicial() {
        this.numeroSorteado = this.sortearNumeros();
      },
      numeroFinal() {
        this.numeroSorteado = this.sortearNumeros();
      },
    },
    methods: {
      sortearNumeros: function () {
        this.numeroSorteado = '';
        if (this.numeroInicial != '' && this.numeroFinal != '') {
          let numeroInicial = parseInt(this.numeroInicial, 10);
          let numeroFinal = parseInt(this.numeroFinal);
          if (numeroInicial > numeroFinal) {
            return this.randomizarNumeros(numeroFinal, numeroInicial);
          }
          return this.randomizarNumeros(numeroInicial, numeroFinal);
        }
      },
      randomizarNumeros(valorMinimo, valorMaximo) {
        return Math.round(Math.random() * (valorMaximo - valorMinimo) + valorMinimo);
      }
    }
  }
</script>

<style>

</style>
