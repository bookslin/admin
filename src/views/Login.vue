<template>
    <div>
        <vue-particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded"
            :options="options2" />
        <div class="form-box">
            <h3>企业门户网站管理系统</h3>
            <el-form
             ref="loginFormRef" 
             :model="loginForm"
             status-icon 
             :rules="loginRules"
             label-width="80px"
             class="loginform">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="loginForm.username" autocomplete="off" @keyup.enter="submitForm"/>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginForm.password" type="password" autocomplete="off"  @keyup.enter="submitForm" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>
<script setup>
import { loadFull } from "tsparticles";
import { reactive,ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from 'element-plus'
import axios from "axios"
import { useStore } from "vuex";
const store = useStore()

const loginForm = reactive({
    username:"",
    password:"",
})//表单绑定响应式对象
const loginFormRef = ref ()//表单引入对象
const loginRules = reactive({
    username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ],
})

//粒子效果
const particlesInit = async engine => {
    await loadFull(engine);
};
const particlesLoaded = async container => {
    // console.log("Particles container loaded", container);
};
const router = useRouter()
//提交form表单
const submitForm = ()=> {
    //1.表单校验
    loginFormRef.value.validate((valid)=>{
        console.log(valid);
        if(valid) {
            axios.post("/adminapi/user/login",loginForm).then(res=>{
                console.log(res.data);
                if(res.data.ActionType==="OK") {
                    // console.log(res.data.data);
                    store.commit("changeUserInfo",res.data.data)
                    store.commit("changeGetterRouter",false)
                    router.push("/index") 
                } else{
                ElMessage.error('用户名和密码不匹配')
                 }
            })
        }

    })
    //2.拿到表单数据，提交到后台
    //3.设置token  
}


//配置particles
const options2 = {
    fpsLimit: 60,
    particles: {
        move: {
            bounce: false,
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: 2,
            straight: false
        },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: {
            value: 0.5
        },
        shape: {
            type: "circle"
        },
        size: {
            value: { min: 3, max: 8 }
        }
    },
    themes: [
        {
            name: "light",
            default: {
                value: true,
                mode: "light"
            },
            options: {
                background: {
                    color: "#fff"
                },
                particles: {
                    color: {
                        value: [
                            '#3998d0',
                            '#2eb6af',
                            '#a9bd33',
                            '#9952cf',
                        ],
                    }
                }
            }
        },
        {
            name: "dark",
            default: {
                value: true,
                mode: "dark"
            },
            options: {
                background: {
                    color: "#fff"
                },
                particles: {
                    color: {
                        value: "#fff"
                    }
                }
            }
        }
    ]
};
</script>
<style lang="scss" scoped> 
.form-box{
    width: 450px;
    height: 220px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: rgba($color: #42464a, $alpha: 0.5);
    color: white;
    text-align: center;
    padding: 50px 30px;
    h3{
        font-size: 30px;
    }
    .loginform{margin-top: 20px;}
}
::v-deep .el-form-item__label{
    color: white;
}
</style>