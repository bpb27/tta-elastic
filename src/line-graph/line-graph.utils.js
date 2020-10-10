export const demBlueCurrent = '#3799f1';
export const repRedCurrent = '#d30002';
export const demBluePast = '#cde6fc';
export const repRedPast = '#f3bbb8';

export const groupByPresident = data => {
  const presidents = {
    trump: [],
    obama: [],
    bushTwo: [],
    clinton: [],
    bushOne: [],
    reagan: [],
    carter: [],
    nixon: [],
    johnson: [],
    kennedy: [],
    eisenhower: [],
    truman: [],
  };

  const trumpDate = new Date('2017-01-20');
  const obamaDate = new Date('2009-01-20');
  const bushTwoDate = new Date('2001-01-20');
  const clintonDate = new Date('1993-01-20');
  const bushOneDate = new Date('1989-01-20');
  const reaganDate = new Date('1981-01-20');
  const carterDate = new Date('1977-01-20');
  const nixonDate = new Date('1969-01-20');
  const johnsonDate = new Date('1964-01-20');
  const kennedyDate = new Date('1961-01-20');
  const eisenhowerDate = new Date('1953-01-20');
  const trumanDate = new Date('1945-01-20');

  data.forEach(item => {
    const date = new Date(item.x);
    if (date > trumpDate) {
      presidents.trump.push(item);
    } else if (date > obamaDate) {
      presidents.obama.push(item);
    } else if (date > bushTwoDate) {
      presidents.bushTwo.push(item);
    } else if (date > clintonDate) {
      presidents.clinton.push(item);
    } else if (date > bushOneDate) {
      presidents.bushOne.push(item);
    } else if (date > reaganDate) {
      presidents.reagan.push(item);
    } else if (date > carterDate) {
      presidents.carter.push(item);
    } else if (date > nixonDate) {
      presidents.nixon.push(item);
    } else if (date > johnsonDate) {
      presidents.johnson.push(item);
    } else if (date > kennedyDate) {
      presidents.kennedy.push(item);
    } else if (date > eisenhowerDate) {
      presidents.eisenhower.push(item);
    } else if (date > trumanDate) {
      presidents.truman.push(item);
    }
  });

  return [
    { data: presidents.truman, name: 'Truman', color: demBluePast },
    { data: presidents.eisenhower, name: 'Eisenhower', color: repRedPast },
    { data: presidents.kennedy, name: 'Kennedy', color: demBluePast },
    { data: presidents.johnson, name: 'Johnson', color: demBluePast },
    { data: presidents.nixon, name: 'Nixon/Ford', color: repRedPast },
    { data: presidents.carter, name: 'Carter', color: demBluePast },
    { data: presidents.reagan, name: 'Reagan', color: repRedPast },
    { data: presidents.bushOne, name: 'Bush I', color: repRedPast },
    { data: presidents.clinton, name: 'Clinton', color: demBluePast },
    { data: presidents.bushTwo, name: 'Bush II', color: repRedPast },
    { data: presidents.obama, name: 'Obama', color: demBlueCurrent },
    { data: presidents.trump, name: 'Trump', color: repRedCurrent },
  ];
};
