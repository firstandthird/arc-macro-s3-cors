module.exports = function (arc, cloudformation, stage) {
  // @TODO: Read arc config for values
  cloudformation.Resources.StaticBucket.Properties.CORSRules = {
    AllowedHeaders: ['Authorization'],
    AllowedMethods: ['GET', 'HEAD'],
    AllowedOrigins: ['*'],
    MaxAgeSeconds: 3000
  };

  return cloudformation;
};