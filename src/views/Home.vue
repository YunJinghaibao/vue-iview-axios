<template>
  <div class="home">
    <Card style="width: 300px; height: 250px; margin: 150px auto">
      <div slot="title" style="text-align: center">
        <p style="font-size: 20px; font-weight: 600; font-family: 微软雅黑">请登陆</p>
      </div>
      <Row>
        <Col>
          <Input prefix="ios-person" placeholder="用户名/账号"></Input>
        </Col>
      </Row>
      <Row>
        <Col>
          <Input prefix="ios-key" placeholder="密码"></Input>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <Checkbox>下次自动登陆</Checkbox>
        </Col>
        <Col span="12">
          <Row type="flex" justify="end">
            <Col>
              <Breadcrumb>
                <BreadcrumbItem to="/admin">忘记密码</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button long size="large" type="success">登陆</Button>
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
import http from "../http";
import qs from "qs";
export default {
  name: "home",
  data() {
    return {
      data: {
        name: "haibao",
        age: 1
      }
    };
  },
  methods: {}
};
</script>
<style lang="less">
.ivu-row {
  margin-bottom: 15px;
}
</style>
