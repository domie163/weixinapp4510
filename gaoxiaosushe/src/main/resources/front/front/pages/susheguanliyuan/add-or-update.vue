<template>
    <view class="content">
        <form class="app-update-pv">
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">账户</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.username" type="text" v-model="ruleForm.username" placeholder="账户"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">工号</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.susheguanliyuanUuidNumber" type="text" v-model="ruleForm.susheguanliyuanUuidNumber" placeholder="工号"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">宿舍管理员姓名</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.susheguanliyuanName" type="text" v-model="ruleForm.susheguanliyuanName" placeholder="宿舍管理员姓名"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">宿舍管理员手机号</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.susheguanliyuanPhone" type="text" v-model="ruleForm.susheguanliyuanPhone" placeholder="宿舍管理员手机号"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">宿舍管理员身份证号</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.susheguanliyuanIdNumber" type="text" v-model="ruleForm.susheguanliyuanIdNumber" placeholder="宿舍管理员身份证号"></input>
            </view>
                <view
                        :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(218, 220, 219, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"108rpx"}'
                        class="cu-form-group" @tap="susheguanliyuanPhotoTap">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">宿舍管理员头像</view>
                    <view class="right-input" style="padding:0;textAlign:left">
                        <image
                                :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-if="ruleForm.susheguanliyuanPhoto" :src="baseUrl+ruleForm.susheguanliyuanPhoto" mode="aspectFill">
                        </image>
                        <image  :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
                    </view>
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
                      class="title">宿舍管理员邮箱</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.susheguanliyuanEmail" type="text" v-model="ruleForm.susheguanliyuanEmail" placeholder="宿舍管理员邮箱"></input>
            </view>
                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">账户状态</view>
                    <picker @change="jinyongTypesChange" :value="jinyongTypesIndex" :range="jinyongTypesOptions" range-key="indexName">
                        <view
                                :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.jinyongTypes?ruleForm.jinyongValue:"请选择账户状态"}}</view>
                    </picker>
                </view>

            <view class="btn">
                <button
                        :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"var(--publicMainColor)","borderColor":"#409EFF","borderRadius":"8rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"0","width":"70%","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}'
                        @tap="onSubmitTap" class="bg-red">提交</button>
            </view>
        </form>

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
					username: false,
					password: false,
					susheguanliyuanUuidNumber: true,
					susheguanliyuanName: false,
					susheguanliyuanPhone: false,
					susheguanliyuanIdNumber: false,
					susheguanliyuanPhoto: false,
					sexTypes: false,
					susheguanliyuanEmail: false,
					jinyongTypes: false,
					createTime: false,
        },
            ruleForm: {
					username: '',
					password: '',
					susheguanliyuanUuidNumber: this.getUUID(),//数字
					susheguanliyuanName: '',
					susheguanliyuanPhone: '',
					susheguanliyuanIdNumber: '',
					susheguanliyuanPhoto: '',
					sexTypes: '',//数字
					sexValue: '',//数字对应的值
					susheguanliyuanEmail: '',
					jinyongTypes: '',//数字
					jinyongValue: '',//数字对应的值
					createTime: '',
            },
            // 登陆用户信息
            user: {},
            sexTypesOptions: [],
            sexTypesIndex : 0,
            jinyongTypesOptions: [],
            jinyongTypesIndex : 0,

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
		/*下拉框*/
			let sexTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'sex_types',
            }
			let sexTypes = await this.$api.page(`dictionary`, sexTypesParams);
			this.sexTypesOptions = sexTypes.data.list
		/*下拉框*/
			let jinyongTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'jinyong_types',
            }
			let jinyongTypes = await this.$api.page(`dictionary`, jinyongTypesParams);
			this.jinyongTypesOptions = jinyongTypes.data.list


            // 如果是更新操作
            if (options.id) {
                this.ruleForm.id = options.id;
                // 获取信息
                let res = await this.$api.info(`susheguanliyuan`, this.ruleForm.id);
                this.ruleForm = res.data;
            }
            if(options.susheguanliyuanId){
                this.ruleForm.susheguanliyuanId = options.susheguanliyuanId;
            }
            // 跨表
            // this.styleChange()
        },
        methods: {
            // 下拉变化
            sexTypesChange(e) {
                this.sexTypesIndex = e.target.value
                this.ruleForm.sexValue = this.sexTypesOptions[this.sexTypesIndex].indexName
                this.ruleForm.sexTypes = this.sexTypesOptions[this.sexTypesIndex].codeIndex
            },
            jinyongTypesChange(e) {
                this.jinyongTypesIndex = e.target.value
                this.ruleForm.jinyongValue = this.jinyongTypesOptions[this.jinyongTypesIndex].indexName
                this.ruleForm.jinyongTypes = this.jinyongTypesOptions[this.jinyongTypesIndex].codeIndex
            },
            // styleChange() {
            // 	this.$nextTick(() => {
            // 		// document.querySelectorAll('.app-update-pv .cu-form-group .uni-yaoxianStyle-yaoxianStyle').forEach(el=>{
            // 		//   el.style.backgroundColor = this.addUpdateForm.yaoxianStyle.content.backgroundColor
            // 		// })
            // 	})
            // },
			susheguanliyuanPhotoTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.susheguanliyuanPhoto = 'upload/' + res.file;
                    _this.$forceUpdate();
                    _this.$nextTick(() => {
                        // _this.styleChange()
                    })
                });
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
				if ((!this.ruleForm.username)) {
                    this.$utils.msg(`账户不能为空`);
                    return
                }
				if ((!this.ruleForm.susheguanliyuanUuidNumber)) {
                    this.$utils.msg(`工号不能为空`);
                    return
                }
				if ((!this.ruleForm.susheguanliyuanName)) {
                    this.$utils.msg(`宿舍管理员姓名不能为空`);
                    return
                }
				if ((!this.ruleForm.susheguanliyuanPhone) && (!this.$validate.isMobile(this.ruleForm.susheguanliyuanPhone))) {
                    this.$utils.msg(`宿舍管理员手机号不能为空并且需要输入正确格式`);
                    return
                }
				if ((!this.ruleForm.susheguanliyuanIdNumber) && (!this.$validate.checkIdCard(this.ruleForm.susheguanliyuanIdNumber))) {
                    this.$utils.msg(`宿舍管理员身份证号不能为空并且需要输入正确格式`);
                    return
                }
				if ((!this.ruleForm.susheguanliyuanPhoto)) {
                    this.$utils.msg(`宿舍管理员头像不能为空`);
                    return
                }
				if ((!this.ruleForm.sexTypes)) {
                    this.$utils.msg(`性别不能为空`);
                    return
                }
				if ((!this.ruleForm.susheguanliyuanEmail) && (!this.$validate.isEmail(this.ruleForm.susheguanliyuanEmail))) {
                    this.$utils.msg(`宿舍管理员邮箱不能为空并且需要输入正确格式`);
                    return
                }
				if ((!this.ruleForm.jinyongTypes)) {
                    this.$utils.msg(`账户状态不能为空`);
                    return
                }
                // if(uni.getStorageSync('详情页传过来的Id')){
                //     this.ruleForm.zhuangxiuId = uni.getStorageSync('详情页传过来的Id')
                // }

                if (this.ruleForm.id) {
                    await this.$api.update(`susheguanliyuan`, this.ruleForm);
                } else {
                    await this.$api.save(`susheguanliyuan`, this.ruleForm);
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