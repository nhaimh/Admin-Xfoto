
import Vue from "vue";
import "./extra/polyfills";
// Notifications plugin. Used on Notifications page
import Notifications from "@/components/NotificationPlugin";
// A plugin file where you could register global components used across the app
import "./globalComponents";
// A plugin file where you could register global directives
import "./globalDirectives";
// Sidebar on the right. Used as a local plugin in DashboardLayout.vue
import SideBar from "@/components/SidebarPlugin";
// RTL (right to left plugin to support rtl layout). If you don't need support for rtl, remove this plugin
import RTLPlugin from "./RTLPlugin";


// element ui language configuration
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
locale.use(lang);

Vue.use(RTLPlugin);
Vue.use(SideBar);
Vue.use(Notifications);
