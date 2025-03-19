<template>
  <amplify-authenticator></amplify-authenticator>
</template>

<script>
import { AmplifyAuthenticator } from '@aws-amplify/ui-vue';
import { Auth } from 'aws-amplify';

export default {
  mounted(){
    Auth.currentAuthenticatedUser()
      .then(user => console.log({ user }))
      .catch(() => console.log('Not signed in'));
  }
};
</script>

