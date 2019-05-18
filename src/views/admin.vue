<template>
    <div>
        <Button type="info" @click="test">哈哈哈</Button>
        <Row>
            <Col span="12">
                <Input @input="iptC"></Input>
            </Col>
        </Row>
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
                name: 'haibao',
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
            this.psd = a
        },
        test(){
            // console.log(new Person(123).vue);
            this.$post('/testo', this.datao, true).then(res => {
                console.log(res);
            })
            // this.$get('/test', {params: this.data}).then(res => {
            //     console.log(res);
            // });
            // this.$get('/test1', {params: this.data}).then(res => {
            //     console.log(res);
            // });
            // this.$get('/test2').then(res => {
            //     console.log(res);
            // });
        },
    }
}
</script>
