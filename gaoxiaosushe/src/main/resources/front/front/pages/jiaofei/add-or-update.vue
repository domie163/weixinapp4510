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
                      class="title">缴费编号</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.jiaofeiUuidNumber" type="text" v-model="ruleForm.jiaofeiUuidNumber" placeholder="缴费编号"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">缴费标题</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.jiaofeiName" type="text" v-model="ruleForm.jiaofeiName" placeholder="缴费标题"></input>
            </view>
                <view
                        :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(218, 220, 219, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"108rpx"}'
                        class="cu-form-group" @tap="jiaofeiPhotoTap">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">缴费附件</view>
                    <view class="right-input" style="padding:0;textAlign:left">
                        <image
                                :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-if="ruleForm.jiaofeiPhoto" :src="baseUrl+ruleForm.jiaofeiPhoto" mode="aspectFill">
                        </image>
                        <image  :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
                    </view>
                </view>
					                <view
                        :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                        class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">缴费金额</view>
                    <input   disabled
                             :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                             :disabled="ro.jiaofeiMoney" type="number" v-model="ruleForm.jiaofeiMoney" placeholder="缴费金额"></input>
                </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"210rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">缴费缘由</view>
                <textarea :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx","height":"200rpx"}'
                          :disabled="ro.jiaofeiContent" v-model="ruleForm.jiaofeiContent" placeholder="缴费缘由"/>
            </view>
                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">缴费状态</view>
                    <picker @change="jiaofeiTypesChange" :value="jiaofeiTypesIndex" :range="jiaofeiTypesOptions" range-key="indexName">
                        <view
                                :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.jiaofeiTypes?ruleForm.jiaofeiValue:"请选择缴费状态"}}</view>
                    </picker>
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
					yonghuId: false,
					susheguanliyuanId: false,
					jiaofeiUuidNumber: true,
					jiaofeiName: false,
					jiaofeiPhoto: false,
					jiaofeiMoney: false,
					jiaofeiContent: false,
					insertTime: false,
					jiaofeiTypes: false,
					createTime: false,
        },
            ruleForm: {
					yonghuId: '',
					susheguanliyuanId: '',
					jiaofeiUuidNumber: this.getUUID(),//数字
					jiaofeiName: '',
					jiaofeiPhoto: '',
					jiaofeiMoney: '',
					jiaofeiContent: '',
					insertTime: '',
					jiaofeiTypes: '',//数字
					jiaofeiValue: '',//数字对应的值
					createTime: '',
            },
            // 登陆用户信息
            user: {},
            jiaofeiTypesOptions: [],
            jiaofeiTypesIndex : 0,
            yonghuOptions: [],//学生
            yonghuIndex : 0,//学生下标
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
            let yonghuParams = {
                page: 1,
                limit: 100,
            }
            let yonghuData = await this.$api.page(`yonghu`, yonghuParams);
            this.yonghuOptions = yonghuData.data.list;
            let susheguanliyuanParams = {
                page: 1,
                limit: 100,
            }
            let susheguanliyuanData = await this.$api.page(`susheguanliyuan`, susheguanliyuanParams);
            this.susheguanliyuanOptions = susheguanliyuanData.data.list;
		/*下拉框*/
			let jiaofeiTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'jiaofei_types',
            }
			let jiaofeiTypes = await this.$api.page(`dictionary`, jiaofeiTypesParams);
			this.jiaofeiTypesOptions = jiaofeiTypes.data.list


            // 如果是更新操作
            if (options.id) {
                this.ruleForm.id = options.id;
                // 获取信息
                let res = await this.$api.info(`jiaofei`, this.ruleForm.id);
                this.ruleForm = res.data;
            }
            if(options.jiaofeiId){
                this.ruleForm.jiaofeiId = options.jiaofeiId;
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
            susheguanliyuanChange(e) {
                this.susheguanliyuanIndex = e.target.value
                this.ruleForm.susheguanliyuanName = this.susheguanliyuanOptions[this.susheguanliyuanIndex].susheguanliyuanName
                this.ruleForm.susheguanliyuanId = this.susheguanliyuanOptions[this.susheguanliyuanIndex].id
            },
            // 下拉变化
            jiaofeiTypesChange(e) {
                this.jiaofeiTypesIndex = e.target.value
                this.ruleForm.jiaofeiValue = this.jiaofeiTypesOptions[this.jiaofeiTypesIndex].indexName
                this.ruleForm.jiaofeiTypes = this.jiaofeiTypesOptions[this.jiaofeiTypesIndex].codeIndex
            },
            // styleChange() {
            // 	this.$nextTick(() => {
            // 		// document.querySelectorAll('.app-update-pv .cu-form-group .uni-yaoxianStyle-yaoxianStyle').forEach(el=>{
            // 		//   el.style.backgroundColor = this.addUpdateForm.yaoxianStyle.content.backgroundColor
            // 		// })
            // 	})
            // },
			jiaofeiPhotoTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.jiaofeiPhoto = 'upload/' + res.file;
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
				if ((!this.ruleForm.jiaofeiUuidNumber)) {
                    this.$utils.msg(`缴费编号不能为空`);
                    return
                }
				if ((!this.ruleForm.jiaofeiName)) {
                    this.$utils.msg(`缴费标题不能为空`);
                    return
                }
				if ((!this.ruleForm.jiaofeiPhoto)) {
                    this.$utils.msg(`缴费附件不能为空`);
                    return
                }
				if ((!this.ruleForm.jiaofeiMoney) && (!this.$validate.isNumber(this.ruleForm.jiaofeiMoney)) && this.ruleForm.jiaofeiMoney >0) {
                    this.$utils.msg(`缴费金额不能为空，不能小于0 格式为数字或小数`);
                    return
                }
                // if(uni.getStorageSync('详情页传过来的Id')){
                //     this.ruleForm.zhuangxiuId = uni.getStorageSync('详情页传过来的Id')
                // }

                if (this.ruleForm.id) {
                    await this.$api.update(`jiaofei`, this.ruleForm);
                } else {
                    await this.$api.save(`jiaofei`, this.ruleForm);
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