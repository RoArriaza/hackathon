import Rebase from 're-base';
import fire from './Firebase';

var base = Rebase.createClass(fire.database());

const addEvent = (userId, picture, name, email, place, description, tags) => {
  picture = 'asdasda';
  name = 'Carmela';
  email = 'carmela@vienesalaciudad.cl';
  place = 'La Ciudad';
  description = 'Vienes a la ciudad (8)';
  tags = 'asd, asfds, rtew, asew';
  base.post(`events/${userId}`, {
    data: {
      picture,
      name,
      email,
      place,
      description,
      tags
    },
    then(err) {
      if (!err) {
        console.log('success');
      }
    }
  })
}

export default addEvent;