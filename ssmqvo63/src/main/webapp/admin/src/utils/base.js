const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmqvo63/",
            name: "ssmqvo63",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmqvo63/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "高校学生实习管理系统"
        } 
    }
}
export default base
