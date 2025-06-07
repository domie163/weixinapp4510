<template>
    <view class="content">
        <form class="app-update-pv">
                <!--<view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">宿舍管理员</view>
                    <picker @change="susheguanliyuanChange" :value="susheguanliyuanIndex" :range="susheguanliyuanOptions" range-key="susheguanliyuanName">
                        <view
                                :style='{"padding":"0 30rpx","boxShadow":"0 0 16rpx var(--publicSubColor) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"var(--publicMainColor)","borderRadius":"20rpx","color":"var(--publicMainColor)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.susheguanliyuanId?ruleForm.susheguanliyuanName:"请选择宿舍管理员"}}</view>
                    </picker>
                </view>-->
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">房屋名称</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.fangwuName" type="text" v-model="ruleForm.fangwuName" placeholder="房屋名称"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">公寓编号</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.fangwuUuidNumber" type="text" v-model="ruleForm.fangwuUuidNumber" placeholder="公寓编号"></input>
            </view>
                <view
                        :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(218, 220, 219, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"108rpx"}'
                        class="cu-form-group" @tap="fangwuPhotoTap">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">公寓照片</view>
                    <view class="right-input" style="padding:0;textAlign:left">
                        <image
                                :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-if="ruleForm.fangwuPhoto" :src="baseUrl+ruleForm.fangwuPhoto" mode="aspectFill">
                        </image>
                        <image  :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
                    </view>
                </view>
					            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">房屋位置</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.fangwuAddress" type="text" v-model="ruleForm.fangwuAddress" placeholder="房屋位置"></input>
            </view>
                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">公寓类型</view>
                    <picker @change="fangwuTypesChange" :value="fangwuTypesIndex" :range="fangwuTypesOptions" range-key="indexName">
                        <view
                                :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.fangwuTypes?ruleForm.fangwuValue:"请选择公寓类型"}}</view>
                    </picker>
                </view>
                <view
                        :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                        class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">房租/月</view>
                    <input   disabled
                             :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                             :disabled="ro.fangwuNewMoney" type="number" v-model="ruleForm.fangwuNewMoney" placeholder="房租/月"></input>
                </view>
                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">性别</view>
                    <picker @change="sexTypesChange" :value="sexTypesIndex" :range="sexTypesOptions" range-key="indexName">
                        <view
                                :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.sexTypes?ruleForm.sexValue:"请选择性别"}}</view>
                    </picker>
                </view>
                <view
                        :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                        class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">限制人数</view>
                    <input   disabled
                             :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                             :disabled="ro.fangwuRenshu" type="number" v-model="ruleForm.fangwuRenshu" placeholder="限制人数"></input>
                </view>
                <view
                        :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                        class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">已住人数</view>
                    <input   disabled
                             :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                             :disabled="ro.fangwuYizhurenshu" type="number" v-model="ruleForm.fangwuYizhurenshu" placeholder="已住人数"></input>
                </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"210rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">公寓介绍</view>
                <textarea :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx","height":"200rpx"}'
                          :disabled="ro.fangwuContent" v-model="ruleForm.fangwuContent" placeholder="公寓介绍"/>
            </view>

            <view class="btn">
                <button
                        :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"var(--publicMainColor)","borderColor":"#409EFF","borderRadius":"8rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"0","width":"70%","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}'
                        @tap="onSubmitTap" class="bg-red">提交</button>
            </view>
        </form>

					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="insertTimeConfirm"
                              ref="insertTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="createTimeConfirm"
                              ref="createTime" themeColor="#333333"></w-picker>


    </view>
</template>

