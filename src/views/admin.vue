<template>
    <div>
        <Button type="info">哈哈哈</Button>
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

        }
    },
    methods: {
        iptC(v){
            console.log(v);
            let a = MD5(v);
            console.log(a);
        },
    }
}
</script>

