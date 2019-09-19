module.exports = function(config){
  Notification.requestPermission(function(permission){
    var notification = new Notification(
      'Acid Reflux',
      {
        body: config.body,
        icon:'',
        dir:'auto'
      }
    );
  });
};
