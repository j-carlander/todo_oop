class TodoItem {
  constructor(title, content, endDate) {
    this.title = title;
    this.content = content;
    this.startDate = new Date().toLocaleString();
    this.endDate = endDate;
  }

  setDeadline(date) {
    this.endDate = new Date(date).toLocaleString;
  }

  getHTMLTemplate() {
    return `
        <details>
      <summary>${this.title}</summary>
      <p>${this.content}</p>
      <p>
        <span>Created: ${this.startDate}</span>
        <span>Deadline: ${this.endDate}</span>
        </p>
        </details>`;
  }

  checkTimeSinceCreated() {
    let created = new Date(this.startDate);
    let now = new Date();
    let timeSince = now - created;
    let dd = Math.floor(timeSince / 1000 / 60 / 60 / 24);
    timeSince -= dd * 1000 * 60 * 60 * 24;
    let hh = Math.floor(timeSince / 1000 / 60 / 60);
    timeSince -= hh * 1000 * 60 * 60;
    let mm = Math.floor(timeSince / 1000 / 60);
    timeSince -= mm * 1000 * 60;
    let sec = Math.floor(timeSince / 1000);
    return `${dd}days ${hh}:${mm}:${sec}`;
  }

  checkTimeRemaining() {
    let deadline = new Date(this.endDate);
    let now = new Date();
    let timeLeft = deadline - now;
    let dd = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
    timeLeft -= dd * 1000 * 60 * 60 * 24;
    let hh = Math.floor(timeLeft / 1000 / 60 / 60);
    timeLeft -= hh * 1000 * 60 * 60;
    let mm = Math.floor(timeLeft / 1000 / 60);
    timeLeft -= mm * 1000 * 60;
    let sec = Math.floor(timeLeft / 1000);
    return `${dd}days ${hh}h ${mm}m ${sec}s`;
  }
}
