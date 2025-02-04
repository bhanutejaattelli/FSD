// EventManager class handles the overall event lifecycle
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

// Class to handle starting the event
class StartEvent {
    constructor(eventManager) {
        this.eventManager = eventManager;
    }

    trigger() {
        const now = new Date();
        if (now >= this.eventManager.startTime) {
            this.eventManager.status = "In Progress";
            this.eventManager.startedAt = now;
            this.eventManager.notifyListeners();

            this.eventManager.interval = setInterval(() => {
                const elapsedTime = Math.floor((new Date() - this.eventManager.startedAt) / 1000);
                this.eventManager.inProgressDuration = `${elapsedTime} seconds`;
            }, 1000);

        } else {
            console.log(`Event "${this.eventManager.name}" cannot start yet.`);
        }
    }
}

// Class to handle finishing the event
class FinishEvent {
    constructor(eventManager) {
        this.eventManager = eventManager;
    }

    trigger() {
        if (this.eventManager.status === "In Progress") {
            this.eventManager.status = "Finished";
            this.eventManager.finishedAt = new Date().toLocaleTimeString();
            clearInterval(this.eventManager.interval);
            this.eventManager.notifyListeners();
        } else {
            console.log(`Event must be in progress before finishing.`);
        }
    }
}

// Class to check the current status of the event
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

// Example usage
const event1 = new EventManager("Conference", "2025-02-04T10:00:00", "2025-02-04T15:00:00");

event1.addListener(event => {
    console.log(`Status Updated: ${event.status}`);
});

// Creating instances for each action
const startEvent = new StartEvent(event1);
const finishEvent = new FinishEvent(event1);
const statusEvent = new StatusEvent(event1);

// Simulating the actions
startEvent.trigger();  // Try to start the event
setTimeout(() => finishEvent.trigger(), 5000);  // Finish after 5 seconds
setTimeout(() => statusEvent.trigger(), 6000);  // Check status after 6 seconds
