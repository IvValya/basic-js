const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
if (members instanceof Array) 
{
  let newlyname='';
  for (let i=0; i<members.length; i++)
  {
    let current_member=members[i];
    console.log(typeof current_member) //isNaN(members[i])&&!Array
     if ( (typeof current_member)== 'string')
    {
      current_member=current_member.trim();
       newlyname += current_member[0];
    }
  } 
  newlyname=newlyname.toUpperCase();
  return (newlyname.split('').sort().join(''));
}
else {
  return false;
}
}
createDreamTeam([
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
]);
module.exports = {
  createDreamTeam
};
