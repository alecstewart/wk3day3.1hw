function validate(form) {

  var name = form.querySelector('#name'),
      email = form.querySelector('#email'),
      phone = form.querySelector('#phone'),
      comment = form.querySelector('#comment'),

      if (name.value.length < 2){
        return false
      }
      else if (phone.value.match(/\d/g) !== null && phone.value.match(/\d/g).length === 10){
        return false
      }
      else if (!email.value.includes('@') || !email.value.includes('.')){
        return false
      }
      else if (comment.value.length < 5 && comment.value.length !== 0){
        return false
      }
      else {
        return true
      }
}
