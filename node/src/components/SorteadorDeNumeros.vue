<template>
    <v-container>
        <v-card-text>
            <v-layout align-center justify-center row fill-height>
                <v-flex md1>
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
                    <v-text-field type="number"
                                  label="Até?"
                                  box
                                  v-model="numeroFinal"></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout align-center justify-center row fill-height>
                <v-btn color="success" @click="sortearNumeros()">Sortear</v-btn>
            </v-layout>
            <v-layout align-center
                      justify-center
                      row
                      v-if="numeroSorteado != '' && numeroSorteado != null"
                      fill-height>
                <v-card>
                    <v-container fluid grid-list-lg>
                        <v-layout align-center justify-center row fill-height>
                            <v-flex xs12>
                                <v-card color="blue-grey darken-2" class="white--text">
                                    <v-card-title primary-title>
                                        <div>
                                            <div class="headline">O número sorteado foi:</div>
                                            <!--<span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>-->
                                            <div class="headline">
                                                <b>{{numeroSorteado}}</b>
                                            </div>
                                        </div>
                                    </v-card-title>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-layout>
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
    watch: {},
    methods: {
      sortearNumeros: function () {
        if (this.numeroInicial != '' && this.numeroFinal != '') {
          let numeroInicial = parseInt(this.numeroInicial, 10);
          let numeroFinal = parseInt(this.numeroFinal);
          if (numeroInicial > numeroFinal) {
            this.numeroSorteado = this.randomizarNumeros(numeroFinal, numeroInicial);
          } else {
            this.numeroSorteado = this.randomizarNumeros(numeroInicial, numeroFinal);
          }
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
