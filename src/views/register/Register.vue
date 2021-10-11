<template>
  <div class="wrapper">
    <img
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      class="wrapper__img"
    />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="請輸入手機號碼"
        v-model="username"
      />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="請輸入密碼"
        v-model="password"
      />
    </div>

    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="請確認密碼"
        v-model="ensurement"
      />
    </div>
    <div class="wrapper__register-button" @click="handleRegister">註冊</div>
    <div class="wrapper__register-link" @click="handleLoginClick">
      已有帳號,去登錄
    </div>
    <toast v-if="show" :message="toastMessage" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { reactive, toRefs } from '@vue/reactivity';
import { post } from '../utils/request';
import Toast, { useToastEffect } from '../../components/Toast.vue';

const useRegisterEffect = showToast => {
  const router = useRouter();
  const data = reactive({ username: '', password: '', ensurement: '' });
  const { username, password, ensurement } = toRefs(data);
  const handleRegister = async () => {
    try {
      const result = await post('/api/user/register', {
        username: data.username,
        password: data.password,
        ensurement: data.ensurement
      });
      console.log(result);
      if (result?.errno === 0) {
        router.push({ name: 'Login' });
      } else {
        showToast('註冊失敗');
      }
    } catch (e) {
      showToast('請求失敗');
    }
  };
  return { username, password, ensurement, handleRegister };
};

export default {
  name: 'Register',
  components: {
    Toast
  },
  setup () {
    const { show, toastMessage, showToast } = useToastEffect();
    const {
      username,
      password,
      ensurement,
      handleRegister
    } = useRegisterEffect(showToast);
    return {
      handleRegister,
      username,
      password,
      ensurement,
      show,
      toastMessage
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    width: 0.66rem;
    height: 0.66rem;
    margin: 0 auto 0.4rem auto;
    display: block;
  }
  &__input {
    line-height: 0.48rem;
    height: 0.48rem;
    box-sizing: border-box;
    padding: 0 0.16rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    border-radius: 6px;
    &__content {
      width: 100%;
      line-height: 0.48rem;
      border: none;
      outline: none;
      background: none;
      font-size: 0.16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__register-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    background: $btn-bgColor;
    height: 0.48rem;
    line-height: 0.48rem;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: #ffffff;
    font-size: 0.16rem;
    text-align: center;
    cursor: pointer;
  }
  &__register-link {
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
    text-align: center;
  }
}
</style>
