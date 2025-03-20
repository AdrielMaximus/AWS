<template>
  <amplify-authenticator></amplify-authenticator>
</template>

<script>
import { AmplifyAuthenticator } from '@aws-amplify/ui-vue';
import { Auth } from 'aws-amplify';

export default {
  async mounted(){
    AmplifyEventBus.$on('authState', eventinfo => {
      if (eventinfo === 'signedIn') {
        this.$router.push({name: 'Home'});
      } else if (eventinfo === 'signedOut') {
        this.$router.push({name: 'Auth'});
      }
    });

    try {
      await Auth.currentAuthenticatedUser();
this.$router.push({name: 'Home'});
    } catch (error) {
      this.$router.push({name: 'Auth'});
    }
  }
};
</script>

