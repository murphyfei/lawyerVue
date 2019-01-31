<template>
  <Modal :value="modal" width="360" @on-cancel="cancel">
    <p slot="header" style="color:#2D8CF0;text-align:center; font-size:18px;">
      <Icon type="information-circled"></Icon>
      <span>登录</span>
    </p>
    <div style="text-align:center">
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <Form-item prop="user" style="width: 100%;">
          <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item prop="password" style="width:100%;">
          <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item style="width:100%;">
          <Button type="primary" :loading="modal_loading" @click="handleSubmit('formInline')" style="width: 100%;">登录</Button>
        </Form-item>
      </Form>
    </div>
    <div slot="footer"></div>
  </Modal>
</template>
<script>
  export default {
    name: "login-dialog",
    // 接受父组件的值
    props:{
      modal:false
    },
    data () {
      return {
        modal_loading: false,
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      cancel(){
        this.$emit('closeDg', false);
      },
      del () {
        this.modal_loading = true;
        setTimeout(() => {
          this.modal_loading = false;
          this.$emit('closeDg', false);
          this.$Message.success('删除成功');
        }, 1000);
      },
      handleSubmit(name) {
        this.modal_loading = true;
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!');
          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      }
    }
  }
</script>
<style>
  .ivu-modal-footer{
    border: none;
  }
</style>
