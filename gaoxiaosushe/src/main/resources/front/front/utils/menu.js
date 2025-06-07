const menu = {
	list() {
		return [{
				"backMenu": [],
				"frontMenu": [],
				"hasBackLogin": "是",
				"hasBackRegister": "否",
				"hasFrontLogin": "否",
				"hasFrontRegister": "否",
				"roleName": "管理员",
				"tableName": "users"
			},
			{
				"backMenu": [{
						"child": [{
							"appFrontIcon": "cuIcon-form",
							"buttons": [
								"查看",
								"新增",
								"删除"
							],
							"menu": "报修",
							"menuJump": "列表",
							"tableName": "baoxiu"
						}],
						"menu": "报修"
					},
					{
						"child": [{
							"appFrontIcon": "cuIcon-form",
							"buttons": [
								"查看"
							],
							"menu": "公寓",
							"menuJump": "列表",
							"tableName": "fangwu"
						}],
						"menu": "公寓"
					},
					{
						"child": [{
							"appFrontIcon": "cuIcon-favor",
							"buttons": [
								"查看",
								"删除"
							],
							"menu": "公寓收藏",
							"menuJump": "列表",
							"tableName": "fangwuCollection"
						}],
						"menu": "公寓收藏"
					},
					{
						"child": [{
							"appFrontIcon": "cuIcon-form",
							"buttons": [
								"查看"
							],
							"menu": "公寓学生",
							"menuJump": "列表",
							"tableName": "fangwuRuzhu"
						}],
						"menu": "公寓学生"
					},
					{
						"child": [{
							"appFrontIcon": "cuIcon-form",
							"buttons": [
								"查看"
							],
							"menu": "公寓退宿申请",
							"menuJump": "列表",
							"tableName": "fangwuTuisu"
						}],
						"menu": "公寓退宿申请"
					},
					{
						"child": [{
							"appFrontIcon": "cuIcon-form",
							"buttons": [
								"查看"
							],
							"menu": "公寓入住申请",
							"menuJump": "列表",
							"tableName": "fangwuYuyue"
						}],
						"menu": "公寓入住申请"
					},
					{
						"child": [{
							"appFrontIcon": "cuIcon-form",
							"buttons": [
								"查看"
							],
							"menu": "调宿申请",
							"menuJump": "列表",
							"tableName": "tiaosushenqing"
						}],
						"menu": "调宿申请"
					},
					{
						"child": [{
							"appFrontIcon": "cuIcon-form",
							"buttons": [
								"查看"
							],
							"menu": "缴费",
							"menuJump": "列表",
							"tableName": "jiaofei"
						}],
						"menu": "缴费"
					},
					{
						"child": [{
							"appFrontIcon": "cuIcon-form",
							"buttons": [
								"查看",
								"新增",
								"删除"
							],
							"menu": "留言",
							"menuJump": "列表",
							"tableName": "liuyan"
						}],
						"menu": "留言"
					},
					{
						"child": [{
							"appFrontIcon": "cuIcon-form",
							"buttons": [
								"查看"
							],
							"menu": "卫生",
							"menuJump": "列表",
							"tableName": "weisheng"
						}],
						"menu": "卫生"
					},
					{
						"child": [{
								"appFrontIcon": "cuIcon-list",
								"buttons": [
									"查看"
								],
								"menu": "试卷列表",
								"tableName": "exampaper"
							},
							{
								"appFrontIcon": "cuIcon-footprint",
								"buttons": [
									"查看"
								],
								"menu": "测试记录",
								"tableName": "examrecord"
							}
						],
						"menu": "考试管理"
					}
				],
				"frontMenu": [],
				"hasBackLogin": "是",
				"hasBackRegister": "否",
				"hasFrontLogin": "是",
				"hasFrontRegister": "是",
				"roleName": "学生",
				"tableName": "yonghu"
			}
		]

	}
}
export default menu;
