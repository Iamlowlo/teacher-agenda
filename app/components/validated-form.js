import Ember from 'ember';

let validationObj = {
  'noEmpty' : {
                test : function(value){
                  if (value.length>0){ 
                    return true;
                  }else{
                    return false;
                  }
                },
                msg : 'This field can\'t be empty'
              },
  'justText' : {
                test : function(value){
                  if (value.match(/^[a-zA-ZáâæàåãäçéêèëíîìïñóôòøõöœúûùüÿÁÂÆÀÅÃÄÇÉÊÈËÍÎÌÏÑÓÔØÕÖŒßÚÛÙÜŸ\s]+$/)){ 
                    return true;
                  }else{
                    return false;
                  }
                },
                msg : 'This field only admits letters'
              },
  'justNumbers' : {
                test : function(value){
                  if (value.match(/^[0-9]+$/)){ 
                    return true;
                  }else{
                    return false;
                  }
                },
                msg : 'This field only admits numbers'
              }
};


export default Ember.Component.extend({
  actions : {
    validateAndSubmit(){
      let unvalidForm = false;
      // filter inner components to get only validated fileds
      let filteredFields = this.childViews.filter(function(childView){
        let viewName = childView.constructor.toString();
        viewName = viewName.substr(viewName.indexOf('@')+1);
        return viewName === 'component:validated-field:';
      });
      //loop through validated-fields
      filteredFields.forEach(function(validatedField){
        let value = validatedField.childViews[0].value;
        let unvalidField = false;
        let errorMsgs = [];
        //loop through required validation methods
        validatedField.get('validation').forEach(function(validation){
            if (!validationObj[validation].test(value)){
              errorMsgs.push(validationObj[validation].msg);
              unvalidField = unvalidForm = true;
            }
        });
        validatedField.set('isUnvalid',unvalidField);
        validatedField.set('errorMsgs',errorMsgs);
      });
      if (!unvalidForm) {
        this.sendAction('submit');
      }
    }
  }
});
