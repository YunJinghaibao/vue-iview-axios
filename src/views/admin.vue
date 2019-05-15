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
export default {
    name: 'admin',
    data(){
        return{
            psd: null,
            data: {
                name: 'haibao',
                age: 1,
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
        // console.log(this);
    },
    methods: {
        iptC(v){
            let a = MD5(v);
            this.psd = a
        },
        test(){
            this.$post('/testo', this.datao, true).then(res => {
                console.log(res);
            })
            // this.$get('/test', {params: this.data}).then(res => {
            //     console.log(res);
            // });
        },
    }
}
</script>
