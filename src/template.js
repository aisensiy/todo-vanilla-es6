import {escapeForHTML} from './helpers';

export default class Template {
	static todoItem(item) {
		return `
<li data-id="${item.id}"${item.completed ? ' class="completed"' : ''}>
  <div class="view">
    <input class="toggle" type="checkbox" ${item.completed ? 'checked' : ''}>
    <label>${escapeForHTML(item.title)}</label>
    <button class="destroy"></button>
  </div>
</li>`;
	}

	/**
	 * Format the contents of an "items left" indicator.
	 *
	 * @param {number} activeTodos Number of active todos
	 *
	 * @returns {!string} Contents for an "items left" indicator
	 */
	static itemCounter(activeTodos) {
		return `还有 ${activeTodos} 个`;
	}
}
