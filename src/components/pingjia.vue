<!-- 评价页面-->
<template>
    <el-tabs v-model="activeName" type="card" class="pj-tab">
        <el-tab-pane label="加工品质" name="1">
            <p>稻米加工品质主要是反映稻谷加工的特性，其评定的主要指标有出糙率、整精米率、大米中碎米含量的检验、大米加工精度检验等指标。</p>
            <p>(１) 出糙率净稻谷脱壳后的糙米质量（其中不完整粒折半计算）占试样质量的百分率，称为出糙率。稻谷的主要用途是碾米供食用，稻谷的出糙率高低不仅直接反映了稻谷的工艺品质一碾米产量的潜力，而且还可体现稻谷的食用品质。一般出糙率高的稻谷，籽粒成熟、饱满，极少受病虫害影响，加工糙米率高，食用品质也较好。</p>
            <p>(２) 整精米率整精米率是指一定量净稻谷脱壳后，糙米再经碾制成标一米，除去糠粉后整精米占稻谷质量的百分率。整精米率是衡量稻谷品质好坏的重要尺度之一。整精米率与稻米垩白粒、未熟粒、裂纹等含量有关，也与稻谷的粒形、含水量陈化度等有关。</p>
            <p>(３) 大米加工精度检验大米加工精度是指籽粒皮被碾磨的程度，即背沟和粒面留皮的程度。大米加工精度的高低直接影响出米率和食用品质，精度高则出米率低，相应营养价值也较低，但口感和蒸煮品质往往较好。因此，在稻谷工过程中，通常要求在保证产品质量和精度的前提下，尽可h提高出米率。</p>
            <p>(４) 大米中碎米含量的检验稻谷在加工过程中产的低于允许长度和规定筛层下的破碎粒，称为碎米。它是大米分级标准中不可缺少的一个标准项目。碎米的产生与稻谷品质、纹粒以及加工工艺不当等因素密切相关。碎米的存在不仅对米外观品质有很大的影响，同时严重影响米的蒸煮品质、食用品质、贮藏品质。</p>
        </el-tab-pane>
        <el-tab-pane label="外观品质" name="2">
            <p>外观品质主要包括粒形、垩白米率、垩白度和透明度等指标。</p>
        </el-tab-pane>
        <el-tab-pane label="卫生品质" name="3">
            <p>主要是稻米中农药及重金属元素等有害成分的残留状况等。主要包括有毒化学农药、重金属离子、黄曲毒素、硝酸盐等有毒物质的残留量。它是稻米的首要品质指标，因为稻米作为食品，首先必须安全、卫生。</p>
        </el-tab-pane>
        <el-tab-pane label="营养品质" name="4">
            <p>营养品质指精米中蛋白质及其氨基酸等养分的含量与组成，以及脂肪、维生素、矿物质含量等。稻米蛋白质除绝对含量外，谷蛋白、醇溶蛋白组分及氨基酸组成也与营养、食味有关。一般认为，蛋白质含量高会抑制淀粉粒吸水、膨胀及糊化，米饭口感交差，食味不佳。但其中又含有谷蛋白及多种人体必需的氨基酸，易消化吸收，营养价值较高，蛋白质含量一般是通过测定稻米的全氮含量(如凯氏法定氮)，并乘以5.95的转换系数即得。</p>
        </el-tab-pane>
        <el-tab-pane label="蒸煮与食味品质" name="5">
            <p>煮食味品质通常用直链淀粉含量、糊化温度和胶稠度指标来表示。直链淀粉含量是指直链淀粉占精米粉干重的百分率，是稻米蒸煮食味品质的定级指标。早米的食用品质比晚米差是由于早稻灌浆期温度较高，胚乳淀粉积累快，因而米质疏松，腹白度较大，透明度较小，缺乏光泽，比晚米吸水率大，黏性小，糊化后体积大，碎米多，整精米率低。所以，用早米煮成的饭，吃起来口感差，质干硬。晚稻结实期秋高气爽，有利于淀粉物质的积累，米质结构紧密，因而品质特征好，腹白度小或无，透明度较大，富有光泽，煮熟的饭吃起来，质地细腻，黏稠适中，松软可口。
            </p>
        </el-tab-pane>
        <el-tab-pane label="等级计算" name="6">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
                <el-form-item label="指标类型" prop="indexType">
                    <el-select v-model="ruleForm.indexType" placeholder="请选择指标类型">
                    <el-option label="国标" value="g"></el-option>
                    <el-option label="部标" value="b"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="稻米类型" prop="riceType">
                    <el-select v-model="ruleForm.riceType" placeholder="请选择稻米类型">
                    <el-option label="籼稻" value="candao"></el-option>
                    <el-option label="粳稻" value="gengdao"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="糙米率（%）" prop="cRice">
                    <el-input v-model.number="ruleForm.cRice"></el-input>
                </el-form-item>
                <el-form-item label="整精米率（%）" prop="zRice">
                    <el-input v-model.number="ruleForm.zRice"></el-input>
                </el-form-item>
                <el-form-item label="垩白粒率（%）" prop="elRice" v-if="ruleForm.indexType === 'g'">
                    <el-input v-model.number="ruleForm.elRice"></el-input>
                </el-form-item>
                <el-form-item label="垩白度（%）" prop="eRice">
                    <el-input v-model.number="ruleForm.eRice"></el-input>
                </el-form-item>
                <el-form-item label="直链淀粉含量（%）" prop="zlRice">
                    <el-input v-model.number="ruleForm.zlRice"></el-input>
                </el-form-item>
                <el-form-item label="胶稠度（mm）" prop="jRice">
                    <el-input v-model.number="ruleForm.jRice"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即计算</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-tab-pane>
    </el-tabs>
