<template>
    <view class="content">
        <form class="app-update-pv">
                <!--<view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">学生</view>
                    <picker @change="yonghuChange" :value="yonghuIndex" :range="yonghuOptions" range-key="yonghuName">
                        <view
                                :style='{"padding":"0 30rpx","boxShadow":"0 0 16rpx var(--publicSubColor) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"var(--publicMainColor)","borderRadius":"20rpx","color":"var(--publicMainColor)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.yonghuId?ruleForm.yonghuName:"请选择学生"}}</view>
                    </picker>
                </view>-->
                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">要去公寓</view>
                    <picker @change="fangwuChange" :value="fangwuIndex" :range="fangwuOptions" range-key="fangwuName">
                        <view
                                :style='{"padding":"0 30rpx","boxShadow":"0 0 16rpx var(--publicSubColor) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"var(--publicMainColor)","borderRadius":"20rpx","color":"var(--publicMainColor)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.fangwuId?ruleForm.fangwuName:"请选择要去公寓"}}</view>
                    </picker>
                </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">调宿申请编号</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.tiaosushenqingUuidNumber" type="text" v-model="ruleForm.tiaosushenqingUuidNumber" placeholder="调宿申请编号"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">申请标题</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.tiaosushenqingName" type="text" v-model="ruleForm.tiaosushenqingName" placeholder="申请标题"></input>
            </view>
                <view
                        :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(218, 220, 219, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"108rpx"}'
                        class="cu-form-group" @tap="tiaosushenqingFileTap">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">申请附件</view>
                    <view class="right-input" style="padding:0;textAlign:left">
                        <image
                                :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-if="ruleForm.tiaosushenqingFile" :src="baseUrl+ruleForm.tiaosushenqingFile" mode="aspectFill">
                        </image>
                        <image  :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
                    </view>
                </view>
					                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">调宿申请类型</view>
                    <picker @change="tiaosushenqingTypesChange" :value="tiaosushenqingTypesIndex" :range="tiaosushenqingTypesOptions" range-key="indexName">
                        <view
                                :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.tiaosushenqingTypes?ruleForm.tiaosushenqingValue:"请选择调宿申请类型"}}</view>
                    </picker>
                </view>
            <!-- <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">原宿舍名称</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.tiaosushenqingYuanName" type="text" v-model="ruleForm.tiaosushenqingYuanName" placeholder="原宿舍名称"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">原宿舍位置</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.tiaosushenqingYuanAddress" type="text" v-model="ruleForm.tiaosushenqingYuanAddress" placeholder="原宿舍位置"></input>
            </view> -->
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"210rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">申请缘由</view>
                <textarea :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx","height":"200rpx"}'
                          :disabled="ro.tiaosushenqingContent" v-model="ruleForm.tiaosushenqingContent" placeholder="申请缘由"/>
            </view>

            <view class="btn">
                <button
                        :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"var(--publicMainColor)","borderColor":"#409EFF","borderRadius":"8rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"0","width":"70%","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}'
                        @tap="onSubmitTap" class="bg-red">提交</button>
            </view>
        </form>

					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="insertTimeConfirm"
                              ref="insertTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="tiaosushenqingShenheTimeConfirm"
                              ref="tiaosushenqingShenheTime" themeColor="#333333"></w-picker>
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
					yonghuId: false,
					fangwuId: false,
					tiaosushenqingUuidNumber: true,
					tiaosushenqingName: false,
					tiaosushenqingFile: false,
					tiaosushenqingTypes: false,
					tiaosushenqingYuanName: false,
					tiaosushenqingYuanAddress: false,
					tiaosushenqingContent: false,
					insertTime: false,
					tiaosushenqingYesnoTypes: false,
					tiaosushenqingYesnoText: false,
					tiaosushenqingShenheTime: false,
					createTime: false,
        },
            ruleForm: {
					yonghuId: '',
					fangwuId: '',
					tiaosushenqingUuidNumber: this.getUUID(),//数字
					tiaosushenqingName: '',
					tiaosushenqingFile: '',
					tiaosushenqingTypes: '',//数字
					tiaosushenqingValue: '',//数字对应的值
					tiaosushenqingYuanName: '',
					tiaosushenqingYuanAddress: '',
					tiaosushenqingContent: '',
					insertTime: '',
					tiaosushenqingYesnoTypes: '',//数字
					tiaosushenqingYesnoValue: '',//数字对应的值
					tiaosushenqingYesnoText: '',
					tiaosushenqingShenheTime: '',
					createTime: '',
            },
            // 登陆用户信息
            user: {},
            tiaosushenqingTypesOptions: [],
            tiaosushenqingTypesIndex : 0,
            tiaosushenqingYesnoTypesOptions: [],
            tiaosushenqingYesnoTypesIndex : 0,
            yonghuOptions: [],//学生
            yonghuIndex : 0,//学生下标
            fangwuOptions: [],//公寓
            fangwuIndex : 0,//公寓下标

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
            let yonghuParams = {
                page: 1,
                limit: 100,
            }
            let yonghuData = await this.$api.page(`yonghu`, yonghuParams);
            this.yonghuOptions = yonghuData.data.list;
            let fangwuParams = {
                page: 1,
                limit: 100,
            }
            let fangwuData = await this.$api.page(`fangwu`, fangwuParams);
            this.fangwuOptions = fangwuData.data.list;
		/*下拉框*/
			let tiaosushenqingTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'tiaosushenqing_types',
            }
			let tiaosushenqingTypes = await this.$api.page(`dictionary`, tiaosushenqingTypesParams);
			this.tiaosushenqingTypesOptions = tiaosushenqingTypes.data.list
		/*下拉框*/
			let tiaosushenqingYesnoTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'tiaosushenqing_yesno_types',
            }
			let tiaosushenqingYesnoTypes = await this.$api.page(`dictionary`, tiaosushenqingYesnoTypesParams);
			this.tiaosushenqingYesnoTypesOptions = tiaosushenqingYesnoTypes.data.list


            // 如果是更新操作
            if (options.id) {
                this.ruleForm.id = options.id;
                // 获取信息
                let res = await this.$api.info(`tiaosushenqing`, this.ruleForm.id);
                this.ruleForm = res.data;
            }
            if(options.tiaosushenqingId){
                this.ruleForm.tiaosushenqingId = options.tiaosushenqingId;
            }
            // 跨表
            // this.styleChange()
        },
        methods: {
            yonghuChange(e) {
                this.yonghuIndex = e.target.value
                this.ruleForm.yonghuName = this.yonghuOptions[this.yonghuIndex].yonghuName
                this.ruleForm.yonghuId = this.yonghuOptions[this.yonghuIndex].id
            },
            fangwuChange(e) {
                this.fangwuIndex = e.target.value
                this.ruleForm.fangwuName = this.fangwuOptions[this.fangwuIndex].fangwuName
                this.ruleForm.fangwuId = this.fangwuOptions[this.fangwuIndex].id
            },
            // 下拉变化
            tiaosushenqingTypesChange(e) {
                this.tiaosushenqingTypesIndex = e.target.value
                this.ruleForm.tiaosushenqingValue = this.tiaosushenqingTypesOptions[this.tiaosushenqingTypesIndex].indexName
                this.ruleForm.tiaosushenqingTypes = this.tiaosushenqingTypesOptions[this.tiaosushenqingTypesIndex].codeIndex
            },
            tiaosushenqingYesnoTypesChange(e) {
                this.tiaosushenqingYesnoTypesIndex = e.target.value
                this.ruleForm.tiaosushenqingYesnoValue = this.tiaosushenqingYesnoTypesOptions[this.tiaosushenqingYesnoTypesIndex].indexName
                this.ruleForm.tiaosushenqingYesnoTypes = this.tiaosushenqingYesnoTypesOptions[this.tiaosushenqingYesnoTypesIndex].codeIndex
            },
            // styleChange() {
            // 	this.$nextTick(() => {
            // 		// document.querySelectorAll('.app-update-pv .cu-form-group .uni-yaoxianStyle-yaoxianStyle').forEach(el=>{
            // 		//   el.style.backgroundColor = this.addUpdateForm.yaoxianStyle.content.backgroundColor
            // 		// })
            // 	})
            // },
			tiaosushenqingFileTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.tiaosushenqingFile = 'upload/' + res.file;
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
			tiaosushenqingShenheTimeConfirm(val) {
                this.ruleForm.tiaosushenqingShenheTime = val.result;
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
				if ((!this.ruleForm.tiaosushenqingUuidNumber)) {
                    this.$utils.msg(`调宿申请编号不能为空`);
                    return
                }
				if ((!this.ruleForm.tiaosushenqingName)) {
                    this.$utils.msg(`申请标题不能为空`);
                    return
                }
				// if ((!this.ruleForm.tiaosushenqingYuanName)) {
    //                 this.$utils.msg(`原宿舍名称不能为空`);
    //                 return
    //             }
				// if ((!this.ruleForm.tiaosushenqingYuanAddress)) {
    //                 this.$utils.msg(`原宿舍位置不能为空`);
    //                 return
    //             }
                // if(uni.getStorageSync('详情页传过来的Id')){
                //     this.ruleForm.zhuangxiuId = uni.getStorageSync('详情页传过来的Id')
                // }

                if (this.ruleForm.id) {
                    await this.$api.update(`tiaosushenqing`, this.ruleForm);
                } else {
                    await this.$api.save(`tiaosushenqing`, this.ruleForm);
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