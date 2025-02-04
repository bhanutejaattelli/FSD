class EventManager {
    constructor(name, startTime, endTime) {
        this.name = name;
        this.startTime = new Date(startTime);
        this.endTime = new Date(endTime);
        this.status = "Not Started";
        this.startedAt = null;
        this.finishedAt = null;
        this.inProgressDuration = null;
        this.interval = null;
        this.listeners = [];
    }

    addListener(callback) {
        this.listeners.push(callback);
    }

    notifyListeners() {
        this.listeners.forEach(callback => callback(this));
    }
}

class StartEvent {
    constructor(eventManager) {
        this.eventManager = eventManager;
    }

    trigger() {
        if (new Date() >= this.eventManager.startTime) {
            this.eventManager.status = "In Progress";
            this.eventManager.startedAt = new Date();
            this.eventManager.notifyListeners();

            // Start tracking duration
            this.eventManager.interval = setInterval(() => {
                let elapsedTime = Math.floor((new Date() - this.eventManager.startedAt) / 1000);
                this.eventManager.inProgressDuration = `${elapsedTime} seconds`;
            }, 1000);
        } else {
            console.log(`Event "${this.eventManager.name}" cannot start yet.`);
        }
    }
}

class FinishEvent {
    constructor(eventManager) {
        this.eventManager = eventManager;
    }

    trigger() {
        if (this.eventManager.status === "In Progress") {
            this.eventManager.status = "Finished";
            this.eventManager.finishedAt = new Date().toLocaleTimeString();
            clearInterval(this.eventManager.interval); // Stop duration tracking
            this.eventManager.notifyListeners();
        } else {
            console.log(`Event must be in progress before finishing.`);
        }
    }
}

class StatusEvent {
    constructor(eventManager) {
        this.eventManager = eventManager;
    }

    trigger() {
        console.log(`
            Event: ${this.eventManager.name}
            Status: ${this.eventManager.status}
            Started At: ${this.eventManager.startedAt ? this.eventManager.startedAt.toLocaleTimeString() : "-"}
            In Progress Duration: ${this.eventManager.inProgressDuration || "-"}
            Finished At: ${this.eventManager.finishedAt || "-"}
        `);
    }
}

// Usage Example
const event1 = new EventManager("Conference", "2025-02-04T10:00:00", "2025-02-04T15:00:00");

event1.addListener(event => {
    console.log(`Status Updated: ${event.status}`);
    console.log(`Started At: ${event.startedAt ? event.startedAt.toLocaleTimeString() : "-"}`);
    console.log(`Finished At: ${event.finishedAt || "-"}`);
});

const startEvent = new StartEvent(event1);
const finishEvent = new FinishEvent(event1);
const statusEvent = new StatusEvent(event1);

// Simulating user actions
startEvent.trigger();       // Starts the event
setTimeout(() => {
    statusEvent.trigger();  // Checks status after some time
    finishEvent.trigger();  // Finishes the event
    statusEvent.trigger();  // Checks final status
}, 5000);
