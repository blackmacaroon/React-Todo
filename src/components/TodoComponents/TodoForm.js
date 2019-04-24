import React from 'react';
import { throws } from 'assert';

<form onSubmit={this.addTodo}>
      <input name='todo' type='text' placeholder='whatcha gonna do?' value={this.state.todo} onChange={this.handleChanges} />
      <button>Add To-Do</button>
      <button>Clear Completed To-Dos</button>
</form>