module.exports = (req, res, next) => {
    // Check if user is logged in and has a role property
    if (req.session.user && req.session.user.role === 'admin') {
      // Check if the current path starts with any of the restricted paths
      if (req.path.startsWith('/adminUsers') || req.path.startsWith('/cities') || req.path.startsWith('/users')) {
        return res.redirect('/admin');
      }
    }
  
    // Proceed to the next middleware or route handler
    next();
  };
  