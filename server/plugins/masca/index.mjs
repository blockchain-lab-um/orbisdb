
export default class MascaPlugin {
  /**
   * This will initialize all of the hooks used by this plugin.
   * A plugin can register multiple hooks, each hook being linked to a function that will be executed when the hook is triggered
   */
  async init() {
    return {
      HOOKS: {
        "validate": (stream) => this.isValid(stream),
      },
    };
  }

  /** Will check if a valid credential is being saved */
  async isValid(stream) {
    
    // Check if issuer is in credential
    
    let validIssuer = false;
    let validSchema = false;
    if (!stream.content.issuer){
      console.log('failed at issuer')
      return false;
    }
    if(typeof stream.content.issuer === 'string') {
      if(stream.content.issuer === this.issuer)
        validIssuer = true;
    }
    else if(stream.content.issuer.id && stream.content.issuer.id === this.issuer)
    {
      validIssuer = true;
    }

    // Check if schema is in credential
    if (!stream.content.credentialSchema) {
      console.log('failed at schema')
      return false;
    }
    if(typeof stream.content.credentialSchema === 'string') {
      if(stream.content.credentialSchema === this.schema)
        validSchema = true;
    }
    else if(stream.content.credentialSchema.id && stream.content.credentialSchema.id === this.schema){
      validSchema = true;
  }

    return validIssuer && validSchema;
    
  }
}