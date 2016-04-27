function configure(module) {
  "use strict";
  module.description = 'This module defines data types for delta synchronization.';
  module.datatypes = {
    // a delta message transitions a session model to the next state
    'Delta.Message': {
      // odd sequence number for delta request, even for delta respose
      sequence: 'integer',
      // list with actions on the model
      actions: '[Delta.Action]',
      // lease time for receiver of delta message
      lease: 'number',
      // set after communication failure
      retried: 'Flag'
    },
    'Delta.Action': {
      path: '[string|integer]'
    },
    'Delta.Assign': {
      $super: 'Delta.Action',
      value: 'Any'
    },
    'Delta.Signal': {
      $super: 'Delta.Action',
      event: 'Any'
    },
    'Delta.Splice': {
      $super: 'Delta.Action',
      deletes: 'integer',
      values: '[Any]?'
    },
    'Delta.Remove': {
      $super: 'Delta.Action',
      keys: '[string]'
    },
    'Delta.Update': {
      $super: 'Delta.Action',
      assigns: '<Any>'
    },
    'Delta.Goto': {
      $super: 'Delta.Action',
      actions: '[Delta.Action]'
    },
    'Delta.Status': {
      expects: 'integer',
      after: 'number'
    },
    'Delta.Dump': {
      $super: 'Delta.Status',
      root: 'Delta.Model?'
    },
    'Delta.File': {
      local: 'string?',
      size: 'integer',
      type: 'string'
    },
    'Delta.Access': {
      content: '"cached"_"allocated"_"unknown"',
      guests: '[string]'
    },
    'Delta.Authorization': {
      allows: '[string]',
      denies: '[string]'
    },
    'Delta.Standard': {
      serverLease: 'number',
      maximumDelay: 'Maybe("pause"_"flush")',
      impatience: 'number?',
      verify: '<Delta.Access> @event=server',
      approve: '<Delta.Authorization> @event=client'
    }
  };
}