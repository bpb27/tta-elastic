export const groupByPresident = data => {
  const presidents = {
    trump: [],
    obama: [],
    bush: [],
    clinton: [],
  };

  const trumpDate = new Date('2017-01-20');
  const obamaDate = new Date('2009-01-20');
  const bushDate = new Date('2001-01-20');
  const clintonDate = new Date('1993-01-20');

  data.forEach(item => {
    const date = new Date(item.x);
    if (date > trumpDate) {
      presidents.trump.push(item);
    } else if (date > obamaDate) {
      presidents.obama.push(item);
    } else if (date > bushDate) {
      presidents.bush.push(item);
    } else if (date > clintonDate) {
      presidents.clinton.push(item);
    }
  });

  return [
    { data: presidents.clinton, name: 'Clinton' },
    { data: presidents.bush, name: 'Bush' },
    { data: presidents.obama, name: 'Obama' },
    { data: presidents.trump, name: 'Trump' },
  ];
};