</template>
<script>
export default {
    data() {
        var checkNum = (rule, value, callback) => {
            if (!value) {
            return callback(new Error('不能为空'));
            }
            setTimeout(() => {
            if (isNaN(value)) {
                callback(new Error('请输入数字值'));
            } else {
                if (value < 0 || value > 100) {
                callback(new Error('请填写0-100之间的数字'));
                } else {
                callback();
                }
            }
            }, 100);
        };
        return {
            activeName: '1',
            ruleForm: {
                indexType: '',
                riceType: '',
                cRice: '',
                zRice: '',
                elRice: '',
                eRice: '',
                zlRice: '',
                jRice: ''
            },
            rules: {
                indexType: [
                    { required: true, message: '请选择指标类型', trigger: 'change' }
                ],
                riceType: [
                    { required: true, message: '请选择稻米类型', trigger: 'change' }
                ],
                cRice: [
                    { validator: checkNum, trigger: 'blur' }
                ],
                zRice: [
                    { validator: checkNum, trigger: 'blur' }
                ],
                elRice: [
                    { validator: checkNum, trigger: 'blur' }
                ],
                eRice: [
                    { validator: checkNum, trigger: 'blur' }
                ],
                zlRice: [
                    { validator: checkNum, trigger: 'blur' }
                ],
                jRice: [
                    { validator: checkNum, trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        submitForm() {
            if(this.ruleForm.indexType === 'g') { 
                if (this.ruleForm.riceType === 'candao') {
                    this.setGC();
                } else if (this.ruleForm.riceType === 'gengdao'){
                    this.setGG();
                }
            } else if (this.ruleForm.indexType === 'b') {
                if (this.ruleForm.riceType === 'candao') {
                    this.setBC();
                } else if (this.ruleForm.riceType === 'gengdao'){
                    this.setBG();
                }
            }
        },
        setGC() {
            const data = this.ruleForm;
            let arr = [];
            if (data.cRice >= 79) {
                arr.push(1);
            } else if (data.cRice >= 77) {
                arr.push(2);
            } else if (data.cRice >= 75) {
                arr.push(3);
            } else {
                arr.push(4);
            }
            if (data.zRice >= 56) {
                arr.push(1);
            } else if (data.zRice >= 54) {
                arr.push(2);
            } else if (data.zRice >= 52) {
                arr.push(3);
            } else {
                arr.push(4);
            }
            if (data.elRice <= 10) {
                arr.push(1);
            } else if (data.elRice <= 20) {
                arr.push(2);
            } else if (data.elRice <= 30) {
                arr.push(3);
            } else {
                arr.push(4);
            }
            if (data.eRice <= 1) {
                arr.push(1);
            } else if (data.eRice <= 3) {
                arr.push(2);
            } else if (data.eRice <= 5) {
                arr.push(3);
            } else {
                arr.push(4);
            }
            if (data.jRice >= 70) {
                arr.push(1);
            } else if (data.jRice >= 60) {
                arr.push(2);
            } else if (data.jRice >= 50) {
                arr.push(3);
            } else {
                arr.push(4);
            }
            const level = Math.max.apply(null,arr);
            if (level === 4) {
                this.$message.error('该籼稻不合格！');
                return;
            }
            if (data.zlRice < 15 || data.zlRice > 24) {
                this.$message.error('该籼稻不合格！');
                return;
            }
            if (data.zlRice === 15) {
                this.$message({
                    message: '该籼稻等级为:3级！',
                    type: 'success'
                });
                return;
            };
            this.$message({
                message:'该籼稻等级为:' + level + '级！',
                type: 'success'
            });
        },
        setGG() {
            const data = this.ruleForm;
            let arr = [];
            if (data.cRice >= 81) {
                arr.push(1);
            } else if (data.cRice >= 79) {
                arr.push(2);
            } else if (data.cRice >= 77) {
                arr.push(3);
            } else {
                arr.push(4);
            }
            if (data.zRice >= 66) {
                arr.push(1);
            } else if (data.zRice >= 64) {
                arr.push(2);
            } else if (data.zRice >= 62) {
                arr.push(3);
            } else {
                arr.push(4);
            }
            if (data.elRice <= 10) {
                arr.push(1);
            } else if (data.elRice <= 20) {
                arr.push(2);
            } else if (data.elRice <= 30) {
                arr.push(3);
            } else {
                arr.push(4);
            }
            if (data.eRice <= 1) {
                arr.push(1);
            } else if (data.eRice <= 3) {
                arr.push(2);
            } else if (data.eRice <= 5) {
                arr.push(3);
            } else {
                arr.push(4);
            }
            if (data.jRice >= 80) {
                arr.push(1);
            } else if (data.jRice >= 70) {
                arr.push(2);
            } else if (data.jRice >= 60) {
                arr.push(3);
            } else {
                arr.push(4);
            }
            const level = Math.max.apply(null,arr);
            if (level === 4) {
                this.$message.error('该粳稻不合格！');
                return;
            }
            if (data.zlRice < 15 || data.zlRice > 20) {
                this.$message.error('该粳稻不合格！');
                return;
            }
            this.$message({
                message:'该粳稻等级为:' + level + '级！',
                type: 'success'
            });
        },
        setBC() {
            const data = this.ruleForm;
            let arr = [];
            if (data.cRice >= 81) {
                arr.push(1);
            } else if (data.cRice >= 79) {
                arr.push(2);
            } else if (data.cRice >= 77) {
                arr.push(3);
            } else {
                arr.push(4);
            }
            if (data.zRice >= 58) {
                arr.push(1);
            } else if (data.zRice >= 55) {
                arr.push(2);
            } else if (data.zRice >= 52) {
                arr.push(3);
            } else {
                arr.push(4);
            }
            if (data.eRice <= 1) {
                arr.push(1);
            } else if (data.eRice <= 3) {
                arr.push(2);
            } else if (data.eRice <= 5) {
                arr.push(3);
            } else {
                arr.push(4);
            }
            if (data.jRice >= 70) {
                arr.push(1);
            } else if (data.jRice >= 60) {
                arr.push(3);
            } else {
                arr.push(4);
            }
            const level = Math.max.apply(null,arr);
            if (level === 4) {
                this.$message.error('该籼稻不合格！');
                return;
            }
            if (data.zlRice < 13 || data.zlRice > 22) {
                this.$message.error('该籼稻不合格！');
                return;
            }
            this.$message({
                message:'该籼稻等级为:' + level + '级！',
                type: 'success'
            });
        },
        setBG() {
            const data = this.ruleForm;
            let arr = [];
            if (data.cRice >= 83) {
                arr.push(1);
            } else if (data.cRice >= 81) {
                arr.push(2);
            } else if (data.cRice >= 79) {
                arr.push(3);
            } else {
                arr.push(4);
            }
            if (data.zRice >= 69) {
                arr.push(1);
            } else if (data.zRice >= 66) {
                arr.push(2);
            } else if (data.zRice >= 63) {
                arr.push(3);
            } else {
                arr.push(4);
            }
            if (data.eRice <= 1) {
                arr.push(1);
            } else if (data.eRice <= 3) {
                arr.push(2);
            } else if (data.eRice <= 5) {
                arr.push(3);
            } else {
                arr.push(4);
            }
            if (data.jRice >= 70) {
                arr.push(1);
            } else if (data.jRice >= 60) {
                arr.push(3);
            } else {
                arr.push(4);
            }
            const level = Math.max.apply(null,arr);
            if (level === 4) {
                this.$message.error('该粳稻不合格！');
                return;
            }
            if (data.zlRice < 13 || data.zlRice > 20) {
                this.$message.error('该粳稻不合格！');
                return;
            }
            this.$message({
                message:'该粳稻等级为:' + level + '级！',
                type: 'success'
            });
        }
    }
}
</script>
<style>
.pj-tab {
    margin: 15px;
}
</style>
