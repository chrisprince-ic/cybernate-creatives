const some = () => {
  const data = {
    some: ['herny', 'henry'],
  };

  const newData = data;

  return { data: newData };
};

const { data } = some();

const someThing = '';

console.log(data);

/* when we return like an object from a function and do the thing */
/* like this return {something : thisThing} this is assignement */
/* above we are assigning something to thisThing however */
/* this const {something:thing} = fromThing it is renaming */
/* here we are renaming something to thing */

/* the renaming thing is done when extracting properties from an object */
