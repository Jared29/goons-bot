const checkPermissionRole = (role) => role.permissions.has('ADMINISTRATOR') || 
                                      role.permissions.has('KICK_MEMBERS') || 
                                      role.permissions.has('BAN_MEMBERS') || 
                                      role.permissions.has('MANAGE_GUILD') || 
                                      role.permissions.has('MANAGE_CHANNELS') ||
                                      role.permissions.has('MANAGE_MESSAGES') || 
                                      role.permissions.has('MANAGE_ROLES');

module.exports.run = async(client, message, args) => {
    let roleNames = args.split(", ");
    let roleSet = new Set(roleNames);                             // Convert array to set to remove duplicates
    let { cache } = message.guild.roles;                          // Get all roles in guild

    roleSet.forEach(roleName => {
        let role = cache.find(role => role.name.toLowerCase() === roleName.toLowerCase());
        if(role) {
            if(message.member.roles.cache.has(role.id)) {
                message.channel.send("You already have this role.");
                return;
            }
            if (checkPermissionRole(role)) {
                message.channel.send("You cannot add this role.");
            }
            else {
                message.member.roles.add(role).catch(err => {
                    console.log(err)
                    message.channel.send("Something went wrong...");
                });
            }
        }
        else {
            message.channel.send("Role not found.");
        }
    });
}