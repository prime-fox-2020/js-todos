class View {
	static message(message) {
		console.log(message);
	}

	static showHelp() {
		console.log(`      $ node todo.js list
      $ node todo.js add <task_content>
      $ node todo.js findById <task_id>
      $ node todo.js delete <task_id>
      $ node todo.js complete <task_id>
      $ node todo.js uncomplete <task_id>
      `);
	}
	static showList(list) {
		for (let i = 0; i < list.length; i++) {
			if (list[i].status === false) {
				console.log(`${list[i].id}. [ ] ${list[i].input}`);
			} else {
				console.log(`${list[i].id}. [x] ${list[i].input}`);
			}
		}
	}
}

module.exports = View;
