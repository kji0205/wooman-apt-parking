<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <i class="fab fa-accusoft"></i>
      <a href="">불법주차신고</a>
    </div>
    <ul class="navbar__menu" :class="{ 'active': isMenuExpended }">
      <li @click="linkTo('home')">
        home
      </li>
      <li @click="linkTo('list')">불법주차 현황</li>
      <li @click="linkTo('write')">
        기록
      </li>
      <li @click="linkTo('faq')">FAQ</li>
      <li @click="linkTo('search')">조회</li>
    </ul>
    <ul class="navbar__icons" :class="{ 'active': isMenuExpended }">
      <li><i class="fab fa-twitter"></i></li>
      <li><i class="fab fa-facebook-f"></i></li>
    </ul>

    <a href="#" class="navbar__toggleBtn" @click="toggleMenu">
      <i class="fas fa-bars"></i>
    </a>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuExpended: false
    }
  },

  methods: {
    toggleMenu() {
      this.isMenuExpended = !this.isMenuExpended
    },
    linkTo(target) {
      this.toggleMenu();
      this.$router.push(target)
    }
  },

  // beforeRouteEnter (to, from, next) {
  //   // Login 컴포넌트가 화면에 표시되기 전에 수행될 로직
  //   // Login 컴포넌트는 아직 생성되지 않은 시점
  // },
  beforeRouteUpdate(to, from, next) {
    // 화면에 표시된 컴포넌트가 변경될 때 수행될 로직
    // `this`로 Login 컴포넌트를 접근할 수 있음
    console.log(to, from, next)

  },
  // beforeRouteLeave (to, from, next) {
  //   // Login 컴포넌트를 화면에 표시한 url 값이 변경되기 직전의 로직
  //   // `this`로 Login 컴포넌트를 접근할 수 있음
  // }
}
</script>

<style scoped>

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #263343;
  padding: 8px 12px;
}

.navbar__logo {
  font-size: 24px;
  color: var(--text-color);
}

.navbar__logo i {
  color: #d49466;
}

.navbar__menu {
  display: flex;
  list-style: none;
  padding-left: 0;
}

.navbar__menu li {
  padding: 8px 12px;
  color: white;
}

.navbar__menu li:hover {
  background-color: #d49466;
  border-radius: 4px;
}

.navbar__icons {
  list-style: none;
  color: var(--text-color);
  display: flex;
  padding-left: 0;
}

.navbar__icons li {
  padding: 8px 12px;
}

.navbar__toggleBtn {
  display: none;
  position: absolute;
  right: 32px;
  font-size: 24px;
  color: #d49466;
}

@media screen and (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 24px;
  }

  .navbar__menu {
    display: none;
    flex-direction: column;
    align-items: center;
    width: 100%
  }

  .navbar__menu li {
    width: 100%;
    text-align: center;
  }

  .navbar__icons {
    display: none;
    justify-content: center;
    width: 100%;
  }

  .navbar__toggleBtn {
    display: block;
  }

  .navbar__menu.active,
  .navbar__icons.active {
    display: flex;
  }
}

</style>
