function configure(module) {
  "use strict";
  module.description = 'This module defines data types for delta synchronization.';
  module.datatypes = {
    Delta: {
      // a delta message transitions a session model to the next state
      Message: {
        // odd sequence number for delta request, even for delta respose
        sequence: 'integer',
        // list with actions on the model
        actions: '[Delta.Action]',
        // lease time for receiver of delta message
        lease: 'number',
        // set after communication failure
        retried: 'Flag'
      },
      Action: {
        path: '[string|integer]'
      },
      Assign: {
        $super: 'Delta.Action',
        value: 'Any'
      },
      Signal: {
        $super: 'Delta.Action',
        event: 'Any'
      },
      Splice: {
        $super: 'Delta.Action',
        deletes: 'integer',
        values: '[Any]?'
      },
      Remove: {
        $super: 'Delta.Action',
        keys: '[string]'
      },
      Update: {
        $super: 'Delta.Action',
        assigns: '<Any>'
      },
      Goto: {
        $super: 'Delta.Action',
        actions: '[Delta.Action]'
      },
      Status: {
        expects: 'integer',
        after: 'number'
      },
      Dump: {
        $super: 'Delta.Status',
        root: 'Delta.Model?'
      },
      File: {
        local: 'string?',
        size: 'integer',
        type: 'string'
      },
      Access: {
        content: '"cached"_"allocated"_"unknown"',
        guests: '[string]'
      },
      Authorization: {
        allows: '[string]',
        denies: '[string]'
      },
      Standard: {
        serverLease: 'number',
        maximumDelay: 'Maybe("pause"_"flush")',
        impatience: 'number?',
        download: '<Delta.Access> @event=server',
        approve: '<Delta.Authorization> @event=client'
      }
    }
  };
}