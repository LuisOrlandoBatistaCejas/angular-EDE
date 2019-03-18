import {EventEmitter, Input, Output} from '@angular/core';

export class BaseDatatable {
    // The data collection for showing in the table
    @Input() data: any[];
    // Event Emitter for delete event
    @Output() delete: EventEmitter<any> = new EventEmitter<any>();
    // Event Emitter for update event
    @Output() update: EventEmitter<any> = new EventEmitter<any>();
    constructor() {}

    /**
     * Emits update event
     * @param item
     */
    onUpdate(item) {
        this.update.emit(item);
    }

    /**
     * Emits delete event
     * @param id
     */
    onDelete(id) {
        this.delete.emit(id);
    }
}