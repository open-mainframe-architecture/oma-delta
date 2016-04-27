'BaseObject+Role'.subclass(I => {
  "use strict";
  I.play({
    alloc: I.remotely(['Delta.File'], 'string', I.burdenSubclass),
    do: I.remotely(['Delta.Message'], 'Delta.Message', I.burdenSubclass),
    dump: I.remotely('Delta.Dump', I.burdenSubclass),
    greedy: I.remotely('number', I.burdenSubclass),
    modeltype: I.remotely('string', I.burdenSubclass),
    plumb: I.remotely('string', I.burdenSubclass),
    poll: I.remotely('Delta.Status', I.burdenSubclass),
    ready: I.remotely('number', I.burdenSubclass),
    realloc: I.remotely(['<Delta.File>'], 'number', I.burdenSubclass),
    typespace: I.remotely('<string>', I.burdenSubclass)
  });
})