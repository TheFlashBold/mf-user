const {Module} = require('mf-lib');
const {AccessControl} = require('role-acl');

class UserModule extends Module {
    accessControl = null;

    async init() {
        this.accessControl = new AccessControl();
        const roles = this.config.get('roles', {});
        Object.entries(roles).map(this.loadRole.bind(this));
    }

    loadRole([name, {can, extend}]) {
        const role = this.accessControl.grant(name);

        if (extend) {
            role.extend(extend);
        }

        for (const [resource, actions] of Object.entries(can)) {
            for (const action of actions) {
                role.execute(action).on(resource);
            }
        }
    }

    can(role, action, resource) {
        return this.accessControl.can(role).sync().execute(action).on(resource).granted;
    }
}

module.exports = UserModule;
