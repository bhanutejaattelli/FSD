const EventEmitter = require('events');

class EventManagement extends EventEmitter {
    start() {
        console.log('Event started');
        this.emit('start');
    }

    inProgress() {
        console.log('Event in progress');
        this.emit('in-progress');
    }

    complete() {
        console.log('Event completed');
        this.emit('completed');
    }
}

module.exports = EventManagement;