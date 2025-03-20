<template>
  <amplify-authenticator></amplify-authenticator>
</template>

<script>
import { AmplifyAuthenticator } from '@aws-amplify/ui-vue';
import { Auth } from 'aws-amplify';

export default {
  mounted(){
    AmplifyEventBus.$on('authState', eventinfo => {
      if (eventinfo === 'signedIn') {
        this.$router.push({name: 'Home'});
      } else if (eventinfo === 'signedOut') {
        this.$router.push({name: 'Auth'});
      }
    });
    if (Auth.currentAuthenticatedUser()) {
      this.$router.push({name: 'Home'});
    } else {
      this.$router.push({name: 'Auth'});
    }
  }
};
</script>

