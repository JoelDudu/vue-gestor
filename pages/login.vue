<template>
  <v-app id="login" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="../static/m.png" alt="Vue Material Admin" width="120" height="120">
                  <h1 class="flex my-4 primary--text">Gestor - Sites</h1>
                </div>
                <v-form>
                  <v-text-field append-icon="person" name="login" label="Email" type="text"
                                v-model="model.username"></v-text-field>
                  <v-text-field append-icon="lock" name="password" label="Senha" id="password" type="password"
                                v-model="model.password"></v-text-field>
                  <v-alert type="error" dismissible v-model="alerta">
                  {{model.msg}}
                  </v-alert>                                
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn icon>
                  <v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="red">fa fa-google fa-lg</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn block color="primary" @click="login" :loading="loading">Entrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    layout: 'default',
    data: () => ({
      loading: false,
      alerta: false,
      model: {
        username: '',
        password: '',
        uid: null,
        msg: '',
      }
    }),

    methods: {
      login() {
        let that = this
        that.loading = true;
        that.alerta = false;
        this.$fire.auth.signInWithEmailAndPassword(this.model.username, this.model.password)
        .catch(function (error){
          that.loading = false;
          that.model.msg = error.message;
          that.alerta = true;
        }).then((user) => {
          this.$router.push('/host')
        })
      }
    },
  };
</script>
<style scoped lang="css">
  #login {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
</style>
