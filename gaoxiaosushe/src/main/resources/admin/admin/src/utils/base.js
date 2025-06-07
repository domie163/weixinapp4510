const base = {
    get() {
        return {
            url : "http://localhost:8080/gaoxiaosushe/",
            name: "gaoxiaosushe",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gaoxiaosushe/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "高校宿舍信息管理系统小程序"
        } 
    }
}
export default base
