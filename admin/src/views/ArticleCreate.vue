<template>
  <div class="item-create">
    <h1>{{ id ? '编辑' : '新建' }}文章</h1>
    <el-form @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <vue-editor v-model="model.body" useCustomImageHandler @image-added="handleImageAdded"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  name: "articles-create",
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      categories: []
    };
  },
  methods: {
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      console.log(11)
      const formData = new FormData();
      formData.append("file", file);
      const res = await this.$http.post("/file/upload", formData);
      console.log(res)
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`/api/articles/${this.id}`, this.model);
      } else {
        res = await this.$http.post("/api/articles", this.model);
      }
      this.$router.push("/articles/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`/api/articles/${this.id}`);
      this.model = res.data;
    },
    async fetchParents() {
      const res = await this.$http.get("/api/categories");
      this.categories = res.data;
    }
  },
  created() {
    this.id && this.fetch();
    this.fetchParents();
  },
  components: {
    VueEditor
  }
};
</script>

<style lang="less" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 1px solid #eee;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.quillWrapper {
  display: inline-block;
  line-height: normal;
}
</style>
