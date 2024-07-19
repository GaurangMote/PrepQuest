const dashboard = async (req,res) => {
    const locals = {
        title : 'Get Questions',
        description: 'Interview',
    };

    res.render('dashboard/index',{
        locals,
        layout: '../views/layouts/dashboard',
    });
}

module.exports = {dashboard}