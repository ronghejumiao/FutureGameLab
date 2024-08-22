import router from "./router";
import { isMobile } from "./utils";
import { pcRoutes, mobileRoutes } from "./router";

// 判断当前设备的型号从而改变当前路由,遍历所有路由并加入router
// 注意：索引值为0的路由为默认路由（重定向路由）可以不用重复加入
isMobile()
    ? mobileRoutes.forEach((item,index) => {
        if (index === 0) return;
        router.addRoute(item);
    })
    : pcRoutes.forEach((item,index) =>{
        if (index === 0) return;
        router.addRoute(item);
    })
