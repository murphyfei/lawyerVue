<template>
  <div id="lawyer">
    <header id="home">
    <div class="container">
      <div id="navigation" class="fixed-top">
        <nav class="container navbar navbar-light navbar-expand-lg pt-4 pb-4">
          <a name="scroll_a" href="#home" class="navbar-brand">XXX律所</a>
          <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                  <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ml-auto">
              <li class="navbar-item">
                <a name="scroll_a" class="nav-link" href="#home">首页</a>
              </li>
              <li class="navbar-item">
                <a name="scroll_a" class="nav-link" href="#about">关于我们</a>
              </li>
              <li class="navbar-item">
                <a name="scroll_a" class="nav-link" href="#practice">社会动态</a>
              </li>
              <li class="navbar-item">
                <a name="scroll_a" class="nav-link" href="#team">服务团队</a>
              </li>
              <li class="navbar-item">
                <a class=" btn btn-outline-success" href="#home"  @click="login">登录</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div id="head-name" class="text-center">
      <h1 class="display-1">
        <strong>律所</strong>
      </h1>
      <p class="display-4">让 人 人 都 有 律 师</p>
      <a name="scroll_a" href="#contacts" class="btn btn-lg mt-3 btn-outline-success">联系我们</a>
    </div>
  </header>

  <!--"About Company"-->
  <section id="about">
    <div class="container">
      <h5 class="text-center pt-5">Добро пожаловать в наш офис</h5>
      <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, illum!</p>
      <hr class="w-25 pb-5 border-success">
      <div class="row">
        <div class="col-12 col-lg-6 pb-5"><img class="img-fluid" src="../assets/office.jpeg"></div>
        <div class="col-12 col-lg-6 align-self-center text-justify"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium totam voluptatem doloremque perspiciatis similique consequuntur autem hic, qui exercitationem nihil provident, architecto ipsum, fugit amet aliquam iusto neque molestiae voluptate culpa minima temporibus quos ad omnis dignissimos! Ducimus ullam temporibus molestiae, voluptates ex assumenda. Tenetur architecto asperiores iste, dolore hic.</p></div>
      </div>
    </div>
  </section>

  <!--"Practice"-->
  <section id="practice">
    <div class="container pb-5">
      <h5 class="text-center pt-5">Наша практика</h5>
      <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, illum!</p>
      <hr class="w-25 pb-5 border-success">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="row">
            <div class="col-2"><img class="img-fluid" src="../assets/item1.png" alt=""></div>
            <div class="col-10 text-justify"><h4>Heading</h4><br><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque repellat fuga mollitia voluptatem quis ut nostrum pariatur commodi ducimus accusantium amet praesentium deserunt laudantium, aperiam!</p></div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="row">
            <div class="col-2"><img class="img-fluid" src="../assets/item2.png" alt=""></div>
            <div class="col-10 text-justify"><h4>Heading</h4><br><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque repellat fuga mollitia voluptatem quis ut nostrum pariatur commodi ducimus accusantium amet praesentium deserunt laudantium, aperiam!</p></div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="row">
            <div class="col-2"><img class="img-fluid" src="../assets/item3.png" alt=""></div>
            <div class="col-10 text-justify"><h4>Heading</h4><br><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque repellat fuga mollitia voluptatem quis ut nostrum pariatur commodi ducimus accusantium amet praesentium deserunt laudantium, aperiam!</p></div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="row">
            <div class="col-2"><img class="img-fluid" src="../assets/item4.png" alt=""></div>
            <div class="col-10 text-justify"><h4>Heading</h4><br><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque repellat fuga mollitia voluptatem quis ut nostrum pariatur commodi ducimus accusantium amet praesentium deserunt laudantium, aperiam!</p></div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="row">
            <div class="col-2"><img class="img-fluid" src="../assets/item5.png" alt=""></div>
            <div class="col-10 text-justify"><h4>Heading</h4><br><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque repellat fuga mollitia voluptatem quis ut nostrum pariatur commodi ducimus accusantium amet praesentium deserunt laudantium, aperiam!</p></div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="row">
            <div class="col-2"><img class="img-fluid" src="../assets/item6.png" alt=""></div>
            <div class="col-10 text-justify"><h4>Heading</h4><br><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque repellat fuga mollitia voluptatem quis ut nostrum pariatur commodi ducimus accusantium amet praesentium deserunt laudantium, aperiam!</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--"Team"-->
  <section id="team">
    <div class="container pb-5">
      <h5 class="text-center pt-5">Наша команда</h5>
      <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, illum!</p>
      <hr class="w-25 pb-5 border-success">
      <div class="row mb-5">
        <div class="col-12 col-lg-6 text-justify">
          <h3>Name</h3><br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis a error, dolore, quaerat tempore debitis eveniet fuga nemo nam itaque quis ab explicabo nesciunt? Animi debitis ullam, porro tempora omnis voluptates, cumque maiores, tempore distinctio, eius obcaecati. Unde, quia, sapiente. Laborum neque quibusdam natus harum, consequuntur assumenda tenetur ipsa corporis.</p>
        </div>
        <div class="col-12 col-lg-6">
          <img class="img-fluid" src="../assets/lawyer.jpeg" alt="">
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12 col-lg-6 order-2">
          <img class="img-fluid" src="../assets/lawyer2.jpeg" alt="">
        </div>
        <div class="col-12 col-lg-6 order-lg-6 text-justify">
          <h3>Name</h3><br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis a error, dolore, quaerat tempore debitis eveniet fuga nemo nam itaque quis ab explicabo nesciunt? Animi debitis ullam, porro tempora omnis voluptates, cumque maiores, tempore distinctio, eius obcaecati. Unde, quia, sapiente. Laborum neque quibusdam natus harum, consequuntur assumenda tenetur ipsa corporis.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 text-justify">
          <h3>Name</h3><br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis a error, dolore, quaerat tempore debitis eveniet fuga nemo nam itaque quis ab explicabo nesciunt? Animi debitis ullam, porro tempora omnis voluptates, cumque maiores, tempore distinctio, eius obcaecati. Unde, quia, sapiente. Laborum neque quibusdam natus harum, consequuntur assumenda tenetur ipsa corporis.</p>
        </div>
        <div class="col-12 col-lg-6">
          <img class="img-fluid" src="../assets/lawyer3.jpeg" alt="">
        </div>
      </div>
    </div>
  </section>

  <!--"Contacts"-->
  <section id="contacts">
    <div class="container pb-5">
      <h5 class="text-center pt-5">Контакты</h5>
      <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, illum!</p>
      <hr class="w-25 pb-5 border-success">
      <div class="row">
        <div class="col-12 col-lg-6 align-self-center">
          <p class="h5"><i class="fas fa-map-marker-alt"></i> Bashkortostan, Ufa, 112, 9<br>
          <i class="fas fa-phone"></i> +7(000)000-00-00<br>
          <i class="fas fa-envelope"></i> info@gmail.com<br>
          <i class="fas fa-globe pb-5"></i> web-site.com
          </p>
        </div>
        <div class="col-12 col-lg-6">
          <form>
            <div class="form-group">
              <label for="youremail">Email</label>
              <input type="email" class="form-control" placeholder="Введите вашу электронная почта" required>
            </div>
            <div class="form-group">
              <label for="yourename">Имя</label>
              <input type="text" class="form-control" placeholder="Введите ваше имя" required>
            </div>
            <div class="form-group">
              <label for="yourephone">Телефон</label>
              <input type="text" class="form-control" placeholder="Введите ваш номер телефона" required>
            </div>
            <button type="submit" class="btn btn-success btn-block">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-light">
    <div class="container">
      <p class="text-center text-dark pt-5 pb-5" id="copyright"></p>
    </div>
  </footer>

  <!-- Button top -->
  <div id="top" class="collapse"><a name="scroll_a" href="#home"><i class="fas fa-chevron-up fa-3x text-secondary"></i></a></div>
    <!-- login modal -->
    <login_dialog :modal="modal" v-on:closeDg="closeDg"></login_dialog>
  </div>
</template>

<script>
  import login_dialog from "./dialog/login-dialog.vue";
export default {
  components: {login_dialog},
  data () {
    return {
      modal: false,
    }
  },
  methods:{
    login(){
      this.modal = true;
    },
    closeDg (childValue) {
      // childValue就是子组件传过来的值
      this.modal = childValue
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/lawyer.css";
/*# sourceMappingURL=style.css.map */
</style>
