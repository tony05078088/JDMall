<template>
  <div class="wrapper">
    <img
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      class="wrapper__img"
    />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        v-model="data.username"
        placeholder="用戶名"
      />
    </div>

    <div class="wrapper__input">
      <input
        type="password"
        v-model="data.password"
        class="wrapper__input__content"
        placeholder="請輸入密碼"
      />
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登錄</div>
    <div class="wrapper__login-link" @click="handleRegister">註冊</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { post } from '../utils/request';
import { reactive } from '@vue/reactivity';

export default {
  name: 'Login',
  setup () {
    const data = reactive({
      username: '',
      password: ''
    });
    const router = useRouter();
    const handleLogin = async () => {
      try {
        const result = await post('/api/user/login2222', {
          username: data.username,
          password: data.password
        });
        console.log(result);
        if (result?.errno === 0) {
          alert('成功');
          localStorage.isLogin = true;
          router.push({ name: 'Home' });
        } else {
          alert('登錄失敗');
        }
      } catch (e) {
        alert('請求失敗');
      }
    };
    const handleRegister = () => {
      router.push({ name: 'Register' });
    };
    return { handleLogin, handleRegister, data };
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
  &__login-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    background: #0091ff;
    height: 0.48rem;
    line-height: 0.48rem;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: #ffffff;
    font-size: 0.16rem;
    text-align: center;
  }
  &__login-link {
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
    text-align: center;
  }
}
</style>
