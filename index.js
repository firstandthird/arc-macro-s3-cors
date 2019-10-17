module.exports = function (arc, cloudformation, stage) {
  // @TODO: Read arc config for values
  cloudformation.Resources.StaticBucket.Properties.CorsConfiguration = {
    CorsRules: [
      { 
        AllowedHeaders: ['Authorization'],
        AllowedMethods: ['GET', 'HEAD'],
        AllowedOrigins: ['*'],
        MaxAge: 3000
      }
    ]
  };

  return cloudformation;
};