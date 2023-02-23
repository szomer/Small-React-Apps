import Note from '../Note/Note';

const notes = [
  {
    title: 'Nullam',
    content:
      'Duis ultricies in nisi a pretium. Etiam ut elementum nulla. Ut nec justo vel augue mollis ullamcorper.',
  },
  {
    title: 'Suspendisse sollicitudin',
    content:
      'Praesent facilisis maximus nisl fringilla eleifend. Etiam ipsum nibh, efficitur sed nisl sit amet, convallis mollis nisi. Quisque eleifend tempus turpis at fringilla. ',
  },
  {
    title: 'Phasellus ex erat',
    content:
      'Proin placerat rutrum ante. Proin tincidunt faucibus varius. Sed massa quam, tincidunt at nunc eget, dictum varius justo. Quisque suscipit non massa eu semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec placerat mi id ultricies vestibulum.',
  },
  {
    title: 'Nunc non',
    content:
      'In neque mauris, ultrices et hendrerit sed, pharetra ut arcu. Curabitur in volutpat eros. Integer bibendum risus eu velit fermentum cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc non lobortis enim, eget vulputate ex. Aenean sed ultricies lorem. Quisque vel magna in quam accumsan ornare. Nulla commodo leo in eleifend auctor. Nullam blandit faucibus efficitur.',
  },
  {
    title: 'Quisque interdum enim sem',
    content:
      'Quisque sed ornare ex. Suspendisse potenti. In in nulla nulla. Quisque id lectus lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus egestas, elit et ultricies luctus, ante neque semper diam, et elementum tortor turpis et ante.',
  },
  {
    title: 'Vivamus dignissim',
    content:
      'Vestibulum consequat aliquet magna eu pulvinar. Vestibulum sit amet iaculis libero, ultrices pharetra ante. Donec a nulla sed massa vestibulum suscipit sit amet ut eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum eget tellus metus. ',
  },
];
var col1 = [];
var col2 = [];
var col3 = [];
var count = 1;

notes.forEach((note) => {
  if (count === 1) {
    col1.push(<Note note={{ title: note.title, content: note.content }} />);
  } else if (count === 2) {
    col2.push(<Note note={{ title: note.title, content: note.content }} />);
  } else {
    col3.push(<Note note={{ title: note.title, content: note.content }} />);
    count = 0;
  }
  count++;
});

export { col1, col2, col3 };
