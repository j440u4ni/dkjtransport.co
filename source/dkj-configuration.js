import bcrypt from 'bcryptjs';

const saltSync = bcrypt.genSaltSync(10, (error, salt) => { return salt; });
const jwtSecret = '$2b$10$LrCfIc4VmkY2J1Riij5yjOM4mCdFXZR8NW0/7Oob7kSrWNRIPodse';
const stripePublishable = 'pk_live_9WY2shJjiy2xcQsWLD26mxRK';

function slugify(string) {
    const a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;'
    const b = 'aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------'
    const p = new RegExp(a.split('').join('|'), 'g')
  
    return string.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text

}

export { saltSync, bcrypt, jwtSecret, stripePublishable, slugify };