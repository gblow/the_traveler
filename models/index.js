const User = require('./User');
const Location = require('./Location');
const BlogPost = require('./BlogPost');
const Image = require('./Image');

User.hasMany(Location, {
    foreignKey: 'location_id'
});

User.hasMany(BlogPost, {
    foreignKey: 'blogPost_id',
    onDelete: 'CASCADE',
});

User.hasMany(Image, {
    foreignKey: 'image_id'
})

BlogPost.hasOne(Location, {
    foreignkey: 'location_id'
})

BlogPost.hasOne(Image, {
    foreignKey: 'image_id'
})

BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Location, BlogPost, Image };