<script>
    import wPicker from "@/components/w-picker/w-picker.vue";

    export default {
        data() {
            return {
                cross: '',
                ro:{
					susheguanliyuanId: false,
					fangwuName: false,
					fangwuUuidNumber: true,
					fangwuPhoto: false,
					fangwuAddress: false,
					fangwuTypes: false,
					fangwuNewMoney: false,
					sexTypes: false,
					fangwuRenshu: false,
					fangwuYizhurenshu: false,
					fangwuContent: false,
					shangxiaTypes: false,
					fangwuDelete: false,
					insertTime: false,
					createTime: false,
        },
            ruleForm: {
					susheguanliyuanId: '',
					fangwuName: '',
					fangwuUuidNumber: this.getUUID(),//数字
					fangwuPhoto: '',
					fangwuAddress: '',
					fangwuTypes: '',//数字
					fangwuValue: '',//数字对应的值
					fangwuNewMoney: '',
					sexTypes: '',//数字
					sexValue: '',//数字对应的值
					fangwuRenshu: '',
					fangwuYizhurenshu: '',
					fangwuContent: '',
					shangxiaTypes: '',//数字
					shangxiaValue: '',//数字对应的值
					fangwuDelete: '',
					insertTime: '',
					createTime: '',
            },
            // 登陆用户信息
            user: {},
            fangwuTypesOptions: [],
            fangwuTypesIndex : 0,
            sexTypesOptions: [],
            sexTypesIndex : 0,
            shangxiaTypesOptions: [],
            shangxiaTypesIndex : 0,
            susheguanliyuanOptions: [],//宿舍管理员
            susheguanliyuanIndex : 0,//宿舍管理员下标

        }
        },
        components: {
            wPicker
        },
        computed: {
            baseUrl() {
                return this.$base.url;
            },
        },
        async onLoad(options) {
            let susheguanliyuanParams = {
                page: 1,
                limit: 100,
            }
            let susheguanliyuanData = await this.$api.page(`susheguanliyuan`, susheguanliyuanParams);
            this.susheguanliyuanOptions = susheguanliyuanData.data.list;
		/*下拉框*/
			let fangwuTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'fangwu_types',
            }
			let fangwuTypes = await this.$api.page(`dictionary`, fangwuTypesParams);
			this.fangwuTypesOptions = fangwuTypes.data.list
		/*下拉框*/
			let sexTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'sex_types',
            }
			let sexTypes = await this.$api.page(`dictionary`, sexTypesParams);
			this.sexTypesOptions = sexTypes.data.list
		/*下拉框*/
			let shangxiaTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'shangxia_types',
            }
			let shangxiaTypes = await this.$api.page(`dictionary`, shangxiaTypesParams);
			this.shangxiaTypesOptions = shangxiaTypes.data.list


            // 如果是更新操作
            if (options.id) {
                this.ruleForm.id = options.id;
                // 获取信息
                let res = await this.$api.info(`fangwu`, this.ruleForm.id);
                this.ruleForm = res.data;
            }
            if(options.fangwuId){
                this.ruleForm.fangwuId = options.fangwuId;
            }
            // 跨表
            // this.styleChange()
        },
        methods: {
            susheguanliyuanChange(e) {
                this.susheguanliyuanIndex = e.target.value
                this.ruleForm.susheguanliyuanName = this.susheguanliyuanOptions[this.susheguanliyuanIndex].susheguanliyuanName
                this.ruleForm.susheguanliyuanId = this.susheguanliyuanOptions[this.susheguanliyuanIndex].id
            },
            // 下拉变化
            fangwuTypesChange(e) {
                this.fangwuTypesIndex = e.target.value
                this.ruleForm.fangwuValue = this.fangwuTypesOptions[this.fangwuTypesIndex].indexName
                this.ruleForm.fangwuTypes = this.fangwuTypesOptions[this.fangwuTypesIndex].codeIndex
            },
            sexTypesChange(e) {
                this.sexTypesIndex = e.target.value
                this.ruleForm.sexValue = this.sexTypesOptions[this.sexTypesIndex].indexName
                this.ruleForm.sexTypes = this.sexTypesOptions[this.sexTypesIndex].codeIndex
            },
            shangxiaTypesChange(e) {
                this.shangxiaTypesIndex = e.target.value
                this.ruleForm.shangxiaValue = this.shangxiaTypesOptions[this.shangxiaTypesIndex].indexName
                this.ruleForm.shangxiaTypes = this.shangxiaTypesOptions[this.shangxiaTypesIndex].codeIndex
            },
            // styleChange() {
            // 	this.$nextTick(() => {
            // 		// document.querySelectorAll('.app-update-pv .cu-form-group .uni-yaoxianStyle-yaoxianStyle').forEach(el=>{
            // 		//   el.style.backgroundColor = this.addUpdateForm.yaoxianStyle.content.backgroundColor
            // 		// })
            // 	})
            // },
			fangwuPhotoTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.fangwuPhoto = 'upload/' + res.file;
                    _this.$forceUpdate();
                    _this.$nextTick(() => {
                        // _this.styleChange()
                    })
                });
            },
			// 日期控件
			insertTimeConfirm(val) {
                this.ruleForm.insertTime = val.result;
                this.$forceUpdate();
            },
			// 日期控件
			createTimeConfirm(val) {
                this.ruleForm.createTime = val.result;
                this.$forceUpdate();
            },

            getUUID() {
                return new Date().getTime();
            },
            async onSubmitTap() {
				if ((!this.ruleForm.fangwuName)) {
                    this.$utils.msg(`房屋名称不能为空`);
                    return
                }
				if ((!this.ruleForm.fangwuUuidNumber)) {
                    this.$utils.msg(`公寓编号不能为空`);
                    return
                }
				if ((!this.ruleForm.fangwuPhoto)) {
                    this.$utils.msg(`公寓照片不能为空`);
                    return
                }
				if ((!this.ruleForm.fangwuAddress)) {
                    this.$utils.msg(`房屋位置不能为空`);
                    return
                }
				if ((!this.ruleForm.sexTypes)) {
                    this.$utils.msg(`性别不能为空`);
                    return
                }
				if ((!this.ruleForm.fangwuRenshu) && (!this.$validate.isIntNumer(this.ruleForm.fangwuRenshu)) && this.ruleForm.fangwuRenshu >0) {
                    this.$utils.msg(`限制人数不能为空，不能小于0 格式为数字`);
                    return
                }
				if ((!this.ruleForm.fangwuYizhurenshu) && (!this.$validate.isIntNumer(this.ruleForm.fangwuYizhurenshu)) && this.ruleForm.fangwuYizhurenshu >0) {
                    this.$utils.msg(`已住人数不能为空，不能小于0 格式为数字`);
                    return
                }
                // if(uni.getStorageSync('详情页传过来的Id')){
                //     this.ruleForm.zhuangxiuId = uni.getStorageSync('详情页传过来的Id')
                // }

                if (this.ruleForm.id) {
                    await this.$api.update(`fangwu`, this.ruleForm);
                } else {
                    await this.$api.save(`fangwu`, this.ruleForm);
                }
                uni.setStorageSync('pingluenStateState', true);
                this.$utils.msgBack('提交成功');
            },
            getDate(type) {
                const date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let day = date.getDate();
                if (type === 'start') {
                    year = year - 60;
                } else if (type === 'end') {
                    year = year + 2;
                }
                month = month > 9 ? month : '0' + month;;
                day = day > 9 ? day : '0' + day;
                return `${year}-${month}-${day}`;
            },
            toggleTab(str) {
                this.$refs[str].show();
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        padding: 20upx;
    }

    .content:after {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        content: '';
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
    }

    textarea {
        border: 1upx solid #EEEEEE;
        border-radius: 20upx;
        padding: 20upx;
    }

    .title {
        width: 180upx;
    }

    .avator {
        width: 150upx;
        height: 60upx;
    }

    .right-input {
        flex: 1;
        text-align: left;
        padding: 0 24upx;
    }

    .cu-form-group.active {
        justify-content: space-between;
    }

    .cu-form-group .title {
        height: auto;
        line-height:30rpx
    }

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20upx 0;
    }

    .cu-form-group {
        padding: 0 24upx;
        background-color: transparent;
        min-height: inherit;
    }

    .cu-form-group+.cu-form-group {
        border: 0;
    }

    .cu-form-group uni-input {
        padding: 0 30upx;
    }

    .uni-input {
        padding: 0 30upx;
    }

    .cu-form-group uni-textarea {
        padding: 30upx;
        margin: 0;
    }

    .cu-form-group uni-picker::after {
        line-height: 80rpx;
    }

    .select .uni-input {
        line-height: 80rpx;
    }

    .input .right-input {
        line-height: 88rpx;
    }
</style>