
export default ({ app }, inject) => {
    const authorization = {
        roles: {
            Admin: {
                permissions: ["view", "edit", "delete", "create"],
            },
            Editor: {
                permissions: ["view", "edit", "create"],
            },
            User: {
                permissions: ["view"],
            },
        },
        hasPermission(role, permission) {
            if (this.roles[role] && this.roles[role].permissions.includes(permission)) {
                return true;
            } else if (permission === "view" && this.roles[role] && Object.keys(this.roles[role]).length === 1) {
                return true;
            } else {
                return false;
            }
        },
    };

    const role = app.$cookies.get('Role');
    inject('hasPermission', (permission) => {
        return authorization.hasPermission(role, permission);
    });
    authorization.hasPermission("Admin", "create")
};