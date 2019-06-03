<template>
    <div>
        <Button type="info" @click="test">哈哈哈</Button>
        <Row>
            <Col span="12">
                <Input @input="iptC"></Input>
            </Col>
        </Row>
        <Input v-model="name.name"></Input>
    </div>
</template>

<script>
import MD5 from 'js-md5';
import Person from '../util/Person';
export default {
    name: 'admin',
    data(){
        return{
            psd: null,
            data: {
                name: 'siyuan',
                age: 2,
            },
            datao: [
                {
                    name: 'haibao',
                    age: 1,
                    ids: [1, 1, 2],
                },
                {
                    name: 'siyuan',
                    age: 26,
                    ids: [2, 2, 2, 2],
                },
                {
                    name: 'jingyun',
                    age: 26,
                    ids: [2, 2, 2, 2],
                }
            ],
            name: {},
        }
    },
    created(){
        // let person = new Person(this);
        // person.say();
        // console.log(this);
    },
    methods: {
        iptC(v){
            let a = MD5(v);
            this.psd = a;
            console.log(this.psd);
        },
        test(){
            // console.log(new Person(123).vue);
            // this.$post('/testo', this.datao, true).then(res => {
            //     console.log(res);
            // })
            this.$get('/test', {params: this.data}).then(res => {
                console.log(res);
            });
            // this.$get('/test1', {params: this.data}).then(res => {
            //     console.log(res);
            // });
            // this.$get('/test2').then(res => {
            //     console.log(res);
            // });
            // console.log(this.name);
            // console.log(Object.keys(this.name));
        },
    }
}
</script>
